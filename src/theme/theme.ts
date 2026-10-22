import { alpha, createTheme } from '@mui/material/styles'

const ink = '#121410'
const paper = '#1c211e'
const copper = '#e0a15a'
const copperLight = '#f2c891'
const copperDark = '#b87a2e'
const sage = '#5eae98'
const sageLight = '#9ed9c8'
const sageDark = '#3a8774'
const cream = '#f6f1e8'
const mist = '#c4bfb4'
const line = 'rgba(232, 214, 186, 0.16)'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: copper,
      light: copperLight,
      dark: copperDark,
      contrastText: '#1c140c',
    },
    secondary: {
      main: sage,
      light: sageLight,
      dark: sageDark,
      contrastText: '#10211c',
    },
    background: {
      default: ink,
      paper,
    },
    text: {
      primary: cream,
      secondary: mist,
    },
    divider: line,
  },
  typography: {
    fontFamily: 'Inter, "IBM Plex Sans", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '48px',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '32px',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '24px',
    },
    h4: {
      fontWeight: 600,
      fontSize: '18px',
    },
    body1: {
      fontSize: '16px',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '14px',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: ink,
          color: cream,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(ink, 0.9),
          backgroundImage: 'none',
          backdropFilter: 'blur(14px)',
          boxShadow: `0 1px 0 0 ${alpha(copper, 0.4)}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 18px',
        },
        outlined: {
          borderColor: alpha(copper, 0.55),
          '&:hover': {
            borderColor: copper,
            backgroundColor: alpha(copper, 0.1),
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: paper,
          backgroundImage: 'none',
          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.28)',
          borderRadius: '14px',
          border: `1px solid ${line}`,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: paper,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: paper,
          color: cream,
        },
      },
    },
  },
})

export default theme
