import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: "Poppins", sans-serif;
  }

  body {
    background-color:  #e8e7e7;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;

  input {
    padding: 10px;
    font-size: 16px;
    width: 250px;
    text-align: left;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

   button {
    padding: 10px 20px;
    background-color: #7159c1;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
    box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: #5a47a3;
      scale: 1.05;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
  font-weight: bold;
`;

export const SorteioImage = styled.img`
  width: 400px;
  height: 400px;
  transition: transform 1s;

  &.girando {
    transform: rotate(360deg);
  }
`;

export const Resultado = styled.p`
  font-size: 24px;
  color: #333;
  font-weight: bold;
  background-color: #f3f3f3;
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  animation: aparecer 0.5s ease-in-out;

  @keyframes aparecer {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;