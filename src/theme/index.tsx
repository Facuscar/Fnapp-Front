'use client';

import React, { type ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: {
      xs: '#00ff2a',
      s: '#00e827',
      m: '#00ba1f',
      l: '#038218'
    },
    secondary: {
      xs: '#6303bd',
      s: '#4d0194',
      m: '#3b0072',
      l: '#240046'
    },
    gray: {
      xs: '#969696',
      s: '#686868',
      m: '#444444',
      l: '#292929'
    },
    special: {
      white: '#FFF',
      black: '#000',
      red: '#ff0000'
    }
  },
  spacing: {
    '-xs': '-0.5rem',
    '-s': '-1rem',
    '-m': '-2rem',
    '-l': '-3rem',
    '-halfL': '-1.5rem',
    '-xl': '-4rem',
    '-xxl': '-8rem',
    '-doubleL': '-6rem',
    xs: '0.5rem',
    s: '1rem',
    m: '2rem',
    l: '3rem',
    halfL: '1.5rem',
    xl: '4rem',
    xxl: '8rem',
    doubleL: '6rem'
  },
  fontWeight: {
    s: 300,
    m: 400,
    l: 700
  }
};

export const Theme: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
};
