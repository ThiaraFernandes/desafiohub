import styled from "styled-components";
import { FaExchangeAlt, FaArrowRight } from "react-icons/fa";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #7b7c7d;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:  'Roboto', sans-serif;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  margin: 40px auto;
  background-color: #e7e9ea;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;

  @media (max-width: 425px) {
    padding: 15px;
    margin: 20px auto;
    max-width: 95%;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #2d3748;
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 25px 0;
  font-weight: 600;

  @media (max-width: 425px) {
    font-size: 1.3rem;
  }
`;

export const Icon = styled(FaExchangeAlt)`
  color: #4a5568;
  font-size: 1.2rem;
`;

export const Subtitle = styled.h2`
  font-size: 0.95rem;
  color: #4a5568;
  margin: 0 0 8px 0;
  font-weight: 500;

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  .input-wrapper {
    position: relative;
    width: 100%;
  }
`;

export const SelectMoeda = styled.select`
  width: 100%;
  padding: 12px 10px;
  font-size: 0.95rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  color: #2d3748;
  transition: border 0.2s;
  appearance: none;
  padding-right: 30px;
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"%3E%3Cpath fill="none" stroke="%23333" stroke-width="2" d="M4 6l4 4 4-4" /%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: right 10px center;

  &:focus {
    border-color: #4299e1;
    outline: none;
  }

  @media (max-width: 425px) {
    font-size: 0.9rem;
    padding: 10px;
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 12px 15px;
  font-size: 0.95rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  color: #2d3748;
  box-sizing: border-box;

  &:focus {
    border-color: #4299e1;
    outline: none;
  }

  @media (max-width: 425px) {
    font-size: 0.9rem;
    padding: 10px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  background: #5a67d8;
  color: white;
  border-radius: 8px;
  font-weight: 500;
  margin-top: 10px;
  transition: background 0.2s;

  &:hover {
    background: #4c51bf;
  }

  @media (max-width: 425px) {
    font-size: 0.9rem;
    padding: 12px;
  }
`;

export const Result = styled.div`
  margin-top: 25px;
  padding: 15px;
  background: #edf2f7;
  border-radius: 8px;
  text-align: center;
  color: #2d3748;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-weight: bold;

  svg {
    font-size: 24px;
  }

  @media (max-width: 425px) {
    font-size: 18px;
  }
`;

export const ArrowIcon = styled(FaArrowRight)`
  color: #4a5568;
  font-size: 22px;
`;
