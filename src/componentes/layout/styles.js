import styled from 'styled-components';

export const PageRoot = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: var(--page-bg);
    background-image: var(--page-bg-gradient);
`;

export const PageBackdrop = styled.div`
    pointer-events: none;
    position: fixed;
    inset: 0;
    z-index: 0;
    background:
        radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 139, 139, 0.14), transparent 55%),
        radial-gradient(ellipse 60% 40% at 100% 0%, rgba(0, 51, 102, 0.08), transparent 50%),
        radial-gradient(ellipse 50% 35% at 0% 100%, rgba(22, 160, 133, 0.1), transparent 45%);
`;

export const TopBar = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5rem 1rem;
    padding: 0.65rem 1.25rem;
    font-size: 0.8125rem;
    color: var(--text-muted);
    border-bottom: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.65);
    backdrop-filter: blur(12px);

    a {
        color: var(--teal);
        font-weight: 600;
        text-decoration: none !important;
    }

    a:hover {
        color: var(--link-hover);
        text-decoration: underline !important;
    }

    span.sep {
        opacity: 0.45;
        user-select: none;
    }
`;

export const Main = styled.div`
    position: relative;
    z-index: 1;
    flex: 1;
    width: 100%;
    max-width: 1040px;
    margin: 0 auto;
    padding: 0 1.25rem 2.5rem;
`;

export const SiteFooter = styled.footer`
    position: relative;
    z-index: 2;
    text-align: center;
    font-size: 0.75rem;
    color: var(--text-muted);
    padding: 1.25rem 1rem 1.75rem;
    border-top: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(8px);
    line-height: 1.5;
`;
