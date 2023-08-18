import { useEffect, Fragment, useState } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import {
  SwipeableDrawer,
  IconButton,
  Stack,
  Typography,
  Dialog,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import PopupAuth from '../PopupAuth/PopupAuth.js';
import { useSelector } from 'react-redux';
import { checkUserLoggedIn } from '../../Store';
import { useThunk } from '../../Hooks/useThunk';

const NAV_ENTITIES = [
  {
    path: '/',
    label: 'Головна',
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
      {!user && (
        <div className="header__login" onClick={handleAuth}>
          Увійти
        </div>
      )}
      {user && (
        <div className="header__user">
          {isMd && (
            <>
              <Typography variant="body1" color="inherit">
                Привіт, {user.name || 'unknown'}!
              </Typography>
              <Typography variant="caption" color="inherit">
                {user.role}
              </Typography>
            </>
          )}
          <img src={user.avatar} className="header__user-avatar" />
        </div>
      )}
      <Dialog
        onClose={() => setAuthIsOpen(false)}
        open={authIsOpen}
        maxWidth="lg"
      >
        <PopupAuth onClose={() => setAuthIsOpen(false)} />
      </Dialog>
    </nav>
  );
};

export default Header;
