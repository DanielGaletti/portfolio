import SiteNav from '../siteNav';
import * as Styled from './styles';

const Layout = ({ children }) => (
    <Styled.PageRoot>
        <Styled.PageBackdrop aria-hidden="true" />
        <Styled.TopBar>
            <span>(14) 99809-0506</span>
            <span className="sep" aria-hidden="true">
                ·
            </span>
            <a href="mailto:danielgaletti70@gmail.com">danielgaletti70@gmail.com</a>
            <span className="sep" aria-hidden="true">
                ·
            </span>
            <a href="https://www.linkedin.com/in/danielgaletti/" target="_blank" rel="noreferrer">
                LinkedIn
            </a>
            <span className="sep" aria-hidden="true">
                ·
            </span>
            <a href="https://github.com/DanielGaletti" target="_blank" rel="noreferrer">
                GitHub
            </a>
        </Styled.TopBar>
        <SiteNav />
        <Styled.Main>{children}</Styled.Main>
        <Styled.SiteFooter>
            Página pessoal — conteúdo de responsabilidade de Daniel Galetti.
            <br />© {new Date().getFullYear()} Daniel Galetti
        </Styled.SiteFooter>
    </Styled.PageRoot>
);

export default Layout;
