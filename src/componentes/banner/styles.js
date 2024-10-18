import styled from 'styled-components';

export const Banner = styled.div`
  background-color:  var(--background-light);
  padding: 20px; 
  margin: 15px 0; 
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 

  h2 {
    font-size: 1.8rem;
    color: #2c3e50; 
    margin-bottom: 10px; 
  }

  p {
    font-size: 1.2rem;
    color: #7f8c8d; 
    line-height: 1.2; 
  }

  &:hover {
    background-color: #ebebeb; 
    transform: scale(1.02); 
    transition: all 0.3s ease-in-out; 
  }
  
  /* Responsividade */
  @media (max-width: 768px) {
    padding: 15px;
    h2 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;