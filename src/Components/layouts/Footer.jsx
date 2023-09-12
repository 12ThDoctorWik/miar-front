import { makeStyles } from '@mui/styles';
import { Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => {
  return {
    footer: {
      width: '100vw',
      backgroundColor: '#121316',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderTop: '1px solid #FFFFFF1F',
      padding: theme.spacing(3, 0),
    },
    navItem: {
      fontFamily: 'Inter',
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#FFFFFF99',
      textDecoration: 'none',
    },
  };
});

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        alignItems="center"
      >
        <NavLink to="/terms-of-use" className={classes.navItem}>
          Умови використання порталу
        </NavLink>
        <NavLink to="/privacy-policy" className={classes.navItem}>
          Політика конфіденційності
        </NavLink>
      </Stack>
    </footer>
  );
};
