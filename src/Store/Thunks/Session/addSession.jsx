import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '../../../Services/api';

const addSession = createAsyncThunk('session/add', async (payload) => {
  const response = await apiCall({
    method: 'POST',
    url: '/session/сreate-session',
    body: payload
  });

  // console.log('sessions.response', response);

  return JSON.parse(response);
});

export { addSession };
