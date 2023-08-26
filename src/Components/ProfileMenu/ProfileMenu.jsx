import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Avatar, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useAuthStore } from '@features/auth/hooks';
import { useDialog, bindDialogState } from '../../Hooks/use-dialog';
import { DialogWrapper } from '../DialogWrapper';
import { DiceConForm } from '../DiceConForm/DiceConForm';
import { useAuthContext } from '@providers/AuthProvider';

export const ProfileMenu = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const { currentUser } = useAuthContext();
  const { logout } = useAuthStore();
  const [anchorEl, setAnchorEl] = useState(null);
  const diceConDialogState = useDialog();

  const handleToggleMenu = event =>
    setAnchorEl(event ? event.currentTarget : null);

  const handleLogout = () => {
    handleToggleMenu();
    logout();
  };

  const handleDiceCon = () => {
    handleToggleMenu();
    diceConDialogState.open();
  };

  return (
    <>
      <IconButton onClick={handleToggleMenu}>
        <Avatar alt={currentUser?.Name} src={currentUser?.Avatar}>
          currentUser?.Name.charAt(0)
        </Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="profile-menu"
        open={!!anchorEl}
        onClose={() => handleToggleMenu()}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {/* <MenuItem
          component={NavLink}
          to="/account"
          onClick={() => handleToggleMenu()}
        >
          <Typography color="white">Аккаунт</Typography>
        </MenuItem> */}
        <MenuItem onClick={handleDiceCon}>
          <Typography color="white">DiceCon</Typography>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <Typography color="red">Вийти</Typography>
        </MenuItem>
      </Menu>
      <DialogWrapper
        {...bindDialogState(diceConDialogState)}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '640px',
          },
        }}
        fullWidth
        fullScreen={!isMd}
      >
        <DiceConForm />
      </DialogWrapper>
    </>
  );
};
