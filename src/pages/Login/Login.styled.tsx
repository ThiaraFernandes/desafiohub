import styled from 'styled-components';

interface InputProps {
  $hasError?: boolean;
}

export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  font-family: sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const LeftSection = styled.div`
  flex: 2;
  background-color: #0d1117;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;

   @media (max-width: 768px) {
    padding: 1.5rem;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 1.8rem;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  background-color: #000;
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
 
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;

   @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 425px) {
    font-size: 1.2rem;
  }


strong{
  font-weight: bold;
}

span{
  background: linear-gradient(90deg, #e60073, #ff6600);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 1rem;
  text-align: center;



  p{
    margin: 0.3rem;
    padding: 0.2rem;

     @media (max-width: 425px) {
    font-size: 1.1rem;
  }
  }

  span {
    color: #f33;
    background: linear-gradient(90deg, #e60073, #ff6600);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 2rem;
  
  img {
    width: 100%;
    max-width: 400px;
    border-radius: 1rem;

    @media (max-width: 768px) {
      max-width: 300px;
    }

    @media (max-width: 425px) {
      max-width: 250px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  gap: 1rem;

  @media (max-width: 425px) {
    max-width: 90%;
  }
`;

export const Input = styled.input<InputProps>`
  padding: 0.7rem;
  border-radius: 5px;
  border: 1px solid ${props => props.$hasError ? 'red' : '#ccc'};
  background-color: #1c1f24;
  color: white;

  &::placeholder {
    color: #aaa;

    @media (max-width: 425px) {
    font-size: 0.8rem;
  }
  }

  &:focus {
    outline: none;
    border-color: #3897f0;
  }
`;

export const Button = styled.button`
  background-color: #3897f0;
  border: none;
  color: white;
  padding: 0.7rem;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #327dc3;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const LinkButton = styled.a`
  text-align: center;
  color: #aaa;
  font-size: 0.85rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
  margin: -0.5rem 0 0.5rem;
`;
