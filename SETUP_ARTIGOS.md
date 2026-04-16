# 🚀 Guia de Setup - Aba Artigos + Blog Agent

Bem-vindo! Aqui está o guia completo para ativar a aba de Artigos e configurar o agente automatizado.

## ✅ O que foi criado

### 1. **Nova Aba: Artigos** (Frontend React)
- Página de listagem de artigos (`/articles`)
- Página individual de artigos (`/articles/:slug`)
- Design responsivo similar ao blog
- Suporta links para arXiv
- Exibe autores e tags

### 2. **Blog Agent** (Backend Python)
- Busca automática de artigos no arXiv
- Seleção inteligente com IA (Llama 3 via Groq)
- Geração de resumos automáticos
- Criação de arquivos Markdown
- GitHub Actions para execução semanal

## 🔧 Configuração Necessária

### Passo 1: Adicionar Secrets no GitHub

1. Vá para seu repositório
2. **Settings → Secrets and variables → Actions**
3. Clique em **New repository secret**

Adicione estes dois secrets:

#### `GROQ_API_KEY`
```
Valor: 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
```

#### `TOKEN`
Gere um novo token:
1. Vá para [Personal access tokens (classic)](https://github.com/settings/tokens)
2. Clique em **Generate new token (classic)**
3. Permissões necessárias: `repo` (full control)
4. Copie o token e adicione como secret com o nome `TOKEN`

### Passo 2: Testar o Agente Localmente (Opcional)

```bash
# Navegue para a pasta do agente
cd blog-agent

# Instale as dependências
pip install -r requirements.txt

# Crie um arquivo .env (copie de .env.example)
# Adicione suas chaves do Groq e GitHub

# Execute o agente
python agent.py
```

### Passo 3: Ativar GitHub Actions

1. Vá para **Actions** no seu repositório
2. Procure por "Weekly ArXiv Blog Articles"
3. Clique em "Enable workflow"

## 📅 Quando Funciona

O agente executa **automaticamente todo domingo às 10:00 UTC**.

Se quiser testar manualmente:
1. Vá para **Actions → Weekly ArXiv Blog Articles**
2. Clique em **Run workflow**

## 🌐 Usando no Frontend

A aba "Artigos" no seu portfolio carregará automaticamente os artigos do arquivo:
```
public/articles/articles.json
```

Cada artigo é um arquivo Markdown com frontmatter:
```markdown
---
title: "Título do Artigo"
date: "16/01/2024"
authors: "Autor 1, Autor 2"
arxivUrl: "https://arxiv.org/abs/2401.xxxxx"
tags: "inteligência artificial, pesquisa"
excerpt: "Descrição breve"
---

Conteúdo do artigo...
```

## 📊 Como Verifica Funcionamento

### Verificar se as ações estão rodando
1. **Actions → Weekly ArXiv Blog Articles → histórico de execuções**

### Ver os artigos que foram adicionados
1. **Commits recentes** - procure por "📚 Artigos do arXiv"
2. **Pasta `public/articles/`** - veja os novos arquivos `.md`

## ⚙️ Personalização

### Mudar o horário de execução

Edite `.github/workflows/weekly.yml`:
```yaml
schedule:
  - cron: '0 10 * * 0'  # Formato: min hora dia mês dia_semana
```

Exemplos:
- `0 14 * * 0` = Domingo 14:00 UTC
- `0 10 * * 1` = Segunda 10:00 UTC
- `0 9 * * *` = Todo dia 09:00 UTC

### Mudar quantidade de artigos selecionados

Em `blog-agent/agent.py`, altere `select_best_articles()` para:
```python
return selected[:5]  # Seleciona 5 em vez de 3
```

### Mudar modelo de IA

Em `blog-agent/agent.py`:
```python
self.llm = ChatGroq(
    model="mixtral-8x7b-32768",  # Outros modelos disponíveis
    # ...
)
```

## 📁 Estrutura de Pastas

```
portfolio/
├── src/
│   ├── Pages/
│   │   ├── Articles/          ← NOVO
│   │   │   ├── ArticleList.jsx
│   │   │   ├── ArticlePost.jsx
│   │   │   └── styles.js
│   │   └── Blog/
│   └── App.js                 ← ATUALIZADO
├── public/
│   └── articles/              ← NOVO
│       ├── articles.json
│       └── [artigos .md]
├── blog-agent/                ← NOVO
│   ├── agent.py
│   ├── requirements.txt
│   ├── README.md
│   ├── .env.example
│   └── .gitignore
└── .github/
    └── workflows/
        └── weekly.yml         ← NOVO
```

## 🐛 Troubleshooting

### "Workflow execution failed"
→ Verifique se os secrets foram adicionados corretamente

### "No articles found"
→ Pode não haver artigos novos naquela semana no arXiv

### Artigos não aparecem no frontend
→ Verifique se `articles.json` foi atualizado
→ Limpe o cache do navegador (Ctrl+Shift+Del)

### erro: "ModuleNotFoundError"
→ Execute `pip install -r requirements.txt` novamente

## 📞 Suporte

Para problemas com:
- **Groq**: https://console.groq.com/docs
- **LangChain**: https://docs.langchain.com
- **arXiv API**: https://arxiv.org/help/api
- **GitHub Actions**: https://docs.github.com/en/actions

---

Pronto! Seu blog agora tem artigos automatizados. 🎉
