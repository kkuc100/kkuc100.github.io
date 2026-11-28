import { alpha, createTheme } from '@mui/material/styles'

const ink = '#0a1120'
const paper = '#121b2e'
const blue = '#5aa8ff'
const blueLight = '#9ccbff'
const blueDark = '#2f7fe0'
const teal = '#2dd4bf'
const tealLight = '#7eeadb'
const tealDark = '#14a394'
const snow = '#e8eef7'
const slate = '#a5b1c4'
const line = 'rgba(148, 170, 210, 0.18)'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue,
      light: blueLight,
      dark: blueDark,
      contrastText: '#06101f',
    },
    secondary: {
      main: teal,
      light: tealLight,
      dark: tealDark,
      contrastText: '#04201c',
    },
    background: {
      default: ink,
      paper,
    },
    text: {
      primary: snow,
      secondary: slate,
    },
    divider: line,
  },
  typography: {
    fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
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
          color: snow,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(ink, 0.9),
          backgroundImage: 'none',
          backdropFilter: 'blur(14px)',
          boxShadow: `0 1px 0 0 ${alpha(blue, 0.4)}`,
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
          borderColor: alpha(blue, 0.55),
          '&:hover': {
            borderColor: blue,
            backgroundColor: alpha(blue, 0.1),
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
          color: snow,
        },
      },
    },
  },
})

export default theme
