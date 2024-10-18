import React, { useEffect } from 'react';
import Header from "../../componentes/header";
import Abstract from "../../componentes/abstract";
import Footer from "../../componentes/footer";
import * as Styled from "./styles.js";
import { useTheme } from '../../context/ThemeContext.js';

const Home = () => {
    const { isDarkTheme } = useTheme();
  
    useEffect(() => {
        document.body.className = isDarkTheme ? 'dark' : 'light';
    }, [isDarkTheme]);

    return (
        <>
            <Styled.GlobalStyles />
            <Styled.Container>
                <Header />
                <Abstract />
                <Footer />
            </Styled.Container>
        </>
    );
};

export default Home;
