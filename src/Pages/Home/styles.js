import styled from 'styled-components';

export const HeroWrap = styled.div`
    margin: 1.75rem 0 1.25rem;
    position: relative;
`;

export const HeroGlow = styled.div`
    position: absolute;
    width: min(420px, 90vw);
    height: min(420px, 90vw);
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, rgba(13, 148, 136, 0.2) 0%, transparent 65%);
    pointer-events: none;
    z-index: 0;
`;

export const PortfolioNav = styled.nav`
    position: sticky;
    top: 56px;
    z-index: 25;
    margin: 0 -0.25rem 1.5rem;
    padding: 0.5rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    justify-content: center;
    background: linear-gradient(180deg, rgba(248, 250, 252, 0.95) 0%, rgba(248, 250, 252, 0.75) 100%);
    backdrop-filter: blur(10px);
    border-radius: var(--radius-pill);
    border: 1px solid var(--border);

    @media (max-width: 640px) {
        top: 52px;
        justify-content: flex-start;
        overflow-x: auto;
        flex-wrap: nowrap;
        -webkit-overflow-scrolling: touch;
        padding: 0.45rem 0.65rem;
    }
`;

export const Anchor = styled.a`
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 0.4rem 0.75rem;
    border-radius: var(--radius-pill);
    color: var(--navy-soft) !important;
    text-decoration: none !important;
    white-space: nowrap;
    border: 1px solid transparent;
    transition:
        background 0.2s ease,
        border-color 0.2s ease;

    &:hover {
        background: rgba(13, 148, 136, 0.1);
        border-color: rgba(13, 148, 136, 0.25);
        text-decoration: none !important;
    }
`;
