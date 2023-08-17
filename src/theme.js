import { createTheme } from '@mui/material/styles';

export const createThemeObject = () => {
  let theme = createTheme({
    typography: {
      button: {
        textTransform: 'none',
      },
    },
  });

  return theme;
};
