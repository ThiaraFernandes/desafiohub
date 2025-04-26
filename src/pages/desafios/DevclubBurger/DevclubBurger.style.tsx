import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #000;
  color: #fff;
  font-family: 'sans-serif';
  margin: 0 ;
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
  height: auto;
  top: 0;
  left: 0; 
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  justify-content: center;
  margin-bottom: 50px;
`;

// export const ButtonReset = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 120px;
//   height: 40px;
//   border-radius: 8px; 
//   border: none; 
//   margin-bottom: 30px;
//   background: transparent;
//   color: #fff;
//   cursor: pointer;
//   font-weight: 500;
//   letter-spacing: 0.5px; 
//   position: relative;
//   overflow: hidden;
//   transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); 

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     border: 1px solid rgba(255, 255, 255, 0.3);
//     border-radius: 8px;
//     transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
//   }

//   &:hover {
//     transform: translateY(-2px); 
//     color: #21f894; 
//     background: rgba(255, 255, 255, 0.05); 

//     &::before {
//       border: 1px solid #21f894; 
//       transform: scale(1.02); 
//     }
//   }

//   &:active {
//     transform: translateY(0);
//     transition: all 0.1s ease;
//   }
// `;

export const Button = styled.button`
  background: linear-gradient(135deg, #21f894, #6bcfee);
  border: none;
  border-radius: 12px; 
  margin-top: 50px;
  width: 180px;
  height: 100px;
  color: #000;
  font-size: 20px; 
  font-weight: 600; 
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(33, 248, 148, 0.3); 
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;

  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 60%
    );
    border-radius: 12px;
    z-index: -1;
    border: 1px solid #21f894; 
    transition: all 0.1s ease;
  }

  span {
    font-size: 16px; 
    font-weight: 500; 
    color: rgba(0, 0, 0, 0.8); 
    margin-top: 6px;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px); 
    box-shadow: 0 6px 24px rgba(0, 195, 255, 0.4); 
    background: linear-gradient(135deg, #00e6b8, #00c3ff);  

    span {
      color: #000; 
      transform: translateY(2px); 
    }
  }

  &:active {
    transform: translateY(0) scale(0.98); 
    box-shadow: 0 2px 12px rgba(0, 195, 255, 0.4); 
    transition: all 0.1s ease;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 195, 255, 0.3); 
  }

  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 14px;
    background: linear-gradient(135deg, #21f894, #6bcfee);
    z-index: -2;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 0.4; 
  }
`;

export const ContainerResult = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: wrap; 
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; 
  }
`;

export const BurgerCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  width: 200px;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  background-color: #000;
  border: 2px solid #21f894;
  text-align: center;
  font-size: 17px;
  margin: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    border: 2px solid #01fc87;
  }
`;

export const BurgerImage = styled.img`
  width: 180px;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ResultReduce = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-size: 20px;
  background-color: #333; 
  margin-top: 20px; 
  border-radius: 10px; 
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); 
  max-width: 500px; 
  width: 100%; 
  font-weight: bold; 
  
  h2 {
    font-size: 26px; 
    margin: 0; 
    padding: 5px 0; 
  }
`;

// Estilo da área de descontos
export const ContainerDiscounts = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #1a1a1a;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0, 255, 128, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  h3 {
    color: #04D361;
    font-size: 18px;
    margin: 0;
  }

  div {
    display: flex;
    gap: 10px;
  }
`;

// Botão pequeno
export const SmallButton = styled.button`
  background-color: #04D361;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #03B34C;
  }
`;

