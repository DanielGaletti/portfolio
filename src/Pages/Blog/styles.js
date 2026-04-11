import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PageHeader = styled.div`
    margin: 1.75rem 0 1.5rem;
    max-width: 40rem;
`;

export const PageTitle = styled.h1`
    font-size: clamp(1.75rem, 4vw, 2.25rem);
    font-weight: 800;
    letter-spacing: -0.04em;
    color: var(--navy);
    margin: 0 0 0.5rem 0;
    line-height: 1.15;
`;

export const PageLead = styled.p`
    margin: 0;
    font-size: 1rem;
    color: var(--text-muted);
    line-height: 1.6;

    code {
        font-size: 0.88em;
        font-weight: 600;
        background: rgba(15, 23, 42, 0.06);
        padding: 0.1rem 0.35rem;
        border-radius: 6px;
        border: 1px solid var(--border);
        color: var(--navy-soft);
    }
`;

export const BackLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.8125rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--teal) !important;
    text-decoration: none !important;
    margin-bottom: 1.25rem;

    &:hover {
        text-decoration: none !important;
        color: var(--link-hover) !important;
    }
`;

export const PostGrid = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;

    @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const PostCard = styled(Link)`
    display: block;
    text-decoration: none !important;
    padding: 1.35rem 1.25rem;
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-strong);
    background: var(--surface);
    box-shadow: var(--shadow-card);
    backdrop-filter: blur(10px);
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease,
        border-color 0.2s ease;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        inset: 0 0 auto 0;
        height: 3px;
        background: linear-gradient(90deg, var(--navy), var(--teal));
        opacity: 0.85;
    }

    &:hover {
        transform: translateY(-3px);
        box-shadow: var(--shadow-elevated);
        border-color: rgba(13, 148, 136, 0.35);
    }
`;

export const PostCardTitle = styled.h2`
    font-size: 1.1rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--navy) !important;
    margin: 0 0 0.45rem 0;
    line-height: 1.3;
`;

export const PostCardMeta = styled.p`
    margin: 0 0 0.55rem 0;
    font-size: 0.8rem;
    font-style: italic;
    color: var(--text-muted);
`;

export const PostCardExcerpt = styled.p`
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.55;
    color: var(--text-muted);
    font-weight: 500;
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-top: 0.75rem;
`;

export const Tag = styled.span`
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--teal);
    background: rgba(13, 148, 136, 0.1);
    border: 1px solid rgba(13, 148, 136, 0.22);
    padding: 0.2rem 0.45rem;
    border-radius: 6px;
`;

export const ArticleShell = styled.article`
    margin: 1.25rem 0 2rem;
    padding: 1.75rem 1.5rem 2rem;
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-strong);
    background: var(--surface);
    box-shadow: var(--shadow-card);
    backdrop-filter: blur(10px);

    @media (min-width: 768px) {
        padding: 2rem 2.25rem 2.25rem;
    }
`;

export const ArticleTitle = styled.h1`
    font-size: clamp(1.65rem, 3.5vw, 2.1rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    color: var(--navy);
    margin: 0 0 0.35rem 0;
    line-height: 1.2;
`;

export const ArticleMeta = styled.p`
    margin: 0 0 1.5rem 0;
    font-size: 0.9rem;
    color: var(--text-muted);
    font-style: italic;
`;

export const MarkdownBody = styled.div`
    font-size: 1.02rem;
    line-height: 1.75;
    color: var(--text);

    h1,
    h2,
    h3,
    h4 {
        color: var(--navy);
        font-weight: 800;
        letter-spacing: -0.02em;
        margin: 1.75rem 0 0.65rem;
        line-height: 1.25;
    }

    h1 {
        font-size: 1.45rem;
    }
    h2 {
        font-size: 1.25rem;
        border-bottom: 1px solid var(--border);
        padding-bottom: 0.35rem;
    }
    h3 {
        font-size: 1.08rem;
    }

    p {
        margin: 0 0 1rem 0;
    }

    a {
        color: var(--teal);
    }

    ul,
    ol {
        margin: 0 0 1rem 0;
        padding-left: 1.35rem;
    }

    li {
        margin-bottom: 0.35rem;
    }

    li::marker {
        color: var(--teal);
    }

    blockquote {
        margin: 1rem 0;
        padding: 0.65rem 1rem;
        border-left: 4px solid var(--teal);
        background: rgba(13, 148, 136, 0.06);
        border-radius: 0 var(--radius-md) var(--radius-md) 0;
        color: var(--navy-soft);
    }

    code {
        font-size: 0.88em;
        background: rgba(15, 23, 42, 0.06);
        padding: 0.12rem 0.38rem;
        border-radius: 6px;
        border: 1px solid var(--border);
    }

    pre {
        margin: 1rem 0;
        padding: 1rem 1.1rem;
        border-radius: var(--radius-md);
        background: #0f172a;
        color: #e2e8f0;
        overflow-x: auto;
        border: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow: var(--shadow-sm);
    }

    pre code {
        background: none;
        border: none;
        padding: 0;
        color: inherit;
        font-size: 0.86rem;
    }

    hr {
        border: none;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--border-strong), transparent);
        margin: 2rem 0;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
        font-size: 0.92rem;
    }

    th,
    td {
        border: 1px solid var(--border-strong);
        padding: 0.5rem 0.65rem;
        text-align: left;
    }

    th {
        background: rgba(13, 148, 136, 0.08);
        color: var(--navy);
        font-weight: 700;
    }

    img {
        max-width: 100%;
        border-radius: var(--radius-md);
        margin: 1rem 0;
    }
`;

export const Muted = styled.p`
    color: var(--text-muted);
    font-size: 0.95rem;
`;

export const ErrorText = styled.p`
    color: #b91c1c;
    font-size: 0.95rem;
    font-weight: 600;
`;
