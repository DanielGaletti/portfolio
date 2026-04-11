import * as Styled from './styles.js';

const Footer = () => (
    <Styled.Footer>
        Personal page — contents are the sole responsibility of Daniel Galetti.
        <br />
        © {new Date().getFullYear()} Daniel Galetti
    </Styled.Footer>
);

export default Footer;
