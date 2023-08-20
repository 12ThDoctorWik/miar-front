import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '../../../Services/api';

const unRegisterForSession = createAsyncThunk(
  'sessions/unregister',
  async id => {
    const response = await apiCall({
      method: 'GET',
      url: `/session/leave-session?sessionId=${id}`,
      tokenized: true,
    });

    return response;
  }
);

export { unRegisterForSession };
