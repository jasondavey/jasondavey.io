import { createTheme, ThemeOptions } from '@mui/material/styles';
import { deepPurple, purple, blue, teal } from '@mui/material/colors';

// Create theme options based on M3 Expressive principles
const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: purple[500],  // Vibrant purple for primary actions
      light: purple[300],
      dark: purple[700],
      contrastText: '#fff',
    },
    secondary: {
      main: teal[400],    // Teal adds vibrancy as a complementary color
      light: teal[200],
      dark: teal[600],
      contrastText: '#fff',
    },
    background: {
      default: '#FFFBFE',  // Subtle off-white for background
      paper: '#F6F5F8',    // Light purple tint for cards
    },
    text: {
      primary: '#1C1B1F',  // Near-black with slight purple undertone
      secondary: '#49454E', // Medium-dark purple-gray
    },
    error: {
      main: '#DC3545',
    },
    warning: {
      main: '#FF9800',
    },
    info: {
      main: blue[500],
    },
    success: {
      main: '#4CAF50',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Roboto Flex", "Roboto", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.75rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '0.01em',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      letterSpacing: '0.01em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          padding: '10px 24px',
          textTransform: 'none',
          fontWeight: 600,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #9c27b0 0%, #7B1FA2 100%)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '24px',
          overflow: 'hidden',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 28px rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backdropFilter: 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.8)',
          '&.MuiAppBar-colorPrimary': {
            backgroundColor: 'rgba(156, 39, 176, 0.03)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
        },
        elevation1: {
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        },
        elevation2: {
          boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.08)',
        },
        elevation3: {
          boxShadow: '0px 12px 36px rgba(0, 0, 0, 0.1)',
        },
        elevation4: {
          boxShadow: '0px 16px 42px rgba(0, 0, 0, 0.12)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          '&.MuiChip-colorPrimary': {
            background: 'linear-gradient(135deg, #9c27b0 0%, #7B1FA2 100%)',
          },
        },
      },
    },
  },
};

// Dark theme options
const darkThemeOptions: ThemeOptions = {
  ...lightThemeOptions,
  palette: {
    ...lightThemeOptions.palette,
    mode: 'dark',
    primary: {
      main: purple[300],
      light: purple[200],
      dark: purple[400],
    },
    secondary: {
      main: teal[300],
      light: teal[200],
      dark: teal[400],
    },
    background: {
      default: '#1C1B1F',
      paper: '#26252D',
    },
    text: {
      primary: '#E6E1E5',
      secondary: '#CAC4D0',
    },
  },
  components: {
    ...lightThemeOptions.components,
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backdropFilter: 'blur(10px)',
          background: 'rgba(28, 27, 31, 0.8)',
          '&.MuiAppBar-colorPrimary': {
            backgroundColor: 'rgba(216, 180, 254, 0.08)',
          },
        },
      },
    },
  },
};

// Create the theme with M3 Expressive design principles
const m3Theme = createTheme(lightThemeOptions);

export default m3Theme;

// Export both light and dark theme options for potential theme switching
export { lightThemeOptions, darkThemeOptions };

