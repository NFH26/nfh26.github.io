import React from 'react';
import ReactDOM from 'react-dom';
import CVPage from './CVPage'; 
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CVPage />
    </ThemeProvider>
  </React.StrictMode>
);
