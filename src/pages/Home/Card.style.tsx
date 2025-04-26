import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  width: 250px;
  height: 400px;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    background-color: #000;
    border-radius: 12px;
    /* padding: 8px; */
  }
`;


export const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 8px;
  color: #e4e2e2;
`;

export const Description = styled.p`
  font-size: 16px;
  color:#e4e2e2;
  margin-bottom: 16px;
`;

export const StyledButton = styled.button`
  padding: 10px 16px;
  background: transparent;
  border: 2px solid #de5c05;
  color: #de5c05;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
   background: #ff6600;
   color: #fff;
  }
`;

export const TechnologiesContainer = styled.div`
  display: flex;
  gap: 8px;
  margin: 12px 0;

  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
`;
