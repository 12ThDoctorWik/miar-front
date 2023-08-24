import { useEffect, Fragment, useState } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import {
  SwipeableDrawer,
  IconButton,
  Stack,
  Typography,
  Dialog,
  Box,
} from '@mui/material';
import { useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ProfileMenu } from '@components/ProfileMenu/ProfileMenu';
import PopupAuth from '@modules/PopupAuth/PopupAuth.js';
import { checkUserLoggedIn } from '@store';
import { useThunk } from '@hooks/useThunk';

const NAV_ENTITIES = [
  {
    path: '/',
    label: 'Головна',
    disabled: true,
  },
  {
    path: '/calendar',
    label: 'Розклад',
  },
  {
    path: '/todo',
    label: 'Магазин',
    disabled: true,
  },
  {
    path: '/todo',
    label: 'Механіки гри',
    disabled: true,
  },
  {
    path: '/todo',
    label: 'Клуб і Майстри',
    disabled: true,
  },
];

export const Header = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [authIsOpen, setAuthIsOpen] = useState(false);
  const [checkUser, checkUserError] = useThunk(checkUserLoggedIn);
  const { user } = useSelector(state => state.auth);

  const handleAuth = () => setAuthIsOpen(true);

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  return (
    <nav className="header container">
      {isMd || (
        <>
          <IconButton onClick={() => setDrawerIsOpen(true)}>
            <MenuIcon className="MenuIcon" />
          </IconButton>
          <SwipeableDrawer
            anchor="left"
            open={drawerIsOpen}
            classes={{ paper: 'drawer' }}
            onOpen={() => setDrawerIsOpen(true)}
            onClose={() => setDrawerIsOpen(false)}
          >
            <div className="drawer__content">
              <IconButton
                classes={{ root: 'drawer__close' }}
                onClick={() => setDrawerIsOpen(false)}
              >
                <CloseIcon />
              </IconButton>
              <Stack spacing={2} alignItems="center">
                {NAV_ENTITIES.map((entity, index) => (
                  <Fragment key={index}>
                    {entity.disabled ? (
                      <div className="header__link">{entity.label}</div>
                    ) : (
                      <NavLink
                        to={entity.path}
                        onClick={() => setDrawerIsOpen(false)}
                        className="header__link"
                      >
                        {entity.label}
                      </NavLink>
                    )}
                  </Fragment>
                ))}
              </Stack>
            </div>
          </SwipeableDrawer>
        </>
      )}
      <div className="header__logo">MIAR</div>
      {isMd && (
        <div className="header__nav">
          {NAV_ENTITIES.map((entity, index) => (
            <Fragment key={index}>
              {entity.disabled ? (
                <div className="header__link">{entity.label}</div>
              ) : (
                <NavLink to={entity.path} className="header__link">
                  {entity.label}
                </NavLink>
              )}
            </Fragment>
          ))}
        </div>
      )}
      {user ? (
        <div className="header__user">
          {isMd && (
            <Box display="flex" flexDirection="column">
              <Typography variant="body1" color="inherit">
                Привіт, {user?.name || 'unknown'}!
              </Typography>
              <Typography variant="caption" color="inherit">
                {user?.role}
              </Typography>
            </Box>
          )}
          <ProfileMenu />
        </div>
      ) : (
        <>
          <div className="header__login" onClick={handleAuth}>
            Увійти
          </div>
          <Dialog
            onClose={() => setAuthIsOpen(false)}
            open={authIsOpen}
            maxWidth="lg"
          >
            <PopupAuth onClose={() => setAuthIsOpen(false)} />
          </Dialog>
        </>
      )}
    </nav>
  );
};

export default Header;
