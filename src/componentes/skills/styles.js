import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    gap: 1.35rem;

    @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const Block = styled.div`
    padding: 0.65rem 0.5rem 0;
`;

export const Category = styled.h3`
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--navy);
    margin: 0 0 0.65rem 0;
`;

export const Chips = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
`;

export const Chip = styled.span`
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--navy-soft);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(241, 245, 249, 0.9));
    border: 1px solid var(--border-strong);
    padding: 0.35rem 0.65rem;
    border-radius: 10px;
    box-shadow: var(--shadow-sm);

    ${({ $accent }) =>
        $accent &&
        `
        color: var(--navy);
        font-weight: 700;
        border-color: rgba(13, 148, 136, 0.45);
        background: linear-gradient(180deg, rgba(13, 148, 136, 0.12), rgba(255, 255, 255, 0.92));
        box-shadow: 0 2px 8px rgba(13, 148, 136, 0.12);
    `}
`;

export const Subtitle = styled.p`
    margin: -0.35rem 0 0.55rem 0;
    font-size: 0.8rem;
    line-height: 1.45;
    color: var(--text-muted);
    font-weight: 500;
`;
