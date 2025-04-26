import Card from './Card';
import { CardListContainer } from "./CardList.style";


const Cards = [
  {
    image: "/assets/conversor.jpg",
    title: "Conversor de moedas",
    description: "Converta valores entre moedas.",
    technologies: ["react", "typescript", "styled-components"],
    link: "/conversor",
  },
  {
    image: "/assets/buscador.jpg",
    title: "Buscador de contatos",
    description: "Encontre contatos com facilidade.",
    technologies: ["react", "typescript", "styled-components"],
    link: "/buscador",
  },
  {
    image: "/assets/relogio-digital.jpg",
    title: "Relogio Digital",
    description: "Relógio digital com efeito vidro.",
    technologies: ["react", "typescript", "styled-components"],
    link: "/relogio",
  },
  {
    image: "/assets/contador-caracter.jpg",
    title: "Contador de caracteres e palavras",
    description: "Converta valores entre moedas.",
    technologies: ["react", "typescript", "styled-components"],
    link: "/caracteres",
  },
  {
    image: "/assets/cronometro-.jpg",
    title: "Cronômetro",
    description: "Cronometre o tempo com precisão.",
    technologies: ["react", "typescript", "styled-components"],
    link: "/cronometro",
  },
  {
    image: "/assets/sorteador.jpg",
    title: "Sorteador de números",
    description: "Sorteie números aleatórios.",
    technologies: ["react", "typescript", "styled-components"],
    link: "/sorteador",
  },
  {
    image: "/assets/jokenpo.jpg",
    title: "Jokenpo",
    description: "Desafie o computador no clássico Jokenpo.",
    technologies: ["react", "typescript", "styled-components"],
    link: "/jokenpo",
  }, {
    image: "/assets/devclub-burguer.jpg",
    title: "DevClub Burger",
    description: "Metodo de ordenação de um array de objetos.",
    technologies: ["react", "typescript", "styled-components"],
    link: "/devclub-burguer",
  },
];


function CardList() {
  return (
    <CardListContainer>
      {Cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          technologies={card.technologies}
          link={card.link}
        />
      ))}
    </CardListContainer>
  );
}
export default CardList;