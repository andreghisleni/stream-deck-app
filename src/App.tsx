import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import Home from './pages/Home';

const src: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default src;
