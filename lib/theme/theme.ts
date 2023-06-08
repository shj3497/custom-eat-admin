import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';
import fonts from '../fonts';

// breakpoints의 value를 추가해줘서 새롭게 정의
declare module '@mui/material' {
  interface BreakpointOverrides {
    xxl: true;
    mobile: true;
    tablet: true;
    desktop: true;
  }
}

const fontFamily = [
  `${fonts.Noto_Sans_KR.style.fontFamily}`,
  `${fonts.Montserrat.style.fontFamily}`,
  `${fonts.Roboto.style.fontFamily}`,
].join(',');

const breakpointValue = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
  mobile: 601,
  tablet: 1201,
  desktop: 1400,
};

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  breakpoints: {
    values: breakpointValue,
  },
  typography: {
    fontFamily,
  },
});

export default theme;
