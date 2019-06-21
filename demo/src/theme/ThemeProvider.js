import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import getTheme from './getTheme';

import { useStore } from 'store';

const CustomThemeProvider = ({ children }) => {
  const { state: { themeMode } } = useStore();

  return <ThemeProvider theme={getTheme(themeMode)}>
    {children}
  </ThemeProvider>;
};

export default CustomThemeProvider;
