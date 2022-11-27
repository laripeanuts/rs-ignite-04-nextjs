import { styled } from "styles";

export const HeaderStyled = styled("header", {
  padding: "2rem 0",
  display: "flex",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  a: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    color: "$white"
  }
});
