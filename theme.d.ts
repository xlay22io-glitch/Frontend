import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    gray: Palette['main'];
    black: Palette['main'];
  }
  interface PaletteOptions {
    gray?: PaletteOptions['main'];
    black?: PaletteOptions['main'];
  }
}
export {};
