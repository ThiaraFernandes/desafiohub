import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
  background: linear-gradient(to bottom right, #f5f5f5, #e0e0e0);
`;

export const FormGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  input[type="text"] {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const ResultList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 300px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  li {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ccc;

    &:last-child {
      border-bottom: none;
    }

    span {
      font-size: 16px;
    }
  }
`;
