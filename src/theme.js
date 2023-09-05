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
      mode: 'dark',
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
            color: '#121316',
            ['&.' + buttonClasses.disabled]: {
              backgroundColor: 'rgba(242, 222, 161, 1)',
              color: '#fff',
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
            width: '100%',
          },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            padding: '16px 24px',
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
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            backgroundColor: '#FFFFFF0D',
          },
        },
      },
    },
  });

  return theme;
};
