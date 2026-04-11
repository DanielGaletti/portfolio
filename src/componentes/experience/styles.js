import styled from 'styled-components';

export const Job = styled.article`
    margin-bottom: 1.85rem;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const JobHeader = styled.div`
    margin-bottom: 0.5rem;
`;

export const JobLine = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.35rem 0.5rem;
`;

export const JobTitle = styled.h3`
    font-size: 1rem;
    font-weight: 700;
    color: var(--text);
    margin: 0;
`;

export const Sep = styled.span`
    color: var(--text-muted);
    font-weight: 400;
`;

export const Company = styled.span`
    font-size: 1rem;
    font-weight: 600;
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
    font-size: 0.9rem;
    font-style: italic;
    color: var(--text-muted);
    margin: 0.2rem 0 0 0;
`;

export const List = styled.ul`
    margin: 0.5rem 0 0 0;
    padding-left: 1.15rem;
    color: var(--text);
    font-size: 0.94rem;
    line-height: 1.55;

    li {
        margin-bottom: 0.4rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;
