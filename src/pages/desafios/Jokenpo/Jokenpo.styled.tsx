import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
  background: linear-gradient(to bottom right, #f5f5f5, #e0e0e0);
  
`; 

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 40px;
  color: #333;
  font-weight: bold;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const buttonVariants = {
  pedra: css`
    background-color: #6c757d;
    box-shadow: 0 4px 10px rgba(108, 117, 125, 0.5);
  `,
  papel: css`
    background-color: #ffc107;
    box-shadow: 0 4px 10px rgba(255, 193, 7, 0.5);
  `,
  tesoura: css`
    background-color: #dc3545;
    box-shadow: 0 4px 10px rgba(220, 53, 69, 0.5);
  `,
  reset: css`
    background-color: #28a745;
    box-shadow: 0 4px 10px rgba(40, 167, 69, 0.5);
    border-radius: 12px;
    width: 160px;
    height: 50px;
    margin-top: 30px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: bold;
    color: white;
  `,
};

export const Button = styled.button<{ variant: "pedra" | "papel" | "tesoura" | "reset" }>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  ${({ variant }) => buttonVariants[variant]};

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 60%;
    height: 60%;
    object-fit: contain;
  }
`;

export const Result = styled.div`
  background-color: #ffffffcc; 
  padding: 20px 30px;
  border-radius: 12px;
  margin-top: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;

  p {
    margin: 10px 0;
    font-size: 20px;
    color: #333;
    font-weight: 500;
  }

  span {
    font-weight: bold;
    color: #555;
  }

  .result-text {
    font-size: 24px;
    font-weight: bold;
    margin-top: 15px;
  }

  .win {
    color: #2ecc71; 
  }

  .lose {
    color: #e74c3c;
  }

  .draw {
    color: #f39c12; 
  }
`;

