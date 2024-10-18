import * as Styled from "./styles.js";
import { useTheme } from '../../context/ThemeContext.js';

const Header = () => {
    const { isDarkTheme, toggleTheme } = useTheme();
    return (
        <Styled.Header>
            <Styled.ImageContainer>
                <Styled.Image src="https://github.com/DanielGaletti/portfolio/blob/master/public/myself.png?raw=true" alt="myself" />
            </Styled.ImageContainer>
            <Styled.HeaderDescription>
                <Styled.Button isDarkTheme={isDarkTheme} onClick={toggleTheme}>
                    {isDarkTheme ? '☀️' : '🌙'}
                </Styled.Button>
                <Styled.Title>
                    <h1> Daniel Galetti </h1>
                    <h2> Software Engineer</h2>
                </Styled.Title>
                <p>São Carlos, São Paulo, Brazil <br />
                    +55 (14) 9 9809-0506 <br />
                    <a href="mailto:danielgaletti70@gmail.com">Contact me</a> <br />
                    <a href="https://www.linkedin.com/in/danielgaletti/" target="_blank" rel="noreferrer">LinkedIn </a> </p>
            </Styled.HeaderDescription>
        </Styled.Header>
    )
}

export default Header;