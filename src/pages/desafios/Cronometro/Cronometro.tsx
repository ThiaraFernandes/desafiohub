import { useState, useRef } from "react";
import { Container, ContainerButton, Button, Title, Subtitle } from "./Cronometro.styled";

function Home() {
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);

  const intervalRef = useRef<number | null>(null);

  function handleStart() {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {

      setSeconds((prevSeconds) => {
        if (prevSeconds === 59) {
          setMinutes((prevMinutes) => {
            if (prevMinutes === 59) {
              setHours((prevHours) => prevHours + 1);
              return 0;
            }
            return prevMinutes + 1;
          });
          return 0;
        }
        return prevSeconds + 1;

      }
      );
    }, 1000);
  }

  function handleStop() {
    clearInterval(intervalRef.current!);
    intervalRef.current = null;
  }

  function handleReset() {
    clearInterval(intervalRef.current!);
    intervalRef.current = null;
    setMinutes(0);
    setSeconds(0);
    setHours(0);
  }

  return (
    <Container>
      <Title>Cronometro</Title>
      <ContainerButton>
        <Button color="start" onClick={handleStart}>Start</Button>
        <Button color="stop" onClick={handleStop}>Stop</Button>
        <Button color="reset" onClick={handleReset}>Reset</Button>
      </ContainerButton>

      <Subtitle>{`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}</Subtitle>

    </Container>
  );
}
export default Home 