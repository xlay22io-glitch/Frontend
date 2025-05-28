import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      smoothGray: string;
      mediumGray: string;
    };
  }

  interface PaletteOptions {
    customColors?: {
      smoothGray?: string;
      mediumGray?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    customColors: {
      smoothGray: '#1A1E20',
      mediumGray: '#A5A5A5',
    },
    primary: {
      main: '#BAFD02',
    },
    bgBlack: {
      main: '#1A1E20',
    },
    black: {
      main: '#000000',
      dark: '#2E2F32',
      medium: '#373A40',
    },
    gray: {
      main: '#9E9E9E',
      light: '#F6F6F6',
    },
    background: {
      default: '#111111',
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", "Arial", sans-serif',
  },
});

export default theme;
