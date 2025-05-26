import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    bgBlack: Palette['main'];
    gray: Palette['main'];
    black: Palette['main'];
  }
  interface PaletteOptions {
    bgBlack?: PaletteOptions['main'];
    gray?: PaletteOptions['main'];
    black?: PaletteOptions['main'];
  }
}
export {};
