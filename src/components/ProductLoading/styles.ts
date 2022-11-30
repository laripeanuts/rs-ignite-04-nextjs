import { styled } from "styles";

export const ProductLoadingWrapper = styled("div", {
  minWidth: 480,
  maxHeight: 600,
  marginRight: "3rem",
  overflow: "hidden",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "2rem",

  ".main": {
    borderRadius: 8,
    width: "100%",
    background: "$gradientBW",
    height: 500
  },

  ".bottom": {
    width: "100%",
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    strong: {
      width: "65%",
      height: "100%",
      borderRadius: 8,
      background: "$gradientBW"
    },

    span: {
      height: "100%",
      width: "30%",
      borderRadius: 8,
      background: "$gradientBW"
    }
  }
});
