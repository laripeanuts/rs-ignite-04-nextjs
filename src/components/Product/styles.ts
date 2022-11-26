import { styled, theme } from "styles";

export const ProductStyled = styled("a", {
  background: theme.colors.gradient,
  minWidth: "480px",
  borderRadius: 8,
  padding: "0.25rem",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover"
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    borderRadius: 6,
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",

    background: "rgba(0, 0, 0, 0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    strong: {
      fontSize: theme.fontSizes["lg"]
    },

    span: {
      fontSize: theme.fontSizes["xl"],
      fontWeight: "bold",
      color: theme.colors.green300
    }
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1
    }
  }
});
