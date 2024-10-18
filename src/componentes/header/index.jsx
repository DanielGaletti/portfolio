import * as Styled from "./styles.js";
import { useTheme } from '../../context/ThemeContext.js';

const Header = () => {
    const { isDarkTheme, toggleTheme } = useTheme();
    return (
        <Styled.Header>
            <Styled.ImageContainer>
                <Styled.Image src="/myself.png" alt="myself" />
            </Styled.ImageContainer>
            <Styled.HeaderDescription>
                <Styled.Button isDarkTheme={isDarkTheme} onClick={toggleTheme}>
                    {isDarkTheme ? '☀️' : '🌙'}
                </Styled.Button>
                <h1> Daniel Galetti </h1>
                <p>São Carlos, São Paulo, Brazil <br />
                 +55 (14) 9 9809-0506 <br />
                <a href="mailto:danielgaletti70@gmail.com">Contact me</a> <br />
                <a href="https://www.linkedin.com/in/danielgaletti/" target="_blank" rel="noreferrer">LinkedIn </a> </p>
            </Styled.HeaderDescription>
        </Styled.Header>
    )
}

export default Header;