import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    customColors: {
      smoothGray: string;
      mediumGray: string;
      lightGray: string;
      carbon: string;
      deadGray: string;
    };
  }

  interface PaletteOptions {
    customColors?: {
      smoothGray?: string;
      mediumGray?: string;
      lightGray?: string;
      carbon?: string;
      deadGray?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    customColors: {
      smoothGray: "#1A1E20",
      mediumGray: "#A5A5A5",
      lightGray: "#313131",
      carbon: "#252C2F",
      deadGray: "#919A9F",
    },
    primary: {
      main: "#E8D710",
    },
    black: {
      main: "#000000",
      dark: "#1A1A1A",
      medium: "#373A40",
    },
    gray: {
      dark: "#202020",
      main: "#9E9E9E",
      medium: "#C0C0C0",
      light: "#F6F6F6",
    },
    background: {
      default: "#1A1A1A",
    },
  },

  typography: {
    fontFamily: '"Plus Jakarta Sans", "Manrope", "Inter", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
      color: "#fff",
      fontSize: "clamp(2.625rem, 4vw + 0.5rem, 4.5rem)",
      letterSpacing: "-2px",
      fontFamily: "Manrope",
    },
    h2: {
      fontFamily: "Manrope",
      fontWeight: 500,
      fontSize: "1.7rem",
      color: "#fff",
    },

    body1: {
      fontWeight: 400,
      color: "#fff",
      fontSize: "clamp(0.875rem, 1.1rem)",
      letterSpacing: "0%",
      lineHeight: "150%",
      fontFamily: "Manrope",
    },
    body2: {
      fontWeight: 500,
      color: "#fff",
      fontSize: "clamp(0.94rem, 1rem)",
      letterSpacing: "0%",
      lineHeight: "11px",
      fontFamily: "Manrope",
    },
  },
});

export default theme;
