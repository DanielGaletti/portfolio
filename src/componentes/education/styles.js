import styled from 'styled-components';

export const Entry = styled.article`
    margin-bottom: 1.5rem;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const Degree = styled.h3`
    font-size: 1rem;
    font-weight: 700;
    color: var(--text);
    margin: 0 0 0.25rem 0;
`;

export const Meta = styled.p`
    font-size: 0.9rem;
    font-style: italic;
    color: var(--text-muted);
    margin: 0 0 0.45rem 0;
`;

export const Org = styled.span`
    color: var(--teal);
    font-weight: 600;
    font-style: normal;
`;

export const Body = styled.p`
    font-size: 0.94rem;
    line-height: 1.55;
    color: var(--text);
    margin: 0;
`;
