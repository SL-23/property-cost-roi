import { CssBaselineProps, Theme } from "@mui/material";
import Light from "../../resources/fonts/OpenSans-Light.ttf";
import Regular from "../../resources/fonts/OpenSans-Regular.ttf";
import Medium from "../../resources/fonts/OpenSans-Medium.ttf";
import Bold from "../../resources/fonts/OpenSans-Bold.ttf";

const defaultProps: Partial<CssBaselineProps> = {

}

const stylesOverrides = (theme: Theme): any => `
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-display: swap;
    font-weight: 300;
    src: local('OpenSans'), local('OpenSans-Light'), url(${Light}) format('openSans');
    unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-display: swap;
    font-weight: 500;
    src: local('OpenSans'), local('OpenSans-Regular'), url(${Regular}) format('openSans');
    unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-display: swap;
    font-weight: 600;
    src: local('OpenSans'), local('OpenSans-Medium'), url(${Medium}) format('openSans');
    unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-display: swap;
    font-weight: 700;
    src: local('OpenSans'), local('OpenSans-Bold'), url(${Bold}) format('openSans');
    unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
  }
`;
console.log(Light);

const cssBaselineOverrides = (theme: Theme) => {
  return {
    defaultProps,
    stylesOverrides: stylesOverrides(theme)
  }
}

export default cssBaselineOverrides;