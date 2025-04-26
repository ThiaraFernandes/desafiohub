import Styled from 'styled-components';

export const Container = Styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #e3f2fd;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: px 20px;
  overflow: hidden;

`;

export const InnerContent = Styled.div`
  width: 100%;
  max-width: 800px;
  padding: 30px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  
`;

export const Title = Styled.h1`
 font-size: 32px;
 margin-bottom: 20px;
 color: #333;
 font-weight: 600;
 text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
 
`;

export const ContainerBox = Styled.textarea`
 width: 100%;
 max-width: 100%;
 height: 50vh;
 padding: 8px;
 font-size: 18px;
 border: 2px solid #c6ccd2;
 border-radius: 8px;
 box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
 margin-bottom: 16px;
 resize: none;
 outline: none;
 transition: 0.3s;

 &:focus {
  border-color: #6588ae;
  box-shadow: 2px 2px 12px rgba(19, 93, 173, 0.3);
 }
 `;

export const Result = Styled.div`
 display: flex;
 gap: 25px;
 margin-bottom: 16px;
 `;

export const TextCount = Styled.p`
 font-size: 22px;
 margin-bottom: 16px;
color: #333; 
font-weight: 600;

 span {
  font-weight: 400;
  color: #555;
  margin-left: 5px;
  font-size: 20px;
 }

 `;

export const Button = Styled.button`
 padding: 10px 16px;
 font-size: 16px;
 font-weight: bold;
 background-color: #007bff;
 color: #fff;
 width: 150px;
 border: none;
 border-radius: 8px;
 cursor: pointer;
 transition: all 0.3s ease;

 &:hover {
  background-color: #0056b3;
  transform: scale(1.05);
 }

 `;