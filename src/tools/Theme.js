import { createTheme } from '@mui/material/styles';

const lighttheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#37474f',
        },
        secondary: {
          main: '#1de9b6',
        },
        background: {
          default: '#607d8b',
          paper: '#f5f3f4'
        },
        error: {
          main: '#e57373',
        },
        warning: {
          main: '#ffb74d',
        },
        info: {
          main: '#4fc3f7',
        },
        success: {
          main: '#81c784',
        },
        text: {
          primary: 'rgba(0,0,0,0.81)',
          secondary: 'rgba(0,0,0,0.54)',
          disabled: 'rgba(0,0,0,0.28)',
          contrast: '#f5f3f4',
          hint: 'rgba(0,0,0,0.28)'
        },
        divider: '#b1a7a6',
        input: {
            color: 'rgba(0,0,0,0.89)',
        },
    }
});

const darktheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#ba181b',
          light: '#e5383b',
          dark: '#660708',
          disabled: 'rgba(0,0,0,0.28)',
        },
        secondary: {
          main: '#161a1d',
        },
        background: {
          default: '#ffffff',
          paper: '#f5f3f4'
        },
        error: {
          main: '#e57373',
        },
        warning: {
          main: '#ffb74d',
        },
        info: {
          main: '#4fc3f7',
        },
        success: {
          main: '#81c784',
        },
        text: {
          primary: 'rgba(0,0,0,0.81)',
          secondary: 'rgba(0,0,0,0.54)',
          disabled: 'rgba(0,0,0,0.28)',
          contrast: '#f5f3f4',
          hint: 'rgba(0,0,0,0.28)'
        },
        divider: '#b1a7a6',
        input: {
            color: 'rgba(0,0,0,0.89)',
        },
    }
});

export {
  lighttheme,
  darktheme
} 