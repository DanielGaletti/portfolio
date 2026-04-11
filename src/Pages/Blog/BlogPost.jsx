import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { blogUrl } from '../../utils/blogPaths';
import { parseFrontmatter } from '../../utils/parseFrontmatter';
import * as Styled from './styles';

const BlogPost = () => {
    const { slug } = useParams();
    const [state, setState] = useState({ loading: true, error: null, data: null });

    useEffect(() => {
        let cancelled = false;
        setState({ loading: true, error: null, data: null });

        (async () => {
            try {
                const res = await fetch(blogUrl(`${slug}.md`));
                if (!res.ok) throw new Error('Post not found.');
                const raw = await res.text();
                const { data, content } = parseFrontmatter(raw);
                if (!cancelled) {
                    setState({
                        loading: false,
                        error: null,
                        data: {
                            title: data.title || slug,
                            date: data.date || '',
                            content,
                        },
                    });
                }
            } catch (e) {
                if (!cancelled) {
                    setState({
                        loading: false,
                        error: e.message || 'Failed to load this post.',
                        data: null,
                    });
                }
            }
        })();

        return () => {
            cancelled = true;
        };
    }, [slug]);

    if (state.loading) {
        return <Styled.Muted>Loading…</Styled.Muted>;
    }

    if (state.error) {
        return (
            <>
                <Styled.BackLink to="/blog">← Back to my blog</Styled.BackLink>
                <Styled.ErrorText>{state.error}</Styled.ErrorText>
            </>
        );
    }

    return (
        <>
            <Styled.BackLink to="/blog">← Back to my blog</Styled.BackLink>
            <Styled.ArticleShell>
                <Styled.ArticleTitle>{state.data.title}</Styled.ArticleTitle>
                {state.data.date ? <Styled.ArticleMeta>{state.data.date}</Styled.ArticleMeta> : null}
                <Styled.MarkdownBody>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{state.data.content}</ReactMarkdown>
                </Styled.MarkdownBody>
            </Styled.ArticleShell>
        </>
    );
};

export default BlogPost;
