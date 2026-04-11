import styled from 'styled-components';

export const Section = styled.section`
    margin-top: 1.75rem;
    scroll-margin-top: 6rem;

    &:first-of-type {
        margin-top: 0.5rem;
    }
`;

export const SectionCard = styled.div`
    background: var(--surface);
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-lg);
    padding: 1.6rem 1.45rem 1.5rem;
    box-shadow: var(--shadow-card);
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--navy), var(--teal), var(--teal-bright));
        opacity: 0.9;
        border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    }

    @media (min-width: 768px) {
        padding: 1.85rem 1.75rem 1.65rem;
    }
`;

export const SectionHead = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    margin-bottom: 1rem;
    padding-top: 0.15rem;
`;

export const SectionTitle = styled.h2`
    font-size: clamp(1.15rem, 2.5vw, 1.35rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    color: var(--navy);
    margin: 0;
    line-height: 1.2;
`;

export const SectionSubtitle = styled.p`
    margin: 0;
    font-size: 0.875rem;
    color: var(--text-muted);
    font-weight: 500;
    max-width: 42rem;
`;

export const Rule = styled.div`
    height: 1px;
    width: 100%;
    background: linear-gradient(
        90deg,
        rgba(13, 148, 136, 0.55) 0%,
        rgba(13, 148, 136, 0.12) 55%,
        transparent 100%
    );
    margin-bottom: 1.15rem;
`;
