import { Title, ContainerText, Container, SorteioImage, ErrorMessage, Resultado } from './Sorteador.styled';
import { useState } from 'react';

export function Home() {

  const [girar, setGirar] = useState<boolean>(false);
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);
  const [resultado, setResultado] = useState<number | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  const handleSorteio = () => {
    if (isNaN(min) || isNaN(max)) {
      setErro('Por favor, preencha os dois campos com números válidos.');
      setResultado(null);
      return;
    }

    if (min > max) {
      setErro('O primeiro número deve ser menor que o segundo!');
      setResultado(null);
      return;
    }

    setErro(null);
    setGirar(true);
    setTimeout(() => {
      setGirar(false);
      const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
      setResultado(numeroSorteado);
    }, 1000);
  };


  return (
    <>
      <ContainerText>
        <SorteioImage src="/assets/roleta.png" alt="Sorteador de números" className={girar ? "girando" : ""} />
        <Title>Sorteador de números</Title>
      </ContainerText>

      <Container>
        <input type="text" placeholder='Digite um número' onChange={(event) => setMin(Number(event.target.value))} />
        <input type="text" placeholder='Digite outro número' onChange={(event) => setMax(Number(event.target.value))} />
        <button onClick={handleSorteio}>Sortear</button>

        {erro && <ErrorMessage>{erro}</ErrorMessage>}


        {resultado !== null && !girar && (
          <div>
            <Resultado>Número sorteado: {resultado}</Resultado>
          </div>
        )}

      </Container>
    </>

  )
}
export default Home