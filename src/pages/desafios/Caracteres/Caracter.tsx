import { useState } from 'react';
import { Container, InnerContent, Title, ContainerBox, Result, TextCount, Button } from './Caracter.styled';

function Home() {

  const [count, setCount] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [wordCount, setWordCount] = useState<string>("0");

  const handleCount = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    if (value.trim() === '') {
      setCount('0');
    }
    if (value.length > 0) {
      setCount(value.replace(/\s/g, '').length.toString());

    }
    setText(value);
    setWordCount(value.trim() ? value.trim().split(/\s+/).length.toString() : "0");
  }

  const handleClear = () => {
    setText('');
    setCount('');
    setWordCount("0");
  }

  return (
    <Container>
      <InnerContent>
        <Title>Contador de caracteres e palavras</Title>
        <ContainerBox placeholder="Digite aqui..." onChange={handleCount} value={text} />

        <Result>
          <TextCount>Caracteres: <span>{count}</span></TextCount>

          <TextCount>Palavras: <span>{wordCount}</span></TextCount>
        </Result>

        <Button onClick={handleClear}>Limpar</Button>
      </InnerContent>

    </Container>
  );

} export default Home;