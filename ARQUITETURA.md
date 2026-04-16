# 🏗️ ARQUITETURA - Artigos + Blog Agent

## Diagrama da Solução

```
┌─────────────────────────────────────────────────────────────────┐
│                          PORTFOLIO (React)                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌───────────────┬──────────────┬──────────────────┐             │
│  │   Portfolio   │     Blog     │  📰 Artigos      │   NOVO      │
│  └───────────────┴──────────────┴──────────────────┘             │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐    │
│  │  Artigos/ArticleList.jsx                                │    │
│  │  - Carrega articles.json                                 │    │
│  │  - Exibe cards com título, data, autores, preview       │    │
│  └──────────────────────────────────────────────────────────┘    │
│                                ↓                                  │
│  ┌──────────────────────────────────────────────────────────┐    │
│  │  Artigos/ArticlePost.jsx                                │    │
│  │  - Carrega .md file                                      │    │
│  │  - Renderiza Markdown completo                           │    │
│  │  - Exibe link arXiv                                      │    │
│  └──────────────────────────────────────────────────────────┘    │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
                              ↑
                              │
                       (fetch de)
                              │
         ┌────────────────────┴────────────────────┐
         │                                         │
    ┌────▼────────┐                    ┌──────────▼────┐
    │public/       │                    │ .github/      │
    │articles/    │                    │workflows/     │
    │             │                    │               │
    │ articles.json◄────────────────────►weekly.yml    │
    │ [artigos].md │    (atualizado)    │               │
    └─────────────┘     semanalmente    └───────┬──────┘
         ▲                                       │
         │                              (dispara toda
         │                               domingo 10:00)
         │                                       │
         └───────────────────────────────────────┴────┐
                                                      │
                        ┌─────────────────────────────▼──────┐
                        │   GitHub Actions (CI/CD)           │
                        │                                    │
                        │  ┌────────────────────────────┐   │
                        │  │ 1. Setup Python 3.11       │   │
                        │  │ 2. pip install deps        │   │
                        │  │ 3. python agent.py         │   │
                        │  │ 4. git commit + push       │   │
                        │  └────────────────────────────┘   │
                        │                                    │
                        └────────────────┬───────────────────┘
                                         │
                        ┌────────────────▼───────────────────┐
                        │   Blog Agent (blog-agent/agent.py) │
                        │                                    │
                        │  ┌────────────────────────────┐   │
                        │  │ 1. arxiv.Client            │   │
                        │  │    - Busca últimos 7 dias  │   │
                        │  │    - Filtra AI + CV        │   │
                        │  │    - Retorna 50 artigos    │   │
                        │  └────────────────────────────┘   │
                        │              ↓                     │
                        │  ┌────────────────────────────┐   │
                        │  │ 2. LangChain + Groq        │   │
                        │  │    - Envia prompt          │   │
                        │  │    - LLM seleciona 3       │   │
                        │  │    - Gera resumos          │   │
                        │  └────────────────────────────┘   │
                        │              ↓                     │
                        │  ┌────────────────────────────┐   │
                        │  │ 3. Gera Markdown           │   │
                        │  │    - Frontmatter           │   │
                        │  │    - Conteúdo             │   │
                        │  │    - Atualiza articles.json│   │
                        │  └────────────────────────────┘   │
                        │              ↓                     │
                        │  ┌────────────────────────────┐   │
                        │  │ 4. GitPython               │   │
                        │  │    - Commit               │   │
                        │  │    - Push                 │   │
                        │  └────────────────────────────┘   │
                        │                                    │
                        └────────────────┬───────────────────┘
                                         │
                        ┌────────────────▼───────────────────┐
                        │   Dependências Externas            │
                        │                                    │
                        │  ┌─────────────┐  ┌────────────┐  │
                        │  │ arxiv API   │  │  Groq API  │  │
                        │  │ (free)      │  │ (free tier)│  │
                        │  └─────────────┘  └────────────┘  │
                        │                                    │
                        │  ┌────────────────────────────┐   │
                        │  │ GitHub API (via token)     │   │
                        │  └────────────────────────────┘   │
                        │                                    │
                        └────────────────────────────────────┘
```

## Stack Tecnológico

```
┌─────────────────────────────────────────────────────────┐
│  FRONTEND                                               │
├─────────────────────────────────────────────────────────┤
│  React 18+                                              │
│  React Router (navegação /articles e /articles/:slug)   │
│  Styled Components (estilos responsivos)                │
│  React Markdown (renderiza .md files)                   │
└─────────────────────────────────────────────────────────┘
                          ↕
┌─────────────────────────────────────────────────────────┐
│  BACKEND (Automation)                                   │
├─────────────────────────────────────────────────────────┤
│  Python 3.11+                                           │
│  - arxiv (busca de papers)                             │
│  - LangChain (orquestração)                            │
│  - Groq API (LLM Llama 3)                              │
│  - GitPython (git operations)                          │
│  - python-dotenv (variáveis)                           │
└─────────────────────────────────────────────────────────┘
                          ↕
┌─────────────────────────────────────────────────────────┐
│  CI/CD                                                  │
├─────────────────────────────────────────────────────────┤
│  GitHub Actions                                         │
│  - Schedule: cron (toda semana)                         │
│  - Secrets: GROQ_API_KEY, TOKEN                      │
│  - Runs on: ubuntu-latest                              │
└─────────────────────────────────────────────────────────┘
                          ↕
┌─────────────────────────────────────────────────────────┐
│  STORAGE                                                │
├─────────────────────────────────────────────────────────┤
│  Git Repository (GitHub)                                │
│  - public/articles/articles.json (índice)              │
│  - public/articles/*.md (conteúdo)                     │
│  - .github/workflows/weekly.yml (agendamento)          │
└─────────────────────────────────────────────────────────┘
```

## Fluxo de Dados

```
arXiv API
    │
    ├─ GET /latest?search_query=AI,CV
    │
    └─→ 50 artigos
         │
         ├─ title
         ├─ authors
         ├─ summary
         ├─ arxiv_id
         └─ published_date
              │
              └─→ Groq API (LangChain)
                  │
                  ├─ Prompt: "Escolha os 3 melhores"
                  │
                  └─→ Llama 3 (LLM)
                      │
                      └─→ [0, 2, 5] (índices selecionados)
                          │
                          ├─→ Artigo 0: Gera resumo
                          ├─→ Artigo 2: Gera resumo
                          ├─→ Artigo 5: Gera resumo
                          │
                          └─→ 3 arquivos .md
                              │
                              ├─ articles.json (atualizado)
                              │
                              └─→ Git Push
                                  │
                                  └─→ Portfolio React
                                      │
                                      └─→ Exibe na aba Artigos
```

## Exemplo: Arquivo Gerado

```markdown
---
title: "Vision Transformers: An Image is Worth 16x16 Words"
date: "15/01/2024"
authors: "Dosovitskiy, A., Beyer, L., Kolesnikov, A."
arxivUrl: "https://arxiv.org/abs/2010.11929"
tags: "visão computacional, transformer, deep learning, classificação"
excerpt: "Aplicação bem-sucedida de arquitetura Transformer pura para tarefas de visão"
---

## Resumo

Este artigo seminal demonstra que imagens podem ser segmentadas em patches (como
tokens em NLP) e processadas diretamente por transformers puros. O Vision Transformer
(ViT) alcança resultados SOTA em ImageNet com escalabilidade excepcional quando
pré-treinado em grandes datasets como JFT-300M.

Os autores mostram que a arquitetura de self-attention é suficiente para construir
modelos de visão competitivos, eliminando a necessidade de convoluções. Quando
combinado com pré-treinamento em larga escala, ViT supera transformers híbridos e
modelos convencionais baseados em CNN.

A abordagem é conceitualmente mais simples e computacionalmente mais eficiente que
arquiteturas tradicionais, permitindo paralelização completa durante o treinamento.
Os resultados abrem o caminho para uma arquitetura unificada entre NLP e visão.

## Referência

- **ArXiv ID**: 2010.11929
- **Link**: [2010.11929](https://arxiv.org/abs/2010.11929)
- **Autores**: Dosovitskiy, A., Beyer, L., Kolesnikov, A., et al.
- **Publicado**: 15/01/2024

## Categorias

cs.CV, cs.LG, cs.AI
```

## Componentes React

```
ArticleList (Container)
    │
    ├─ useState(articles)
    ├─ useState(error)
    ├─ useEffect → fetch articles.json
    │
    └─ Render
       └─ ArticleGrid (map)
          └─ Link → ArticleCard
             ├─ Title
             ├─ Date
             ├─ Authors
             ├─ Preview (180 chars)
             ├─ Tags

ArticlePost (Container)
    │
    ├─ useParams({slug})
    ├─ useState(data)
    ├─ useEffect → fetch [slug].md
    │
    └─ Render
       ├─ Header
       │  ├─ Title
       │  ├─ Meta (date, authors)
       │  ├─ arXiv Link
       │  └─ Tags
       │
       └─ Content
          └─ ReactMarkdown (remarkGfm)
             └─ parsed HTML
```

## Fluxo de Execução (GitHub Actions)

```
Sunday 10:00 UTC
    ↓
trigger: schedule (cron)
    ↓
checkout repository
    ↓
setup Python 3.11
    ↓
cache pip packages
    ↓
install requirements.txt
    ↓
set git config (user.name, user.email)
    ↓
export GROQ_API_KEY (from secrets)
    ↓
export TOKEN (from secrets)
    ↓
run: python agent.py
    │
    ├─ load_env()
    ├─ init_groq() → ChatGroq(api_key)
    ├─ init_repo() → Repo(REPO_PATH)
    │
    ├─ fetch_arxiv_articles()
    │  └─ query: "cat:cs.AI OR cat:cs.CV"
    │  └─ last_week timestamp
    │  └─ return 50 articles
    │
    ├─ select_best_articles()
    │  └─ build prompt with article summaries
    │  └─ invoke llm
    │  └─ parse JSON response
    │  └─ return top 3
    │
    ├─ save_articles()
    │  ├─ for each article:
    │  │  ├─ generate_article_markdown()
    │  │  ├─ create slug
    │  │  ├─ save .md file
    │  ├─ update articles.json
    │  └─ return slugs list
    │
    └─ commit_and_push()
       ├─ git add .
       ├─ git commit -m "📚 Artigos do arXiv - 2024-01-15"
       └─ git push origin main
          ↓
          Portfolio React
          carrega articles.json
          renderiza novo artigos
          └─→ ✅ Visible to users
```

## Segurança

```
┌─────────────────────────────────────────┐
│  GitHub Secrets (Encrypted)             │
├─────────────────────────────────────────┤
│                                         │
│  GROQ_API_KEY                           │
│  └─ Only readable during workflow       │
│  └─ Never logged                        │
│  └─ Rotatable anytime                   │
│                                         │
│  TOKEN                                              │
│  └─ Scoped permissions (repo only)      │
│  └─ Short-lived                         │
│  └─ Auto-revoked if leaked              │
│                                         │
└─────────────────────────────────────────┘
        ↓
    Workflow
        ↓
    Environment vars
        ↓
    Python script
        ↓
    API calls (HTTPS)
        ↓
    Git push (HTTPS + token)
```

---

**Arquitetura robusta, escalável e segura! 🚀**
