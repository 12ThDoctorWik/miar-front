import { createSlice } from '@reduxjs/toolkit';
import { login } from "../Thunks/Auth/login";
import { fakelogin } from "../Thunks/Auth/fakelogin";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log('login.rejected', action)
      state.error = action.error;
    });
    builder.addCase(fakelogin.fulfilled, (state, action) => {
      if (action.payload.Token) {
        localStorage.setItem('accessToken', action.payload.Token);
      }
      if (action.payload.RefreshToken) {
        localStorage.setItem('refreshToken', action.payload.RefreshToken);
      }
      state.user = action.payload.user;
      console.log()
    });
    builder.addCase(fakelogin.rejected, (state, action) => {
      console.warn('fakelogin.rejected', action)
      state.error = action.error;
    });
  },
});

export { authSlice };
