import styled from 'styled-components';

export const Lead = styled.p`
    font-size: 1.02rem;
    line-height: 1.65;
    color: var(--text);
    margin: 0 0 1.25rem 0;
    text-align: left;
`;

export const Download = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.55rem 1.15rem;
    background: var(--navy);
    color: #fff !important;
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    text-decoration: none !important;
    border: 2px solid var(--navy);
    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;

    &:hover {
        background: #fff;
        color: var(--navy) !important;
        border-color: var(--teal);
        text-decoration: none !important;
    }
`;
