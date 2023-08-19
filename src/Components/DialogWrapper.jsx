import { cloneElement, forwardRef } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Transition = forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const DialogWrapper = ({
  children,
  open,
  props,
  onClose,
  requiresClosureConfirmation,
  ...delegated
}) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      {...delegated}
      open={open}
      onClose={onClose}
      fullScreen={isSm}
      TransitionComponent={Transition}
    >
      {cloneElement(children, {
        ...props,
        onClose,
      })}
    </Dialog>
  );
};
