import styled from "styled-components";

export const BackgroundContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;

  // Impede rolagem nas laterais
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37);
  color: white;
  font-family: 'Orbitron', sans-serif;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    gap: 20px;
    padding: 20px;
  }
`;

export const TimerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 30px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 0 15px rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  span:first-child {
    font-size: 60px;
    font-weight: 700;
    color: #00fff0;
    text-shadow: 0 0 8px #00fff0, 0 0 15px #00fff0;

    @media (max-width: 600px) {
      font-size: 40px;
    }
  }

  span:last-child {
    font-size: 18px;
    color: #ffffffcc;
    text-transform: uppercase;
    margin-top: 8px;

    @media (max-width: 600px) {
      font-size: 14px;
    }
  }
`;
