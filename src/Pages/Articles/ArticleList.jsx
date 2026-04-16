import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { parseFrontmatter } from '../../utils/parseFrontmatter';
import * as Styled from './styles';

async function loadArticles() {
    const indexRes = await fetch('/articles/articles.json');
    if (!indexRes.ok) throw new Error('Could not load the articles list.');
    const index = await indexRes.json();
    const slugs = Array.isArray(index.slugs) ? index.slugs : [];

    const entries = await Promise.all(
        slugs.map(async (slug) => {
            const res = await fetch(`/articles/${slug}.md`);
            if (!res.ok) return null;
            const raw = await res.text();
            const { data, content } = parseFrontmatter(raw);
            return {
                slug,
                title: data.title || slug,
                date: data.date || '',
                excerpt: data.excerpt || '',
                tags: (data.tags || '')
                    .split(',')
                    .map((t) => t.trim())
                    .filter(Boolean),
                authors: data.authors || '',
                arxivUrl: data.arxivUrl || '',
                preview: content.slice(0, 180).replace(/\s+/g, ' ').trim(),
            };
        })
    );

    return entries
        .filter(Boolean)
        .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}

const ArticleList = () => {
    const [articles, setArticles] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;
        loadArticles()
            .then((data) => {
                if (!cancelled) setArticles(data);
            })
            .catch((e) => {
                if (!cancelled) setError(e.message || 'Failed to load articles.');
            });
        return () => {
            cancelled = true;
        };
    }, []);

    if (error) {
        return (
            <Styled.ArticleListRoot>
                <Styled.ErrorMsg>{error}</Styled.ErrorMsg>
            </Styled.ArticleListRoot>
        );
    }

    if (!articles) {
        return (
            <Styled.ArticleListRoot>
                <Styled.Loading>Carregando artigos...</Styled.Loading>
            </Styled.ArticleListRoot>
        );
    }

    if (articles.length === 0) {
        return (
            <Styled.ArticleListRoot>
                <Styled.Empty>Nenhum artigo disponível ainda.</Styled.Empty>
            </Styled.ArticleListRoot>
        );
    }

    return (
        <Styled.ArticleListRoot>
            <Styled.ArticlesGrid>
                {articles.map((article) => (
                    <Link key={article.slug} to={`/articles/${article.slug}`}>
                        <Styled.ArticleCard>
                            <Styled.ArticleTitle>{article.title}</Styled.ArticleTitle>
                            <Styled.ArticleDate>{article.date}</Styled.ArticleDate>
                            {article.authors && (
                                <Styled.ArticleAuthors>Por: {article.authors}</Styled.ArticleAuthors>
                            )}
                            <Styled.ArticlePreview>{article.preview}</Styled.ArticlePreview>
                            {article.tags.length > 0 && (
                                <Styled.TagsContainer>
                                    {article.tags.map((tag) => (
                                        <Styled.Tag key={tag}>{tag}</Styled.Tag>
                                    ))}
                                </Styled.TagsContainer>
                            )}
                        </Styled.ArticleCard>
                    </Link>
                ))}
            </Styled.ArticlesGrid>
        </Styled.ArticleListRoot>
    );
};

export default ArticleList;
