import { styled } from "styles";

export const SuccessWrapper = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 600,

  h1: {
    fontSize: "$2xl",
    color: "$gray100"
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem"
  },

  a: {
    display: "block",
    fontSize: "$xl",
    color: "$green500",
    marginTop: "5rem",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300"
    }
  }
});

export const ImageWrapper = styled("div", {
  width: "100%",
  maxWidth: 130,
  height: 145,
  borderRadius: 8,
  padding: "0.25rem",
  background: "$gradient",
  marginTop: "4rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  img: {
    objectFit: "cover"
  }
});
