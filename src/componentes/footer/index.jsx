import * as Styled from "./styles.js";
import { useTheme } from '../../context/ThemeContext.js';

const Footer = () => {
    const { isDarkTheme } = useTheme();
    return (
        <>
            <Styled.Footer isDarkTheme={isDarkTheme}>This is a personal page. Its contents are of entire responsability of Daniel Galetti.
                <br />© 2024 Daniel Galetti</Styled.Footer>
        </>
    )
}

export default Footer;