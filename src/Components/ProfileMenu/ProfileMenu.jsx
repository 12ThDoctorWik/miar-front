import { useState } from 'react';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useAuthStore } from '@features/auth/hooks';
import { useAuthContext } from '@providers/AuthProvider';
import { Avatar } from '@components/common/Avatar';
import { NavLink } from 'react-router-dom';

export const ProfileMenu = () => {
  const { currentUser } = useAuthContext();
  const { logout } = useAuthStore();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleToggleMenu = event =>
    setAnchorEl(event ? event.currentTarget : null);

  const handleLogout = () => {
    handleToggleMenu();
    logout();
  };

  return (
    <>
      <IconButton onClick={handleToggleMenu}>
        <Avatar alt={currentUser?.Name} src={currentUser?.Avatar} />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="profile-menu"
        open={!!anchorEl}
        onClose={() => handleToggleMenu()}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          component={NavLink}
          to="/account"
          onClick={() => handleToggleMenu()}
        >
          <Typography color="white">Аккаунт</Typography>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <Typography color="red">Вийти</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};
