import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0d3b66',
      light: '#1b5f99',
      dark: '#07243e',
    },
    secondary: {
      main: '#f4a261',
    },
    background: {
      default: '#f6f8fb',
      paper: '#ffffff',
    },
    text: {
      primary: '#15202b',
      secondary: '#52606d',
    },
    success: {
      main: '#2a9d8f',
    },
  },
  typography: {
    fontFamily: '"Manrope", sans-serif',
    h1: {
      fontFamily: '"Barlow", sans-serif',
      fontWeight: 800,
      lineHeight: 1.05,
    },
    h2: {
      fontFamily: '"Barlow", sans-serif',
      fontWeight: 800,
      lineHeight: 1.1,
    },
    h3: {
      fontFamily: '"Barlow", sans-serif',
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 18,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 22,
          paddingBlock: 10,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: '0 18px 45px rgba(13, 59, 102, 0.08)',
        },
      },
    },
  },
});
