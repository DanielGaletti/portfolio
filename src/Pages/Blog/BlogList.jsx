import React, { useEffect, useState } from 'react';
import { blogUrl } from '../../utils/blogPaths';
import { parseFrontmatter } from '../../utils/parseFrontmatter';
import * as Styled from './styles';

async function loadPosts() {
    const indexRes = await fetch(blogUrl('posts.json'));
    if (!indexRes.ok) throw new Error('Não foi possível carregar a lista de posts.');
    const index = await indexRes.json();
    const slugs = Array.isArray(index.slugs) ? index.slugs : [];

    const entries = await Promise.all(
        slugs.map(async (slug) => {
            const res = await fetch(blogUrl(`${slug}.md`));
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
                preview: content.slice(0, 180).replace(/\s+/g, ' ').trim(),
            };
        })
    );

    return entries
        .filter(Boolean)
        .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}

const BlogList = () => {
    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;
        loadPosts()
            .then((data) => {
                if (!cancelled) setPosts(data);
            })
            .catch((e) => {
                if (!cancelled) setError(e.message || 'Erro ao carregar o blog.');
            });
        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <>
            <Styled.PageHeader>
                <Styled.PageTitle>Blog</Styled.PageTitle>
                <Styled.PageLead>
                    Artigos em tópicos — os textos vivem em arquivos Markdown na pasta{' '}
                    <code>public/blog/</code>. Edite o <code>.md</code>, ajuste o manifest em{' '}
                    <code>posts.json</code> e faça o deploy.
                </Styled.PageLead>
            </Styled.PageHeader>

            {error ? <Styled.ErrorText>{error}</Styled.ErrorText> : null}

            {!error && posts === null ? <Styled.Muted>Carregando…</Styled.Muted> : null}

            {!error && posts && posts.length === 0 ? (
                <Styled.Muted>Nenhum post cadastrado ainda. Adicione slugs em public/blog/posts.json.</Styled.Muted>
            ) : null}

            {posts && posts.length > 0 ? (
                <Styled.PostGrid>
                    {posts.map((post) => (
                        <Styled.PostCard key={post.slug} to={`/blog/${post.slug}`}>
                            <Styled.PostCardTitle>{post.title}</Styled.PostCardTitle>
                            {post.date ? <Styled.PostCardMeta>{post.date}</Styled.PostCardMeta> : null}
                            <Styled.PostCardExcerpt>
                                {post.excerpt || `${post.preview}…`}
                            </Styled.PostCardExcerpt>
                            {post.tags.length > 0 ? (
                                <Styled.Tags>
                                    {post.tags.map((t) => (
                                        <Styled.Tag key={t}>{t}</Styled.Tag>
                                    ))}
                                </Styled.Tags>
                            ) : null}
                        </Styled.PostCard>
                    ))}
                </Styled.PostGrid>
            ) : null}
        </>
    );
};

export default BlogList;
