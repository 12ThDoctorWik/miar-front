import { createSlice } from '@reduxjs/toolkit';
import { login } from "../Thunks/Auth/login";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    refreshToken: null,
    accessToken: null,
    data: null,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      console.log('login.fulfilled', action.payload);
      state.data = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log('login.rejected', action.error)
      state.error = action.error;
    });
  },
});

export { authSlice };
