# Blog Agent - Automation para Artigos do arXiv

Este é um agente automatizado que semanalmente busca artigos interessantes no arXiv sobre Inteligência Artificial e Visão Computacional, e os adiciona automaticamente ao seu blog.

## 🚀 Funcionalidades

- ✅ Busca automática de artigos no arXiv (últimos 7 dias)
- ✅ Seleção inteligente de 3 melhores artigos usando Llama 3 (via Groq)
- ✅ Geração automática de resumos com IA
- ✅ Criação de arquivos Markdown com frontmatter
- ✅ Commit e push automático ao repositório
- ✅ Execução semanal via GitHub Actions

## 📋 Stack

- **Groq** - LLM rápida e gratuita (Llama 3)
- **LangChain** - Orquestração do agente
- **arxiv** - Busca de artigos
- **GitPython** - Automação de commits
- **GitHub Actions** - Agendamento semanal

## 🔧 Setup

### 1. Adicionar Secrets no GitHub

Vá para `Settings → Secrets and variables → Actions` e adicione:

```
GROQ_API_KEY=gsk_... (sua chave do Groq)
TOKEN=ghp_... (seu token do GitHub)
```

**Como gerar a chave Groq:**
1. Acesse https://console.groq.com
2. Crie uma account gratuita
3. Vá para API Keys e crie uma nova chave

### 2. Configuração Local (opcional, para testes)

```bash
# Navegar para a pasta do agente
cd blog-agent

# Criar arquivo .env
cp .env.example .env

# Editar .env com suas chaves
# GROQ_API_KEY=sua_chave
# TOKEN=seu_token

# Instalar dependências
pip install -r requirements.txt

# Executar manualmente
python agent.py
```

## 📅 Agendamento

O agente executa automaticamente:
- **Quando**: Todo domingo às 10:00 UTC
- **O que faz**: Busca artigos do arXiv → Seleciona os 3 melhores → Salva como MD → Faz push

Você pode modificar o schedule no `.github/workflows/weekly.yml`:

```yaml
schedule:
  - cron: '0 10 * * 0'  # Minuto, Hora, Dia do mês, Mês, Dia da semana
```

## 📁 Estrutura de Arquivos Gerados

Os artigos são salvos em `public/articles/`:

```
public/articles/
├── articles.json
├── 20240116-0-neural-networks-taxonomy.md
├── 20240116-1-vision-transformer-survey.md
└── 20240116-2-attention-mechanisms.md
```

Cada arquivo MD segue este formato:

```markdown
---
title: "Título do Artigo"
date: "16/01/2024"
authors: "Autor 1, Autor 2"
arxivUrl: "https://arxiv.org/abs/2401.xxxxx"
tags: "inteligência artificial, pesquisa, arxiv"
excerpt: "Artigo recente do arXiv sobre IA"
---

## Resumo

[Resumo gerado por IA]

## Referência

- **ArXiv ID**: 2401.xxxxx
- ...
```

## 🎯 Como Usar

### Para visualizar os artigos no frontend:

A aba "Artigos" no seu portfolio carregará automaticamente os arquivos de `public/articles/articles.json`.

### Para fazer um teste manual:

```bash
cd blog-agent
python agent.py
```

## 🔍 Monitoramento

Você pode ver o histórico de execuções em:
`GitHub → Actions → Weekly ArXiv Blog Articles`

## ⚙️ Troubleshooting

### Erro: "GROQ_API_KEY not found"
- Verifique se a chave foi adicionada corretamente nos Secrets do GitHub

### Erro: "Could not find articles"
- Pode ser que não haja artigos novos naquela semana
- O agente tenta apenas os últimos 7 dias

### Não está fazendo push
- Verifique se o `TOKEN` foi adicionado corretamente
- Certifique-se de que o token tem permissão de `repo`

## 📝 Customização

Você pode modificar:

1. **Filtros de busca**: Edite a query em `agent.py` linha ~80
2. **Número de artigos selecionados**: Altere `select_best_articles()` para retornar mais
3. **Modelo de IA**: Mude `model="llama-3.1-70b-versatile"` para outro disponível no Groq
4. **Schedule**: Edite o cron em `.github/workflows/weekly.yml`

## 📚 Referências

- [Groq Console](https://console.groq.com)
- [LangChain Docs](https://docs.langchain.com)
- [arXiv API](https://arxiv.org/help/api)
- [GitHub Actions Cron](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onschedule)

## 📄 Licença

MIT
