import * as React from 'react';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 0,
  width: 18,
  height: 18,
  backgroundColor: 'transparent',
  border: '2px solid rgba(255, 255, 255, 0.6)',
  boxSizing: 'border-box',
  'input:hover ~ &': {
    cursor: "pointer",
  },

  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: 'rgba(177, 197, 255, 1)',
  '&:before': {
    display: 'block',
    width: 18,
    height: 18,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  border: 'none',
});

// Inspired by blueprintjs
function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{
        '&:hover': { bgcolor: 'transparent' },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}

export default function CustomizedCheckbox() {
  return (
    <BpCheckbox />
  );
}