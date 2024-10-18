import styled from 'styled-components';

export const Footer = styled.p`
text-align: center;
font-size: 12px;
margin-top: 100px;
color: ${({ isDarkTheme }) => isDarkTheme ? 'rgba(255,255,255,.54)' : 'rgba(0,0,0,.54)'};
`;