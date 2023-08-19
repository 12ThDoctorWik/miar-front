import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '../../../Services/api';

const fetchSession = createAsyncThunk('sessions/getById', async id => {
  const response = await apiCall({
    method: 'GET',
    url: `/session/session?sessionId=${id}`,
    tokenized: true,
  });

  return JSON.parse(response);
});

export { fetchSession };
