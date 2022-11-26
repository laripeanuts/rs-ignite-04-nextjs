import { styled } from "styles";

export const FooterStyled = styled("header", {
  padding: "2rem 0",
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  fontFamily: "Inter",
  color: "$gray-500",

  a: {
    color: "$green300"
  }
});
