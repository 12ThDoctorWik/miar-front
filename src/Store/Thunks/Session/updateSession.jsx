import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '../../../Services/api';

const updateSession = createAsyncThunk(
  'session/update',
  async ({ id, payload }) => {
    const response = await apiCall({
      method: 'POST',
      url: `/session/edit-session?sessionId=${id}`,
      body: payload,
      tokenized: true,
    });
    return response;
  }
);

export { updateSession };
