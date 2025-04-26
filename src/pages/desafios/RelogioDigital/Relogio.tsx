import { BackgroundContainer, Container, TimerBox } from "./Relogio.style";
import { useEffect, useState } from "react";

function Home() {
  const [timer, setTimer] = useState<string>("00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");
      const time = `${hours}:${minutes}:${seconds}`;

      setTimer(time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <BackgroundContainer>
      <Container>
        <TimerBox>
          <span>{timer.split(":")[0]}</span>
          <span>Horas</span>
        </TimerBox>

        <TimerBox>
          <span>{timer.split(":")[1]}</span>
          <span>Minutos</span>
        </TimerBox>

        <TimerBox>
          <span>{timer.split(":")[2]}</span>
          <span>Segundos</span>
        </TimerBox>
      </Container>
    </BackgroundContainer>
  );
}

export default Home;
