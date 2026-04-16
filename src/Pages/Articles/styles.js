import styled from 'styled-components';

export const ArticleListRoot = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
`;

export const ArticlesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;

    a {
        text-decoration: none;
        color: inherit;
        transition: transform 0.2s ease;

        &:hover {
            transform: translateY(-4px);
        }
    }
`;

export const ArticleCard = styled.article`
    padding: 1.5rem;
    border: 1px solid var(--border-color, #e0e0e0);
    border-radius: 8px;
    background: var(--card-bg, #fff);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        border-color: var(--accent-color, #666);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
`;

export const ArticleTitle = styled.h2`
    font-size: 1.3rem;
    font-weight: 600;
    margin: 0;
    line-height: 1.4;
    color: var(--text-primary, #1a1a1a);
`;

export const ArticleDate = styled.time`
    font-size: 0.9rem;
    color: var(--text-secondary, #666);
`;

export const ArticleAuthors = styled.p`
    font-size: 0.85rem;
    color: var(--text-secondary, #666);
    margin: 0;
`;

export const ArticlePreview = styled.p`
    font-size: 0.95rem;
    color: var(--text-secondary, #555);
    line-height: 1.5;
    margin: 0.5rem 0 0 0;
    flex-grow: 1;
`;

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
`;

export const Tag = styled.span`
    font-size: 0.75rem;
    padding: 0.25rem 0.75rem;
    background-color: var(--tag-bg, #f0f0f0);
    color: var(--tag-color, #666);
    border-radius: 20px;
    text-transform: lowercase;
`;

export const ArticlePostRoot = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1.5rem;

    .back-link {
        display: inline-block;
        margin-bottom: 2rem;
        color: var(--accent-color, #666);
        text-decoration: none;
        font-weight: 500;
        transition: all 0.2s ease;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const ArticleHeader = styled.header`
    margin-bottom: 2rem;
    border-bottom: 2px solid var(--border-color, #e0e0e0);
    padding-bottom: 1.5rem;
`;

export const PostTitle = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    line-height: 1.3;
    color: var(--text-primary, #1a1a1a);
`;

export const PostMeta = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    font-size: 0.95rem;
    color: var(--text-secondary, #666);
    margin-bottom: 0.75rem;

    .date {
        font-weight: 500;
    }

    .authors {
        color: var(--text-secondary, #777);
    }
`;

export const ArxivLink = styled.a`
    display: inline-block;
    margin: 0.75rem 0;
    padding: 0.5rem 1rem;
    background-color: var(--accent-color, #666);
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-size: 0.9rem;
    transition: all 0.2s ease;

    &:hover {
        opacity: 0.9;
        transform: translateX(2px);
    }
`;

export const ArticleContent = styled.section`
    font-size: 1rem;
    line-height: 1.7;
    color: var(--text-primary, #333);

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 2rem 0 1rem 0;
        font-weight: 600;
        color: var(--text-primary, #1a1a1a);
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    h3 {
        font-size: 1.2rem;
    }

    p {
        margin: 0 0 1rem 0;
    }

    a {
        color: var(--accent-color, #0066cc);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    code {
        background-color: var(--code-bg, #f5f5f5);
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
        font-family: 'Courier New', monospace;
        font-size: 0.9em;
    }

    pre {
        background-color: var(--code-bg, #f5f5f5);
        padding: 1rem;
        border-radius: 4px;
        overflow-x: auto;

        code {
            background: none;
            padding: 0;
        }
    }

    ul,
    ol {
        margin: 1rem 0;
        padding-left: 2rem;
    }

    li {
        margin: 0.5rem 0;
    }

    blockquote {
        border-left: 4px solid var(--accent-color, #666);
        padding-left: 1rem;
        margin: 1rem 0;
        color: var(--text-secondary, #666);
        font-style: italic;
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 4px;
        margin: 1rem 0;
    }
`;

export const Loading = styled.div`
    text-align: center;
    padding: 2rem;
    color: var(--text-secondary, #666);
    font-size: 1.1rem;
`;

export const ErrorMsg = styled.div`
    text-align: center;
    padding: 2rem;
    color: var(--error-color, #d32f2f);
    font-size: 1.1rem;
    background-color: var(--error-bg, #ffebee);
    border-radius: 4px;
`;

export const Empty = styled.div`
    text-align: center;
    padding: 3rem 1.5rem;
    color: var(--text-secondary, #666);
    font-size: 1.1rem;
`;
