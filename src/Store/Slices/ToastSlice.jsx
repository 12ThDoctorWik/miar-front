import { createSlice } from '@reduxjs/toolkit';

const TOAST_LEVEL = {
  BLUE: 'info',
  YELLOW: 'warning',
  RED: 'error',
  GREEN: 'success',
};
const toastSlice = createSlice({
  name: 'toast',
  initialState: {
    open: null,
    message: null,
    severity: null,
  },
  reducers: {
    showMessage: {
      reducer: (state, action) => {
        state.open = true;
        state.message = action.payload.message;
        state.severity = action.payload.severity;
      },
      prepare: (message, severity) => ({ payload: {message, severity} }),
    },
    closeMessage: {
      reducer: (state, action) => {
        state.open = false;
        state.message = action.payload.message;
        state.severity = action.payload.severity;
      },
      prepare: (message, severity) => ({ payload: {message, severity} }),
    }
  },
  // extraReducers(builder) {
  //   builder.addCase(openToast.fulfilled, (state, action) => {
  //     state.open = action.payload.open;
  //     state.message = action.payload.message;
  //     state.severity = action.payload.severity;
  //   });
  // },
});

export { toastSlice, TOAST_LEVEL };
