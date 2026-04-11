import styled from 'styled-components';

export const TwoCol = styled.div`
    display: grid;
    gap: 1.75rem;

    @media (min-width: 560px) {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
`;

export const ColTitle = styled.h3`
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--navy);
    margin: 0 0 0.65rem 0;
    text-transform: uppercase;
    letter-spacing: 0.06em;
`;

export const List = styled.ul`
    margin: 0;
    padding-left: 1.1rem;
    font-size: 0.94rem;
    line-height: 1.55;
    color: var(--text);

    li {
        margin-bottom: 0.4rem;
    }
`;

export const LangLine = styled.p`
    font-size: 0.94rem;
    line-height: 1.55;
    color: var(--text);
    margin: 0 0 0.4rem 0;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const Lang = styled.strong`
    font-weight: 700;
`;
