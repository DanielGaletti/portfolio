import * as Styled from "./styles.js";

const Banner = ({children}) => {
    return (
        <Styled.Banner>
           {children}
        </Styled.Banner>
    );
}

export default Banner;