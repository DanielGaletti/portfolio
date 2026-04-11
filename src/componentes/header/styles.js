import styled from 'styled-components';

export const Header = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2rem 2.5rem;
    align-items: center;
    position: relative;
    z-index: 1;
    padding: 0.5rem 0 0.25rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        text-align: center;
        justify-items: center;
    }
`;

export const ImageWrap = styled.div`
    position: relative;
    width: fit-content;
`;

export const ImageRing = styled.div`
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--navy), var(--teal), var(--teal-bright));
    z-index: 0;
    opacity: 0.95;
    box-shadow: 0 12px 40px var(--teal-glow);
`;

export const ImageContainer = styled.div`
    position: relative;
    z-index: 1;
    max-height: 12.5rem;
    max-width: 12.5rem;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid var(--surface-solid);
    box-shadow: var(--shadow-elevated);

    @media (max-width: 768px) {
        max-height: 10rem;
        max-width: 10rem;
    }
`;

export const Image = styled.img`
    width: 12.5rem;
    height: auto;
    display: block;

    @media (max-width: 768px) {
        width: 10rem;
    }
`;

export const HeaderBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 0.5rem;
    min-width: 0;

    @media (max-width: 768px) {
        align-items: center;
        text-align: center;
    }
`;

export const Badge = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--teal);
    background: rgba(13, 148, 136, 0.12);
    border: 1px solid rgba(13, 148, 136, 0.28);
    padding: 0.35rem 0.75rem;
    border-radius: var(--radius-pill);
`;

export const Name = styled.h1`
    font-size: clamp(2rem, 5vw, 2.85rem);
    font-weight: 800;
    margin: 0;
    letter-spacing: -0.04em;
    line-height: 1.08;
    background: linear-gradient(120deg, var(--navy) 0%, var(--navy-soft) 45%, var(--teal) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

export const Role = styled.p`
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--text);
    margin: 0;
    letter-spacing: -0.02em;
`;

export const Meta = styled.p`
    font-size: 0.95rem;
    color: var(--text-muted);
    margin: 0;
    line-height: 1.65;
    max-width: 28rem;
`;

export const TagRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.35rem;
    justify-content: flex-start;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const MiniTag = styled.span`
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--navy-soft);
    background: rgba(15, 23, 42, 0.06);
    padding: 0.28rem 0.55rem;
    border-radius: 8px;
    border: 1px solid var(--border);
`;
