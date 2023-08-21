import { createTheme } from '@mui/material/styles';
import { buttonClasses } from '@mui/material';

export const createThemeObject = () => {
  let theme = createTheme({
    typography: {
      button: {
        textTransform: 'none',
      },
    },
    palette: {
      primary: {
        main: 'rgba(242, 222, 161, 1)',
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: 'contained',
        },
        styleOverrides: {
          contained: {
            borderRadius: 6,
          },
          containedPrimary: {
            color: 'rgba(18, 19, 22, 1)',
            ['&.' + buttonClasses.disabled]: {
              backgroundColor: 'rgba(242, 222, 161, 1)',
            },
          },
          containedSecondary: {
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            border: '1px solid rgba(177, 197, 255, 0.12)',
            color: 'rgba(177, 197, 255, 1)',
            '&:hover': {
              backgroundColor: 'inherit',
            },
          },
          sizeLarge: {
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '32px',
            padding: '10px 38px',
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundColor: 'rgba(30, 31, 34, 1)',
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            backgroundColor: 'rgba(30, 31, 34, 1)',
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
            },
          },
        },
      },
    },
  });

  return theme;
};
