import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

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
  '"Noto Sans KR"',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
].join(',');

const breakpointValue = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
  mobile: 641,
  tablet: 1025,
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
