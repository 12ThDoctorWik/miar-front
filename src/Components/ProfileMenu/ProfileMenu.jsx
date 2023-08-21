import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Avatar, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDialog, bindDialogState } from '../../Hooks/use-dialog';
import { DialogWrapper } from '../DialogWrapper';
import { DiceConForm } from '../DiceConForm/DiceConForm';

export const ProfileMenu = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const { user } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const diceConDialogState = useDialog();

  const handleToggleMenu = event =>
    setAnchorEl(event ? event.currentTarget : null);

  const handleLogout = () => {
    handleToggleMenu();
    localStorage.clear();
    navigate(0);
  };

  const handleDiceCon = () => {
    handleToggleMenu();
    diceConDialogState.open();
  };

  return (
    <>
      <IconButton onClick={handleToggleMenu}>
        <Avatar alt={user?.name} src={user?.avatar} />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="profile-menu"
        open={!!anchorEl}
        onClose={() => handleToggleMenu()}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleDiceCon}>
          <Typography color="white">DiceCon</Typography>
        </MenuItem>{' '}
        <MenuItem onClick={handleLogout}>
          <Typography color="red">Вийти</Typography>
        </MenuItem>
      </Menu>
      <DialogWrapper
        {...bindDialogState(diceConDialogState)}
        maxWidth="md"
        fullWidth
        fullScreen={!isMd}
      >
        <DiceConForm />
      </DialogWrapper>
    </>
  );
};
