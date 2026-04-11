---
title: Bem-vindo ao blog
date: 2026-04-11
excerpt: Como publicar artigos em Markdown neste portfólio.
tags: meta, portfolio, markdown
---

## Escrevendo em Markdown

Cada post é um arquivo **`.md`** na pasta `public/blog/`. No topo do arquivo você pode usar um bloco *front matter* com `title`, `date`, `excerpt` e `tags` (separadas por vírgula).

### Passos rápidos

1. Crie `public/blog/meu-artigo.md` com o conteúdo.
2. Adicione o slug `meu-artigo` em `public/blog/posts.json` no array `slugs`.
3. Rode `npm run build` e publique — o texto vira HTML no blog.

### Exemplo de lista

- Títulos viram hierarquia de headings.
- **Negrito**, *itálico* e [links](https://github.com/DanielGaletti) funcionam.
- Blocos de código:

```js
const msg = 'Olá, blog';
console.log(msg);
```

> Citações ficam destacadas com a faixa lateral em teal.

---

Obrigado por ler — bons posts!
