import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { parseFrontmatter } from '../../utils/parseFrontmatter';
import * as Styled from './styles';

const ArticlePost = () => {
    const { slug } = useParams();
    const [state, setState] = useState({ loading: true, error: null, data: null });

    useEffect(() => {
        let cancelled = false;
        setState({ loading: true, error: null, data: null });

        (async () => {
            try {
                const res = await fetch(`/articles/${slug}.md`);
                if (!res.ok) throw new Error('Article not found.');
                const raw = await res.text();
                const { data, content } = parseFrontmatter(raw);
                if (!cancelled) {
                    setState({
                        loading: false,
                        error: null,
                        data: {
                            title: data.title || slug,
                            date: data.date || '',
                            authors: data.authors || '',
                            arxivUrl: data.arxivUrl || '',
                            tags: (data.tags || '')
                                .split(',')
                                .map((t) => t.trim())
                                .filter(Boolean),
                            content,
                        },
                    });
                }
            } catch (e) {
                if (!cancelled) {
                    setState({
                        loading: false,
                        error: e.message || 'Failed to load this article.',
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
        return (
            <Styled.ArticlePostRoot>
                <Styled.Loading>Loading article...</Styled.Loading>
            </Styled.ArticlePostRoot>
        );
    }

    if (state.error) {
        return (
            <Styled.ArticlePostRoot>
                <Styled.ErrorMsg>{state.error}</Styled.ErrorMsg>
                <Link to="/articles">← Back to articles</Link>
            </Styled.ArticlePostRoot>
        );
    }

    const { data } = state;

    return (
        <Styled.ArticlePostRoot>
            <Link to="/articles" className="back-link">
                ← Back to articles
            </Link>
            <Styled.ArticleHeader>
                <Styled.PostTitle>{data.title}</Styled.PostTitle>
                <Styled.PostMeta>
                    <span className="date">{data.date}</span>
                    {data.authors && <span className="authors">By: {data.authors}</span>}
                </Styled.PostMeta>
                {data.arxivUrl && (
                    <Styled.ArxivLink href={data.arxivUrl} target="_blank" rel="noreferrer">
                        View on arXiv →
                    </Styled.ArxivLink>
                )}
                {data.tags.length > 0 && (
                    <Styled.TagsContainer>
                        {data.tags.map((tag) => (
                            <Styled.Tag key={tag}>{tag}</Styled.Tag>
                        ))}
                    </Styled.TagsContainer>
                )}
            </Styled.ArticleHeader>
            <Styled.ArticleContent>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {data.content}
                </ReactMarkdown>
            </Styled.ArticleContent>
        </Styled.ArticlePostRoot>
    );
};

export default ArticlePost;
