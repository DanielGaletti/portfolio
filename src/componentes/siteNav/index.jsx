import * as Styled from './styles';

const SiteNav = () => (
    <Styled.Nav aria-label="Site">
        <Styled.Inner>
            <Styled.Brand to="/" end>
                <Styled.BrandDot aria-hidden="true" />
                Daniel Galetti
            </Styled.Brand>
            <Styled.Links>
                <Styled.TabLink to="/" end>
                    Portfolio
                </Styled.TabLink>
                <Styled.TabLink to="/blog">Blog</Styled.TabLink>
                <Styled.TabLink to="/articles">Articles</Styled.TabLink>
            </Styled.Links>
        </Styled.Inner>
    </Styled.Nav>
);

export default SiteNav;
