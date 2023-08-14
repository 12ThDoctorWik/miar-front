import { createSlice } from '@reduxjs/toolkit';
import { login } from "../Thunks/Auth/login";
import { fakelogin } from "../Thunks/Auth/fakelogin";
import { checkUserLoggedIn } from "../Thunks/Auth/checkUserLoggedIn";
import { SLICE_STATUSES } from "./sliceStatus.const";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loginStatus: null,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload.accessToken) {
        localStorage.setItem('accessToken', action.payload.accessToken);
      }
      if (action.payload.refreshToken) {
        localStorage.setItem('refreshToken', action.payload.refreshToken);
      }
      state.user = action.payload.user;
    });
    builder.addCase(login.rejected, (state, action) => {
      console.warn('login.rejected', action)
      state.error = action.error;
      state.loginStatus = SLICE_STATUSES.ERROR;
    });
    builder.addCase(login.pending, (state, action) => {
      state.loginStatus = SLICE_STATUSES.LOADING;
    });
    builder.addCase(fakelogin.fulfilled, (state, action) => {
      if (action.payload.Token) {
        localStorage.setItem('accessToken', action.payload.Token);
      }
      if (action.payload.RefreshToken) {
        localStorage.setItem('refreshToken', action.payload.RefreshToken);
      }
      state.user = action.payload.user;
      state.loginStatus = SLICE_STATUSES.SUCCESS;
    });
    builder.addCase(checkUserLoggedIn.fulfilled, (state, action) => {
      if (action.payload.accessToken) {
        localStorage.setItem('accessToken', action.payload.accessToken);
      }
      if (action.payload.refreshToken) {
        localStorage.setItem('refreshToken', action.payload.refreshToken);
      }
      state.user = action.payload.user;
    });

    builder.addCase(checkUserLoggedIn.rejected, (state, action) => {
      state.user = null;
    });
  },
});

export { authSlice };
