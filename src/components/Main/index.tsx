/* eslint-disable react/prop-types */
import * as Styles from "./styles";

export const Main = ({
  title = "NextJS Boilerplate",
  description = "TypeScript, ReactJS, NextJS e Styled Components"
}) => (
  <Styles.Wrapper>
    <Styles.Logo
      src="/assets/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <Styles.Title>{title}</Styles.Title>
    <Styles.Description>{description}</Styles.Description>
    <Styles.Illustration
      src="/assets/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </Styles.Wrapper>
);
