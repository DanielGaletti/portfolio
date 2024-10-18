import React, { useEffect } from 'react';
import Header from "../../componentes/header";
import Abstract from "../../componentes/abstract";
import Experience from '../../componentes/experience';
import Footer from "../../componentes/footer";
import * as Styled from "./styles.js";
import { useTheme } from '../../context/ThemeContext.js';

const Home = () => {
    console.log(
        "%c Welcome to my portfolio! 🎉 \n" +
        "%c This is a space to showcase my work and skills.\n" +
        "%c If you're curious, feel free to explore! 😊\n" +
        "%c Remember to be kind and respectful! ❤️",
        "font-size: 24px; color: #3498db; font-weight: bold;", // Style for the welcome message
        "font-size: 18px; color: #2ecc71;", // Style for the description
        "font-size: 18px; color: #e74c3c;", // Style for the exploration message
        "font-size: 18px; color: #f39c12;"  // Style for the reminder
      );
      
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
                <Experience /> 
                <Footer />
            </Styled.Container>
        </>
    );
};

export default Home;
