import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background-color: var(--bg);
    color: var(--text);
  }
`;

export const Container = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.25rem 3rem;
`;
