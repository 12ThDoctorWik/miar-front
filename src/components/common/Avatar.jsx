import { Avatar as MuiAvatar } from '@mui/material';
import defaultAvatar from '@assets/Images/defaultAvatar.webp';

export const Avatar = ({ children, ...delegated }) => {
  return (
    <MuiAvatar
      {...delegated}
      imgProps={{
        onLoad: ({ target }) => {
          if (target.naturalWidth === 1 && target.naturalHeight === 1) {
            target.src = defaultAvatar;
          }
        },
      }}
    >
      {children}
    </MuiAvatar>
  );
};
