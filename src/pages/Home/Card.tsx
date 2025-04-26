import { CardContainer, Title, Description, TechnologiesContainer, StyledButton } from "./Card.style";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiStyledcomponents } from "react-icons/si";

interface CardProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

function Card({ image, title, description, technologies, link }: CardProps) {
  return (
    <CardContainer>
      <img src={image} alt={`Imagem de ${title}`} />
      <Title>{title}</Title>
      <Description>{description}</Description>

      <TechnologiesContainer>
        {technologies.includes("react") && <FaReact title="React" style={{ color: "#61DAFB", fontSize: "28px" }} />}
        {technologies.includes("typescript") && <SiTypescript title="TypeScript" style={{ color: "#3178C6", fontSize: "28px" }} />}
        {technologies.includes("styled-components") && <SiStyledcomponents title="Styled Components" style={{ color: "#FFB247", fontSize: "30px" }} />}
      </TechnologiesContainer>


      <StyledButton as="a" href={link} target="_blank" rel="noopener noreferrer">
        Ver mais
      </StyledButton>
    </CardContainer>
  );
}

export default Card;
