#!/usr/bin/env python3
"""
Blog Agent - Semanalmente busca artigos no arXiv sobre IA e Visão Computacional
e popula o blog com os 3 mais interessantes.
"""

import os
import json
import arxiv
import re
from datetime import datetime, timedelta
from pathlib import Path
from typing import List
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain.schema import HumanMessage
from git import Repo
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
TOKEN = os.getenv("TOKEN")
REPO_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

class BlogAgent:
    def __init__(self):
        self.repo = Repo(REPO_PATH)
        self.articles_dir = Path(REPO_PATH) / "public" / "articles"
        self.llm = None
        try:
            self.llm = self.create_llm()
        except Exception:
            logger.error("Não foi possível inicializar o ChatGroq. Verifique GROQ_API_KEY.")

    def create_llm(self):
        if not GROQ_API_KEY:
            raise ValueError(
                "A variável de ambiente GROQ_API_KEY não está definida. "
                "Defina-a no arquivo .env ou no ambiente antes de executar o agente."
            )

        model = os.getenv("GROQ_MODEL", "llama-3.1-8b-instant")
        return ChatGroq(
            api_key=GROQ_API_KEY,
            model=model,
            temperature=0.5,
        )

    def fetch_arxiv_articles(self, max_results: int = 50) -> List[dict]:
        last_week = datetime.now() - timedelta(days=7)
        
        query = (
            'cat:cs.AI OR cat:cs.CV AND '
            'submittedDate:[' + last_week.strftime('%Y%m%d') + '000000 TO ' + 
            datetime.now().strftime('%Y%m%d') + '235959]'
        )
        
        client = arxiv.Client()
        articles = []
        
        search = arxiv.Search(
            query=query,
            max_results=max_results,
            sort_by=arxiv.SortCriterion.SubmittedDate,
            sort_order=arxiv.SortOrder.Descending
        )
        
        for result in client.results(search):
            articles.append({
                'title': result.title,
                'authors': ', '.join([author.name for author in result.authors[:3]]),
                'summary': result.summary,
                'arxiv_id': result.entry_id.split('/abs/')[-1],
                'published': result.published.isoformat(),
                'arxiv_url': getattr(result, 'source_url', result.entry_id),
                'categories': result.categories
            })
        
        logger.info(f"Encontrados {len(articles)} artigos")
        return articles
    
    def select_best_articles(self, articles: List[dict]) -> List[dict]:
        
        articles_text = "\n\n".join([
            f"ID: {i}\n"
            f"Título: {article['title']}\n"
            f"Autores: {article['authors']}\n"
            f"Resumo: {article['summary'][:500]}..."
            for i, article in enumerate(articles[:20])
        ])
        
        prompt = f"""Você é um especialista em Inteligência Artificial e Visão Computacional.
        
Analise os seguintes artigos recentes do arXiv e selecione os 3 MAIS INTERESSANTES e INOVADORES.
Considere:
- Novidade da pesquisa
- Impacto potencial
- Relevância para o campo
- Clareza da contribuição

Artigos:
{articles_text}

Responda APENAS com uma lista JSON no formato:
[{{"id": 0, "motivo": "razão breve"}}, {{"id": 1, "motivo": "razão"}}, {{"id": 2, "motivo": "razão"}}]

Não inclua nenhum texto além do JSON."""

        try:
            response = self.llm.invoke([HumanMessage(content=prompt)])
            response_text = response.content.strip()
            
            # Extrair JSON da resposta
            json_match = re.search(r'\[.*\]', response_text, re.DOTALL)
            if json_match:
                selections = json.loads(json_match.group())
                selected = [articles[sel['id']] for sel in selections if sel['id'] < len(articles)]
                return selected[:3]
        except Exception as e:
            logger.error(f"Erro ao selecionar artigos: {e}")
        
        return articles[:3]
    
    def generate_article_markdown(self, article: dict, index: int) -> tuple[str, str]:
        """Gera arquivo markdown para um artigo."""
        logger.info(f"Gerando markdown para: {article['title']}")
        
        slug = re.sub(r'[^\w\s-]', '', article['title'].lower())
        slug = re.sub(r'[-\s]+', '-', slug)
        slug = f"{datetime.now().strftime('%Y%m%d')}-{index}-{slug[:30]}"
        
        summary_prompt = f"""Resuma este artigo de forma clara e técnica em 3-4 parágrafos.

Título: {article['title']}
Resumo Original: {article['summary']}

Não inclua referências ou explicações adicionais."""

        try:
            summary_response = self.llm.invoke([HumanMessage(content=summary_prompt)])
            summary = summary_response.content.strip()
        except Exception as e:
            logger.warning(f"Erro ao gerar resumo com IA: {e}")
            summary = article['summary']
        
        date_obj = datetime.fromisoformat(article['published'].replace('Z', '+00:00'))
        formatted_date = date_obj.strftime('%d/%m/%Y')
        
        frontmatter = f"""---
title: "{article['title']}"
date: "{formatted_date}"
authors: "{article['authors']}"
arxivUrl: "{article['arxiv_url']}"
tags: "inteligência artificial, pesquisa, arxiv"
excerpt: "Artigo recente do arXiv sobre IA"
---
"""
        
        content = f"""{frontmatter}

## Resumo

{summary}

## Referência

- **ArXiv ID**: {article['arxiv_id']}
- **Link**: [{article['arxiv_id']}]({article['arxiv_url']})
- **Autores**: {article['authors']}
- **Publicado**: {formatted_date}

## Categorias

{', '.join(article['categories'])}
"""
        
        return slug, content
    
    def save_articles(self, articles: List[dict]):
        """Salva artigos como markdown files."""
        logger.info("Salvando artigos...")
        
        self.articles_dir.mkdir(parents=True, exist_ok=True)
        
        slugs = []
        for index, article in enumerate(articles):
            slug, content = self.generate_article_markdown(article, index)
            
            file_path = self.articles_dir / f"{slug}.md"
            file_path.write_text(content, encoding='utf-8')
            logger.info(f"Salvo: {file_path}")
            
            slugs.append(slug)
        
        # Atualizar articles.json
        articles_json_path = self.articles_dir / "articles.json"
        current_data = {}
        if articles_json_path.exists():
            current_data = json.loads(articles_json_path.read_text())
        
        # Adicionar novos slugs ao início da lista
        current_slugs = current_data.get('slugs', [])
        updated_slugs = slugs + current_slugs
        
        updated_data = {'slugs': updated_slugs}
        articles_json_path.write_text(
            json.dumps(updated_data, ensure_ascii=False, indent=2),
            encoding='utf-8'
        )
        logger.info(f"Atualizado: {articles_json_path}")
        
        return slugs
    
    def commit_and_push(self, article_slugs: List[str]):
        """Faz commit e push das mudanças."""
        logger.info("Fazendo commit e push...")
        
        try:
            # Configurar git
            self.repo.git.config('user.email', 'blog-agent@example.com')
            self.repo.git.config('user.name', 'Blog Agent')
            
            # Add files
            for slug in article_slugs:
                self.repo.index.add([str(self.articles_dir / f"{slug}.md")])
            self.repo.index.add([str(self.articles_dir / "articles.json")])
            
            # Commit
            commit_message = f"📚 Adicionados {len(article_slugs)} novos artigos do arXiv"
            self.repo.index.commit(commit_message)
            logger.info(f"Commit realizado: {commit_message}")
            
            # Push
            if TOKEN:
                origin = self.repo.remote('origin')
                origin_url = origin.url
                if origin_url.startswith("https://"):
                    auth_url = origin_url.replace(
                        "https://",
                        f"https://x-access-token:{TOKEN}@",
                        1,
                    )
                    branch_name = self.repo.active_branch.name
                    self.repo.git.push(auth_url, f"HEAD:{branch_name}")
                    logger.info("Push realizado com sucesso via TOKEN")
                else:
                    logger.warning(
                        "Origin remoto não está em HTTPS. Tentando push padrão sem credenciais."
                    )
                    origin.push()
                    logger.info("Push realizado com sucesso")
            else:
                logger.warning("TOKEN não configurado, pulando push")
                
        except Exception as e:
            logger.error(f"Erro ao fazer commit/push: {e}")
    
    def run(self):
        """Executa o pipeline completo."""
        logger.info("Iniciando Blog Agent...")

        if self.llm is None:
            logger.error(
                "LLM não inicializado. Verifique se GROQ_API_KEY está configurado no .env ou no ambiente."
            )
            return

        try:
            # 1. Buscar artigos do arXiv
            articles = self.fetch_arxiv_articles()
            
            if not articles:
                logger.warning("Nenhum artigo encontrado no arXiv")
                return
            
            # 2. Selecionar os melhores
            best_articles = self.select_best_articles(articles)
            
            if not best_articles:
                logger.warning("Nenhum artigo foi selecionado")
                return
            
            logger.info(f"Selecionados {len(best_articles)} artigos")
            
            # 3. Salvar como markdown
            slugs = self.save_articles(best_articles)
            
            # 4. Fazer commit e push
            self.commit_and_push(slugs)
            
            logger.info("Blog Agent finalizado com sucesso!")
            
        except Exception as e:
            logger.error(f"Erro ao executar Blog Agent: {e}")
            raise

if __name__ == "__main__":
    agent = BlogAgent()
    agent.run()
