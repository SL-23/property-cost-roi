import { TypographyProps, Theme } from "@mui/material";

const defaultProps: Partial<TypographyProps> = {
}

const styleOverrides = (theme: Theme): any => ({
  root: {
    fontFamily: 'Open Sans, sans-serif',
  },
  h3: {
    fontSize: 18,
    fontWeight: 600
  },
  h4: {
    fontSize: 16,
    fontWeight: 600
  },
})

const typographyOverrides = (theme: Theme) => {
  return {
    defaultProps,
    styleOverrides: styleOverrides(theme)
  }
}

export default typographyOverrides;