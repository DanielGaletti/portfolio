import styled from 'styled-components';

export const TopBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.65rem 1.25rem;
    padding: 0.75rem 0;
    font-size: 0.875rem;
    color: var(--text-muted);

    a {
        color: var(--teal);
        font-weight: 600;
    }

    span {
        color: var(--text-muted);
        font-weight: 400;
    }
`;

export const TopRule = styled.div`
    height: 3px;
    background: var(--navy);
    width: 100%;
    margin-bottom: 1.75rem;
`;

export const Nav = styled.nav`
    position: sticky;
    top: 0;
    z-index: 20;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid var(--border);
    margin: 0 -1.25rem 0;
    padding: 0.55rem 1.25rem;

    @media (max-width: 640px) {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }
`;

export const NavInner = styled.div`
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem 0.85rem;
    align-items: center;
    justify-content: center;
`;

export const NavLink = styled.a`
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--navy-soft);
    text-decoration: none !important;

    &:hover {
        color: var(--teal);
    }
`;

export const Header = styled.header`
    display: flex;
    width: 100%;
    gap: 2.5rem;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 0.5rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1.5rem;
    }
`;

export const Image = styled.img`
    width: 11rem;
    height: auto;
    display: block;

    @media (max-width: 768px) {
        width: 8.5rem;
    }
`;

export const ImageContainer = styled.div`
    max-height: 11rem;
    max-width: 11rem;
    border-radius: 50%;
    border: 3px solid var(--teal);
    overflow: hidden;
    flex-shrink: 0;
    box-shadow: 0 8px 28px rgba(0, 51, 102, 0.12);

    @media (max-width: 768px) {
        max-height: 8.5rem;
        max-width: 8.5rem;
        margin: 0 auto;
    }
`;

export const HeaderDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    flex: 1;
    min-width: 0;

    @media (max-width: 768px) {
        align-items: center;
        text-align: center;
    }
`;

export const Name = styled.h1`
    font-size: clamp(1.85rem, 4vw, 2.65rem);
    font-weight: 700;
    color: var(--navy);
    margin: 0 0 0.35rem 0;
    letter-spacing: -0.02em;
    line-height: 1.15;
`;

export const Role = styled.p`
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--text);
    margin: 0 0 0.75rem 0;
`;

export const Meta = styled.p`
    font-size: 0.9rem;
    color: var(--text-muted);
    margin: 0;
    line-height: 1.65;

    a {
        color: var(--teal);
    }
`;
