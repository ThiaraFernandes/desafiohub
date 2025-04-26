import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #0D0D10;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-align: center;
  }
`;

export const Title = styled.h1` 
font-size: 2rem;


span{
    color: #f33;
    background: linear-gradient(90deg, #e60073, #ff6600);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;

    @media (max-width: 425px) {
      font-size: 1.5rem;
      text-align: center;
      
    }
}
`;

export const WelcomeText = styled.h1`
  font-size: 1rem;
  margin: 0;
  font-weight: normal;
  max-width: 100%;
  text-align: center;
  word-break: break-word;


  span {
    color: #fff;
    font-weight: bold;
    font-size: 1.1rem;
    margin-left: 0.3rem;

    @media (max-width: 425px) {
      font-size: 0.9rem;
      text-align: center;

    }
  }
  @media (max-width: 425px) {
    font-size: 0.9rem;
    width: 100%;
    padding: 0 1rem; 
  }
`;

export const RightContent = styled.div`
 display: flex;
 align-items: center;
 gap: 2rem;
 justify-content: flex-end;

 @media (max-width: 425px) {
   flex-direction: column;
   gap: 1rem;
 }
`;

export const LogoutButton = styled.button`
  background-color: rgba(210, 210, 210, 0.1);
  border: none;
  color: #fff;
  border-radius: 50%;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1); 
  }

  svg {
    color: #f2789f;
  }

  @media (max-width: 425px) {
    margin-top: 0.5rem;
  }
`;

