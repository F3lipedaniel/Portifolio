import { TechnologyWrapper, TechnologyName, StarContainer, Star } from "./styles";

export const TechnologyC = ({ name, stars }) => {

  const starElements = Array.from({ length: stars }, (_, index) => (
    <Star size={24} key={index}>
      <img src="star.svg" alt="Estrela" />
    </Star>
  ));

  return (
    <TechnologyWrapper>
      <TechnologyName>{name}</TechnologyName>
      <StarContainer>{starElements}</StarContainer>
    </TechnologyWrapper>
  );
};
