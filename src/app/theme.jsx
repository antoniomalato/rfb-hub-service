'use client';
import { createTheme } from '@mui/material/styles';

import '@fontsource/inter';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, Outfit, Nunito',
  },
  palette: {
    primary: {
      main: '#0070F4',
    },
    secondary: {
      main: '#fff', 
    },
    background: {
      main: '#fff',
      secondary: '#0070F4'
    },
  },
  color: {
    main: '#0070F4',
  }
});

export default theme;