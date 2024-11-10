// src/theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#71C4D8',  // Primary color (Azura brand color)
    },
    secondary: {
      main: '#E48F31',  // Adjusted secondary color to complement primary
    },
    background: {
      default: '#F5F5F5', // Light background for the app
      paper: '#FFFFFF',   // Paper background color for contrast
    },
    text: {
      primary: '#333333',  // Dark gray for better readability on light backgrounds
      secondary: '#555555',  // Lighter gray for secondary text
    },
  },
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',  // Font family for a modern look
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1.125rem', // Adjusted for readability
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    button: {
      fontSize: '1.5rem', // Button text size starting from 3rem downscaled
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px',         // Rounded button style
          textTransform: 'none',        // Disable uppercase transformation
          color: '#FFFFFF',             // White text for visibility on primary buttons
          backgroundColor: '#71C4D8',   // Primary button color
          '&:hover': {
            backgroundColor: '#5DAFC4', // Slightly darker shade for hover effect
          },
        },
      },
    },
  },
});

export default theme;
