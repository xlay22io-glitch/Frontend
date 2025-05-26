import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
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
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", "Arial", sans-serif',
  },
});

export default theme;
