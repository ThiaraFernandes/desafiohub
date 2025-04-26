import { useState } from "react";
import { FaMoneyBillWave, FaDollarSign, FaEuroSign } from "react-icons/fa";
import { Container, Title, Subtitle, InputContainer, SelectMoeda, InputField, Button, Result, Icon, ArrowIcon } from "./Conversor.styled";
import styled from "styled-components";

interface Moeda {
  nome: string;
  valor: number;
}

interface MoedaConvertida {
  nome: string;
  valor: number;
}

const taxaDecambio = [
  { nome: "BRL", valor: 1 },
  { nome: "USD", valor: 5.76 },
  { nome: "EUR", valor: 6.23 },
];

interface CurrencyIconProps {
  currency: string;
}

const CurrencyIcon = styled.div<CurrencyIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: ${(props) => {
    switch (props.currency) {
      case "BRL":
        return "#FFD700";
      case "USD":
        return "#008000";
      case "EUR":
        return "#0000FF";
      default:
        return "#4a5568";
    }
  }};
`;

function Home() {
  const [valorDigitado, setValorDigitado] = useState<number>(0);
  const [resultado, setResultado] = useState<number | null>(null);
  const [moeda, setMoeda] = useState<Moeda>({ nome: "BRL", valor: 1 });
  const [moedaConvertida, setMoedaConvertida] = useState<MoedaConvertida>({ nome: "USD", valor: 5.75 });

  function handleConverterMoeda() {
    if (valorDigitado === 0) {
      alert("Preencha todos os campos");
      return;
    }

    if (moeda && moedaConvertida) {
      const valorOrigem = taxaDecambio.find((taxa) => taxa.nome === moeda.nome);
      const valorConvertido = taxaDecambio.find((taxa) => taxa.nome === moedaConvertida.nome);

      if (!valorOrigem || !valorConvertido) {
        alert("Moeda não encontrada");
        return;
      }

      const resultado = (valorDigitado * valorConvertido.valor) / valorOrigem.valor;
      setResultado(resultado);
    } else {
      alert("Preencha todos os campos corretamente");
    }
  }

  return (
    <Container>
      <Title>
        <Icon />
        Conversor de Moedas
      </Title>

      <InputContainer>
        <Subtitle>Converter de:</Subtitle>
        <SelectMoeda onChange={(e) => setMoeda({ ...moeda, nome: e.target.value })}>
          <option value="BRL">R$ Real brasileiro</option>
          <option value="USD">US$ Dólar americano</option>
          <option value="EUR">€ Euro</option>
        </SelectMoeda>
      </InputContainer>

      <InputContainer>
        <Subtitle>Converter para:</Subtitle>
        <SelectMoeda onChange={(e) => setMoedaConvertida({ ...moedaConvertida, nome: e.target.value })}>
          <option value="USD">US$ Dólar americano</option>
          <option value="BRL">R$ Real brasileiro</option>
          <option value="EUR">€ Euro</option>
        </SelectMoeda>
      </InputContainer>

      <InputContainer>
        <Subtitle>Valor:</Subtitle>
        <div className="input-wrapper">
          <InputField
            type="number"
            placeholder="10.000,00"
            onChange={(e) => setValorDigitado(Number(e.target.value))}
          />
        </div>
      </InputContainer>

      <Button onClick={handleConverterMoeda}>Converter</Button>

      {resultado !== null && (
        <Result>
          <CurrencyIcon currency={moeda.nome}>
            {moeda.nome === "BRL" && <FaMoneyBillWave />}
            {moeda.nome === "USD" && <FaDollarSign />}
            {moeda.nome === "EUR" && <FaEuroSign />}
          </CurrencyIcon>
          {resultado.toFixed(2)}
          <ArrowIcon />
          <CurrencyIcon currency={moedaConvertida.nome}>
            {moedaConvertida.nome === "BRL" && <FaMoneyBillWave />}
            {moedaConvertida.nome === "USD" && <FaDollarSign />}
            {moedaConvertida.nome === "EUR" && <FaEuroSign />}
          </CurrencyIcon>
        </Result>
      )}
    </Container>
  );
}

export default Home;
