import styled from 'styled-components';

export const Lead = styled.p`
    font-size: 1.02rem;
    line-height: 1.68;
    color: var(--text);
    margin: 0 0 1.35rem 0;
    text-align: left;
`;

export const Download = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.65rem 1.25rem;
    background: linear-gradient(135deg, var(--navy) 0%, var(--navy-soft) 100%);
    color: #fff !important;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-decoration: none !important;
    border-radius: var(--radius-pill);
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow: 0 8px 24px rgba(10, 37, 64, 0.25);
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 12px 28px rgba(10, 37, 64, 0.3);
        color: #fff !important;
        text-decoration: none !important;
    }
`;
