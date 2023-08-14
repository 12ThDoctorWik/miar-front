import React from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { toastSlice } from "../../Store/Slices/ToastSlice";
import Slide from '@mui/material/Slide';

const CLOSE_ON_CLICK = "clickaway";

export const Toast = () => {
  const dispatch = useDispatch();
  const { open, message, severity } = useSelector(state => state.toast);

  const handleClose = (event, reason) => {
    if (reason === CLOSE_ON_CLICK) {
      return;
    }
    dispatch(toastSlice.actions.closeMessage(message, severity));
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "left"
      }}
      autoHideDuration={3000}
      open={open}
      onClose={handleClose}
      TransitionComponent={Slide}
    >
      <Alert
        variant="filled"
        onClose={handleClose}
        severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};