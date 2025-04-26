import { useState } from 'react';
import { Container, Title, ButtonsWrapper, Button, Result } from './Jokenpo.styled';

const options = ['Pedra', 'Papel', 'Tesoura'];

//função para obter a opção aleatória do computador
const getComputerOption = () => {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

//função para obter o resultado da partida
const getResult = (userOption: string, computerOption: string) => {
  if (userOption === computerOption) {
    return 'Empate';
  } else if (
    (userOption === 'Pedra' && computerOption === 'Tesoura') ||
    (userOption === 'Papel' && computerOption === 'Pedra') ||
    (userOption === 'Tesoura' && computerOption === 'Papel')
  ) {
    return 'Você ganhou!';
  } else {
    return 'Você perdeu!';
  } 
};


function Jokenpo() {

  const [selectedOption, setSelectedOption] = useState('');
  const [computerOption, setComputerOption] = useState('');
  const [result, setResult] = useState('');
  // const [score, setScore] = useState(0);

//função para escolher a opção do jogador
  const handlePlayerChoice = (option: string) => {
    const computerOption = getComputerOption();
    const result = getResult(option, computerOption);
    setComputerOption(computerOption);
    setResult(result);
    setSelectedOption(option);
  };

  ///função para reiniciar o jogo
  const handlePlayAgain = () => {
    setSelectedOption('');
    setComputerOption('');
    setResult('');
  };


  return (
    <Container>
      <Title>Jokenpô</Title>

      <ButtonsWrapper>
        <Button variant="pedra" onClick={() => handlePlayerChoice("Pedra")}>
          <img src="./src/assets/pedra.png" alt="imagem pedra" />
        </Button>
        <Button variant="papel" onClick={() => handlePlayerChoice("Papel")}>
          <img src="./src/assets/paper.png" alt="imagem papel" />
        </Button>
        <Button variant="tesoura" onClick={() => handlePlayerChoice("Tesoura")}>
          <img src="./src/assets/tesoura.png" alt="imagem tesoura" />
        </Button>
      </ButtonsWrapper>

      <Result>
        <p>Você escolheu: <span>{selectedOption}</span></p>
        <p>O computador escolheu: <span>{computerOption}</span></p>

        {result && (
          <p className={`result-text ${result === 'Empate' ? 'draw' : result === 'Você ganhou!' ? 'win' : 'lose'}`}>
            Resultado: {result === 'Empate' ? '🤝' : result === 'Você ganhou!' ? '🎉' : '💔'} {result}
          </p>
        )}


      </Result>

      <Button variant="reset" onClick={handlePlayAgain}>Jogar novamente</Button>
    </Container>

  )
}
export default Jokenpo;