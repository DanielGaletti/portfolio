# 📚 ÍNDICE DE DOCUMENTAÇÃO

## 🎯 Comece Aqui

1. **[QUICKSTART.md](./QUICKSTART.md)** ⚡
   - Setup em 5 minutos
   - Adicionar secrets no GitHub
   - Primeiros passos

2. **[CHECKLIST.md](./CHECKLIST.md)** ✅
   - Validação passo-a-passo
   - O que você deve fazer
   - Troubleshooting rápido

## 📖 Documentação Completa

### Setup e Configuração
- **[SETUP_ARTIGOS.md](./SETUP_ARTIGOS.md)**
  - Guia detalhado de configuração
  - Como usar no frontend
  - Personalização
  - Troubleshooting

- **[blog-agent/README.md](./blog-agent/README.md)**
  - Documentação específica do agente
  - Como rodar localmente
  - Customização
  - Links úteis

### Visão Geral e Arquitetura
- **[IMPLEMENTACAO_COMPLETA.md](./IMPLEMENTACAO_COMPLETA.md)**
  - O que foi criado
  - Próximos passos
  - Estrutura de arquivos
  - Fluxo de funcionamento

- **[ARQUITETURA.md](./ARQUITETURA.md)**
  - Diagramas da solução
  - Stack tecnológico
  - Fluxo de dados
  - Componentes React
  - Segurança

## 🛠️ Ferramentas de Setup

- **[setup-windows.bat](./setup-windows.bat)**
  - Script automático para Windows
  - Instala ambiente Python
  - Cria .env

- **[setup.sh](./setup.sh)**
  - Script automático para macOS/Linux
  - Instala ambiente Python
  - Cria .env

## 📁 Estrutura de Pastas

```
portfolio/
├── 📄 QUICKSTART.md              ← Comece aqui!
├── 📄 CHECKLIST.md               ← Validação
├── 📄 SETUP_ARTIGOS.md           ← Guia detalhado
├── 📄 IMPLEMENTACAO_COMPLETA.md  ← Resumo
├── 📄 ARQUITETURA.md             ← Diagramas
├── 📄 INDEX.md                   ← Este arquivo
├── 📄 setup-windows.bat
├── 📄 setup.sh
│
├── 📂 src/
│   ├── 📂 Pages/
│   │   └── 📂 Articles/          ← NOVO
│   │       ├── ArticleList.jsx
│   │       ├── ArticlePost.jsx
│   │       └── styles.js
│   └── ...
│
├── 📂 public/
│   ├── 📂 articles/              ← NOVO
│   │   ├── articles.json
│   │   └── example-transformer.md
│   └── ...
│
├── 📂 blog-agent/                ← NOVO
│   ├── agent.py
│   ├── test.py
│   ├── requirements.txt
│   ├── README.md
│   ├── .env.example
│   ├── .gitignore
│   └── venv/                     (criado após setup)
│
├── 📂 .github/
│   └── 📂 workflows/
│       └── weekly.yml            ← NOVO
│
└── ...outros arquivos
```

## 📚 O Que Cada Arquivo Faz

### Componentes React (src/Pages/Articles/)

| Arquivo | Função |
|---------|--------|
| `ArticleList.jsx` | Lista de artigos com cards clicáveis |
| `ArticlePost.jsx` | Página individual do artigo (markdown renderizado) |
| `styles.js` | Estilos (CSS-in-JS com styled-components) |

### Bot Python (blog-agent/)

| Arquivo | Função |
|---------|--------|
| `agent.py` | Script principal - busca, seleciona, gera artigos |
| `test.py` | Testa se tudo funciona |
| `requirements.txt` | Dependências Python |
| `.env.example` | Template de variáveis |
| `.gitignore` | Ignora .env e Python cache |
| `README.md` | Documentação do agente |

### Dados (public/articles/)

| Arquivo | Função |
|---------|--------|
| `articles.json` | Índice de slugs (atualizado pelo bot) |
| `*.md` | Arquivos de artigos (criados pelo bot) |

### GitHub Actions (.github/workflows/)

| Arquivo | Função |
|---------|--------|
| `weekly.yml` | Workflow que executa todo domingo |

## 🎓 Fluxo de Aprendizado

Se você é novo nisso:

1. **Começo**: Leia [QUICKSTART.md](./QUICKSTART.md)
2. **Entendimento**: Leia [ARQUITETURA.md](./ARQUITETURA.md)
3. **Implementação**: Siga [CHECKLIST.md](./CHECKLIST.md)
4. **Troubleshooting**: Veja [SETUP_ARTIGOS.md](./SETUP_ARTIGOS.md)

## ❓ FAQ Rápido

**P: Por onde começo?**
A: Leia [QUICKSTART.md](./QUICKSTART.md)

**P: Como adiciono os secrets?**
A: Veja seção "Passo 1" em [QUICKSTART.md](./QUICKSTART.md)

**P: Como testo localmente?**
A: Veja [blog-agent/README.md](./blog-agent/README.md)

**P: Como mudo o horário de execução?**
A: Edite `.github/workflows/weekly.yml` linha 7

**P: Como mudo a quantidade de artigos?**
A: Edite `blog-agent/agent.py` função `select_best_articles()`

**P: Quanto custa usar?**
A: Totalmente grátis! (Groq e arXiv são free)

## 🔗 Links Úteis

- [Groq Console](https://console.groq.com) - Gerenciar chaves de API
- [GitHub Tokens](https://github.com/settings/tokens) - Gerar novo token
- [arXiv API](https://arxiv.org/help/api) - Documentação do arXiv
- [LangChain Docs](https://docs.langchain.com) - Documentação LangChain
- [GitHub Actions](https://docs.github.com/en/actions) - Documentação GitHub Actions

## 🆘 Precisa de Ajuda?

1. Verifique [CHECKLIST.md](./CHECKLIST.md) - seção Troubleshooting
2. Leia [SETUP_ARTIGOS.md](./SETUP_ARTIGOS.md) - seção Troubleshooting
3. Veja logs do GitHub Actions (GitHub → Actions → workflow)

## ✅ Checklist Final

- [ ] Você adicionou os secrets no GitHub?
- [ ] Você fez git push?
- [ ] Você testou a aba "Artigos" no navegador?
- [ ] O workflow executou sem erros?
- [ ] Os artigos aparecem no portfolio?

Se respondeu "sim" a todas, **parabéns! 🎉**

---

**Última atualização**: Janeiro 2024
**Versão**: 1.0
**Status**: ✅ Completo e Funcional
