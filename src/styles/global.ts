import { globalCss, theme } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    textDecoration: "none",
    verticalAlign: "baseline",
    listStyle: "none"
  },

  body: {
    "-webkit-font-smoothing": "antialiased",
    backgroundColor: "$gray900",
    color: "$gray100",
    minHeight: "100vh",
    fontFamily: "Roboto",
    width: "100%"
  },

  html: {
    background: theme.colors.gray900
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
    textDecoration: "none",
    background: "transparent"
  },

  "h1, h2, h3, h4, h5, h6": {
    fontFamily: "Inter",
    fontWeight: 700
  },

  "a, button": {
    cursor: "pointer"
  }
});
