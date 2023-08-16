import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '../../../Services/api';

const login = createAsyncThunk('auth/login', async payload => {
  const response = await apiCall({
    method: 'POST',
    url: '/auth/login',
    body: payload,
  });

  const responseParsed = JSON.parse(response);

  if (!response || !responseParsed || !responseParsed.Token) {
    console.warn('Error on login', response); //todo make error better
  }

  return {
    accessToken: responseParsed.Token,
    refreshToken: responseParsed.RefreshToken,
    user: {
      name: responseParsed.Name,
      avatar: responseParsed.Avatar,
      role: responseParsed.Role,
    },
  };
});

export { login };
