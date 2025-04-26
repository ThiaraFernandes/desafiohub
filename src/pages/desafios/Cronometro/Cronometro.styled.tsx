import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(to right, #6a11cb, #2575fc);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* width: 100%; */
  /* padding: 20px; */
  /* background-color: rgba(255, 255, 255, 0.1); */
  backdrop-filter: blur(12px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  /* margin: 0 auto; */
  text-align: center;
`;



export const Title = styled.h1`
  font-size: 48px;
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(to right, #ffffff, #d1d1d1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 1px rgba(28, 24, 24, 0.3);
  margin-bottom: 20px;
`;


export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
  
`;

interface ButtonProps {
  color: 'start' | 'stop' | 'reset';
}

export const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${({ color }) =>
    color === 'start' ? '#28a745' :
      color === 'stop' ? '#dc3545' :
        '#ffc107'};

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 0.7; }
`;

export const Subtitle = styled.h2`
  font-size: 48px;
  font-weight: bold;
  color: #252525;
  font-family: 'Courier New', monospace;
  animation: ${pulse} 0.5s ease-in-out;
`;