import { ReactNode } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  colors: {
    primary: {
      xs: '#00ff2a',
      s: '#00e827',
      m: '#00ba1f',
      l: '#038218',
    },
    secondary: {
      xs: '#00f2fa',
      s: '#02d7de',
      m: '#02c0c7',
      l: '#009499',
    },
    special: {
      white: '#FFF',
      black: '#000'
    },
  },
  spacing: {
    '-xs': '-0.5rem',
    '-s':  '-1rem',
    '-m': '-2rem',
    '-l': '-3rem',
    '-halfL': '-1.5rem',
    '-xl': '-4rem',
    '-xxl': '-8rem',
    '-doubleL': '-6rem',
    xs: '0.5rem',
    s:  '1rem',
    m: '2rem',
    l: '3rem',
    halfL: '1.5rem',
    xl: '4rem',
    xxl: '8rem',
    doubleL: '6rem',
  }
};

export const Theme: React.FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);