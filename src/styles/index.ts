import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",

      gray900: "#070707",
      gray800: "#121214",
      gray700: "#202024",
      gray300: "#c4c4cc",
      gray100: "#e1e1e6",

      green500: "#00875f",
      green300: "#00b37e",

      yellow600: "#EAB308",
      yellow500: "#EAB308",

      blue600: "#0EA5E9",
      blue500: "#38BDF8",
      blue400: "#7DD3FC"
    }
  }
});
