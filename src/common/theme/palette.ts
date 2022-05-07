import { Theme } from  "@mui/material";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    blue: ColorPartial
  }
  interface PaletteOptions {
    blue: ColorPartial
  }
}

const generateColors = (rgb: string) => {
  return {
    100: `rgba(${rgb}, 0.04)`
  }
}

const palette = (theme: Theme) => {
  //text

  // purple
  theme.palette.primary.main = "#6200EE";
  theme.palette.primary.light = "#BB86FC";
  theme.palette.primary.dark = "#3700B3";
  // green
  theme.palette.secondary.main = "#03DAC6";
  theme.palette.secondary.dark = "#018786";
  theme.palette.secondary.light = "#03DAC5";

}

export default palette;
