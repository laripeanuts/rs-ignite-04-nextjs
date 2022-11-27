import { styled } from "styles";

export const ProductWrapper = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
  gap: "4rem",

  width: 1180,
  margin: "0 auto"
});

export const ImageWrapper = styled("div", {
  width: "100%",
  maxWidth: 576,
  height: 656,
  background: "$gradientBW",
  borderRadius: 8,
  padding: "0.25rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  img: {
    objectFit: "cover"
  }
});

export const DetailWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minWidth: "100%",

  ".info": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  },

  ".title": {
    minHeight: 50,
    borderRadius: 6,
    background: "$gray500"
  },

  ".price": {
    minHeight: 50,
    width: 200,
    borderRadius: 6,
    background: "$gray500"
  },

  ".description": {
    minHeight: 200,
    borderRadius: 6,
    background: "$gray500"
  },

  ".button": {
    minHeight: 65,
    borderRadius: 6,
    background: "$gray500"
  }
});
