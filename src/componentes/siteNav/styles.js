import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    position: sticky;
    top: 0;
    z-index: 30;
    border-bottom: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.82);
    backdrop-filter: blur(14px);
`;

export const Inner = styled.div`
    max-width: 1040px;
    margin: 0 auto;
    padding: 0.65rem 1.25rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem 1.25rem;
    justify-content: space-between;
`;

export const Brand = styled(NavLink)`
    font-weight: 800;
    font-size: 1.05rem;
    letter-spacing: -0.03em;
    color: var(--navy) !important;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
        color: var(--teal) !important;
    }
`;

export const BrandDot = styled.span`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--teal), var(--teal-bright));
    box-shadow: 0 0 0 3px rgba(22, 160, 133, 0.25);
`;

export const Links = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.35rem 0.5rem;
`;

export const TabLink = styled(NavLink)`
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.45rem 0.85rem;
    border-radius: 999px;
    color: var(--navy-soft) !important;
    text-decoration: none !important;
    border: 1px solid transparent;
    transition:
        background 0.2s ease,
        color 0.2s ease,
        border-color 0.2s ease,
        box-shadow 0.2s ease;

    &:hover {
        background: rgba(0, 139, 139, 0.08);
        color: var(--navy) !important;
    }

    &.active {
        background: linear-gradient(135deg, rgba(0, 51, 102, 0.08), rgba(0, 139, 139, 0.12));
        border-color: rgba(0, 139, 139, 0.35);
        color: var(--navy) !important;
        box-shadow: 0 4px 14px rgba(0, 51, 102, 0.08);
    }
`;
