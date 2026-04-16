# 🎯 GUIA RÁPIDO - COMEÇAR EM 5 MINUTOS

## ⚡ Setup Ultra-Rápido

### Windows
```bash
cd seu_portfolio
setup-windows.bat
```

### macOS/Linux
```bash
cd seu_portfolio
chmod +x setup.sh
./setup.sh
```

## 🔐 Passo 1: Adicionar Secrets no GitHub (2 min)

1. Vá para seu repositório no GitHub
2. **Settings → Secrets and variables → Actions**
3. Clique **New repository secret**

### Secret 1: GROQ_API_KEY
```
Nome: GROQ_API_KEY
Valor: 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
```

### Secret 2: GITHUB_TOKEN
```
Nome: TOKEN
Valor: [seu token gerado em https://github.com/settings/tokens]
```

## 📤 Passo 2: Fazer Push (1 min)

```bash
git add .
git commit -m "🚀 Artigos + Blog Agent"
git push
```

## ✅ Passo 3: Verificar (2 min)

1. Vá para **Actions** no GitHub
2. Procure **Weekly ArXiv Blog Articles**
3. Clique em **Run workflow** para testar

## 🌐 Resultado

- ✅ Nova aba **Artigos** no seu portfolio
- ✅ Bot buscando artigos todo domingo
- ✅ 3 artigos automáticos por semana
- ✅ Tudo gratuito

---

## 🎨 Mudanças Visuais

### Frontend - Nova Aba "Artigos"
```
Portfolio | Blog | Artigos ← NOVO
```

### Página de Artigos
```
┌─────────────────────────────────┐
│  📰 ARTIGOS                     │
├─────────────────────────────────┤
│                                 │
│  ┌─────────────────────────────┐│
│  │ 🔬 Vision Transformers      ││
│  │ 15/01/2024 | Por: Dosovitsk ││
│  │ Aplicação de transformers...││
│  │ #visão #ia #pesquisa        ││
│  └─────────────────────────────┘│
│                                 │
│  ┌─────────────────────────────┐│
│  │ 🤖 Self-Attention Networks   ││
│  │ 14/01/2024 | Por: Vaswani    ││
│  │ Mecanismos de atenção...    ││
│  │ #nlp #transformer #ai        ││
│  └─────────────────────────────┘│
│                                 │
└─────────────────────────────────┘
```

### Página Individual de Artigo
```
┌──────────────────────────────────────┐
│ ← Voltar para artigos                │
├──────────────────────────────────────┤
│                                      │
│  Vision Transformers: A Review       │
│  15/01/2024 | Por: Dosovitskiy, A.   │
│  [Ver no arXiv →]                    │
│  #visão #ia #pesquisa                │
│                                      │
├──────────────────────────────────────┤
│                                      │
│  ## Resumo                           │
│  [Conteúdo do artigo...]             │
│                                      │
│  ## Referência                       │
│  - ArXiv ID: 2010.11929              │
│  - Link: https://arxiv.org/...       │
│  - Autores: Dosovitskiy, A., et al.  │
│                                      │
└──────────────────────────────────────┘
```

## 📁 Arquivos Criados

```
✅ src/Pages/Articles/ArticleList.jsx
✅ src/Pages/Articles/ArticlePost.jsx
✅ src/Pages/Articles/styles.js
✅ public/articles/articles.json
✅ public/articles/example-transformer.md
✅ blog-agent/agent.py
✅ blog-agent/requirements.txt
✅ blog-agent/test.py
✅ blog-agent/README.md
✅ blog-agent/.env.example
✅ blog-agent/.gitignore
✅ .github/workflows/weekly.yml
✅ setup-windows.bat
✅ setup.sh
✅ SETUP_ARTIGOS.md
✅ IMPLEMENTACAO_COMPLETA.md
✅ QUICKSTART.md (este arquivo)
```

## 🔧 Testes Locais

```bash
cd blog-agent

# Verificar se tudo funciona
python test.py

# Executar agente manualmente
python agent.py

# Ver novos artigos em public/articles/
```

## 🎓 Entender o Fluxo

```
Domingo 10:00 UTC
    ↓
⚙️ GitHub Actions dispara
    ↓
🐍 Python executa blog-agent/agent.py
    ↓
🔍 Busca 50 artigos no arXiv
    ↓
🧠 Llama 3 (Groq) escolhe os 3 melhores
    ↓
📝 Gera resumo de cada com IA
    ↓
📄 Cria arquivos .md com frontmatter
    ↓
💾 Atualiza articles.json
    ↓
🚀 Git commit + push
    ↓
🌐 Portfolio atualizado
    ↓
👤 Usuários veem novos artigos
```

## 🎯 O que é Frontmatter?

É o cabeçalho de metadados em cada artigo:

```markdown
---
title: "Vision Transformers"      ← Título exibido
date: "15/01/2024"               ← Data do artigo
authors: "Dosovitskiy, A."       ← Quem escreveu
arxivUrl: "https://..."          ← Link para arXiv
tags: "visão, ia, pesquisa"      ← Tags/categorias
excerpt: "Descrição breve..."    ← Pré-visualização
---

[Conteúdo do artigo aqui]
```

## 🐛 Se Algo Não Funcionar

### Artigos não aparecem
- Limpe cache: `Ctrl + Shift + Del`
- Recarregue a página

### Workflow não executa
- Verifique Secrets: Settings → Secrets and variables → Actions
- Verifique se os nomes estão exatos (GROQ_API_KEY, TOKEN)

### Erro de Python
- Execute: `pip install -r blog-agent/requirements.txt`
- Execute: `python blog-agent/test.py`

## 💡 Pro Tips

1. **Ver logs do workflow**: GitHub → Actions → clique na execução
2. **Testar manualmente**: Actions → Weekly ArXiv... → Run workflow
3. **Mudar horário**: Edite `.github/workflows/weekly.yml` (linha 7)
4. **Mais artigos**: Edite `agent.py` função `select_best_articles()` (línha ~130)

## 📞 Links Úteis

- [Groq Console](https://console.groq.com) - Suas API keys
- [GitHub Tokens](https://github.com/settings/tokens) - Gerar novo token
- [arXiv](https://arxiv.org) - Banco de artigos
- [LangChain Docs](https://docs.langchain.com) - Documentação

---

**🎉 Pronto! Seu portfolio agora tem artigos inteligentes!**

Qualquer dúvida, veja SETUP_ARTIGOS.md ou IMPLEMENTACAO_COMPLETA.md
