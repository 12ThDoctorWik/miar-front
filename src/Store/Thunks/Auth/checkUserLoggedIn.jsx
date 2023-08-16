import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '../../../Services/api';

const checkUserLoggedIn = createAsyncThunk('auth/check-user', async () => {
  const refresh = localStorage.getItem('refreshToken');
  if (!refresh) {
    return { user: null };
  } else {
    const response = await apiCall({
      method: 'POST',
      url: '/auth/refresh-token',
      body: {
        token: refresh,
      },
    });
    const parsed = JSON.parse(response);

    return {
      accessToken: parsed.Token,
      refreshToken: parsed.RefreshToken,
      user: {
        name: parsed.Name,
        avatar: parsed.Avatar,
        role: parsed.Role,
      },
    };
  }
});

export { checkUserLoggedIn };
