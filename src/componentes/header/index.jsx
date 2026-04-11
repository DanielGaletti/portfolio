import * as Styled from './styles.js';

const nav = [
    { href: '#summary', label: 'Summary' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#research', label: 'Research' },
    { href: '#certs', label: 'Certs & Languages' },
    { href: '#volunteer', label: 'Volunteer' },
];

const Header = () => (
    <>
        <Styled.Nav aria-label="Page sections">
            <Styled.NavInner>
                {nav.map(({ href, label }) => (
                    <Styled.NavLink key={href} href={href}>
                        {label}
                    </Styled.NavLink>
                ))}
            </Styled.NavInner>
        </Styled.Nav>
        <Styled.TopBar>
            <span>(14) 99809-0506</span>
            <span aria-hidden="true">·</span>
            <a href="mailto:danielgaletti70@gmail.com">danielgaletti70@gmail.com</a>
            <span aria-hidden="true">·</span>
            <a href="https://www.linkedin.com/in/danielgaletti/" target="_blank" rel="noreferrer">
                LinkedIn
            </a>
            <span aria-hidden="true">·</span>
            <a href="https://github.com/DanielGaletti" target="_blank" rel="noreferrer">
                GitHub
            </a>
        </Styled.TopBar>
        <Styled.TopRule />
        <Styled.Header>
            <Styled.ImageContainer>
                <Styled.Image
                    src="https://github.com/DanielGaletti/portfolio/blob/master/public/myself.png?raw=true"
                    alt="Daniel Galetti"
                />
            </Styled.ImageContainer>
            <Styled.HeaderDescription>
                <Styled.Name>Daniel Galetti</Styled.Name>
                <Styled.Role>Software Engineer</Styled.Role>
                <Styled.Meta>
                    São Carlos, São Paulo, Brazil
                </Styled.Meta>
            </Styled.HeaderDescription>
        </Styled.Header>
    </>
);

export default Header;
