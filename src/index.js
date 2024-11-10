// src/index.js or src/App.js

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import App from './App';
import reportWebvitals from "./reportWebVitals";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline /> {/* Ensures consistent baseline styles across browsers */}
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebvitals();