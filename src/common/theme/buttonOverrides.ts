import { ButtonProps, Theme } from "@mui/material";

const defaultProps: Partial<ButtonProps> = {

}

const styleOverrides = (theme: Theme): any => ({
  root: {
    fontFamily: 'Open Sans, sans-serif',
    boxShadow: "none",
    borderRadius: 0,
    padding: 1,
    width: "135px",
    fontWeight: 600,
  }
})

const buttonOverrides = (theme: Theme) => {
  return {
    defaultProps,
    styleOverrides: styleOverrides(theme)
  }
}

export default buttonOverrides;