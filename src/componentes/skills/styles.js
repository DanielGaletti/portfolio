import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    gap: 1.15rem;

    @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const Block = styled.div`
    padding: 0;
`;

export const Category = styled.h3`
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--text);
    margin: 0 0 0.4rem 0;
`;

export const Detail = styled.p`
    font-size: 0.92rem;
    line-height: 1.55;
    color: var(--text-muted);
    margin: 0;
`;
