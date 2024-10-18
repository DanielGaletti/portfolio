import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    width: 100%;
    gap: 5rem;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column; 
        gap: 2rem;
    }
`;

export const Image = styled.img`
    width: 12rem;
    height: auto;

    @media (max-width: 768px) {
        width: 8rem; 
    }
`;

export const ImageContainer = styled.div`
    max-height: 12rem;   
    max-width: 12rem;  
    border-radius: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        max-height: 8rem;
        max-width: 8rem; 
        margin: 0 auto;
    }
`;

export const HeaderDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: end;
    gap: 5px;

    p {
        width: 80%;
        margin: 0 0 10px 0;
        text-align: unset;
    }

    h1 {
        font-size: 3rem;
        margin: 0 0 1.5rem 0;
    }

    @media (max-width: 768px) {
        align-items: center;
        text-align: center;
        gap: 2px; 
        
        p {
            width: 90%;
        }

        h1 {
            font-size: 2rem; 
        }
    }
`;

export const Button = styled.button`
    padding: 5px 10px;
    background-color: ${({ isDarkTheme }) => isDarkTheme ? 'var(--background-light)' : 'var(--background-dark)'};
    color: ${({ isDarkTheme }) => isDarkTheme ? 'var(--background-light)' : 'var(--background-dark)'};
    border: 2px solid ${({ isDarkTheme }) => isDarkTheme ? 'var(--background-light)' : 'var(--background-dark)'};
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
`;