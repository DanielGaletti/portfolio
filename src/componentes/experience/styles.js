import styled from 'styled-components';

export const Job = styled.article`
    margin-bottom: 1.25rem;
    padding: 1.15rem 1.1rem 1.05rem 1.25rem;
    border-radius: var(--radius-md);
    border: 1px solid var(--border);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.65) 0%, rgba(248, 250, 252, 0.85) 100%);
    box-shadow: var(--shadow-sm);
    position: relative;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.85rem;
        bottom: 0.85rem;
        width: 4px;
        border-radius: 4px;
        background: linear-gradient(180deg, var(--navy), var(--teal));
    }

    &:last-child {
        margin-bottom: 0;
    }
`;

export const JobHeader = styled.div`
    margin-bottom: 0.55rem;
`;

export const JobLine = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.35rem 0.5rem;
`;

export const JobTitle = styled.h3`
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--text);
    margin: 0;
    letter-spacing: -0.02em;
`;

export const Sep = styled.span`
    color: var(--text-muted);
    font-weight: 400;
    opacity: 0.7;
`;

export const Company = styled.span`
    font-size: 1rem;
    font-weight: 700;
    color: var(--teal);

    a {
        color: inherit;
        text-decoration: none !important;

        &:hover {
            text-decoration: underline !important;
        }
    }
`;

export const Dates = styled.p`
    font-size: 0.875rem;
    font-style: italic;
    color: var(--text-muted);
    margin: 0.25rem 0 0 0;
`;

export const List = styled.ul`
    margin: 0.35rem 0 0 0;
    padding-left: 1.1rem;
    color: var(--text);
    font-size: 0.92rem;
    line-height: 1.58;

    li {
        margin-bottom: 0.45rem;

        &:last-child {
            margin-bottom: 0;
        }
    }

    li::marker {
        color: var(--teal);
    }
`;
