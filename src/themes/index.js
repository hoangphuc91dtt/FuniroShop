import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#b8822f'
    },
    secondary: {
      main: '#FAF3EA'
    },
    white: {
      main: '#FFFFFF'
    },
    gray: {
      main: '#F4F5F7'
    },
    black: {
      main: '#000000'
    },
    bee: {
      main: '#FCF8F3'
    }
  },
  typography: {
    h1: {
      fontSize: 42,
      fontWeight: 700,
      lineHeight: '58px'
    },
    h2: {
      fontSize: 38,
      fontWeight: 600,
      lineHeight: '30px'
    },
    h3: {
      fontSize: 32,
      fontWeight: 500,
      lineHeight: '30px'
    },
    h4: {
      fontSize: 26,
      fontWeight: 400,
      lineHeight: '22px'
    },
    h5: {
      fontSize: 18,
      fontWeight: 300,
      lineHeight: '22px'
    },
    body1: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: '22px'
    },
    body2: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: '24px'
    }
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          cursor: 'pointer'
        }
      }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined', color: 'white' },
          style: {
            padding: '12px 24px',
            border: '1px solid inherit',
            textTransform: 'capitalize',
            whiteSpace: 'nowrap'
          }
        }
      ],
      styleOverrides: {
        root: {}
      }
    },
    MuiTextField: {
      variants: [],
      styleOverrides: {
        root: {}
      }
    },
    MuiSvgIcon: {
      variants: []
    },
    MuiIconButton: {
      variants: [],
      styleOverrides: {
        root: {}
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {}
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {}
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {}
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {}
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {}
      }
    }
  }
});

export const APP_COLORS = theme.palette;
