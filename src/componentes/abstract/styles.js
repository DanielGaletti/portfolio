import styled from 'styled-components';

export const Download = styled.a`
    display: flex;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-align: center;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s;
    margin: 20px auto;
    width: 100px;

    &:hover {
        background-color: #0056b3; 
    }
`;