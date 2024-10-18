import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    margin: 50px auto;
`;

export const GlobalStyles = createGlobalStyle`
body.light {
  background-color: var(--background-light);
  color: var(--text-light);
}

body.dark {
  background-color: var(--background-dark);
  color: var(--text-dark);
}
`;