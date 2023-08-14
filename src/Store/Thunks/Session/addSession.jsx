import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '../../../Services/api';

const addSession = createAsyncThunk('session/add', async (payload) => {
  const response = await apiCall({
    method: 'POST',
    url: '/session/create-session',
    body: payload
  });

  console.log('sessions.response', response);

  return response;
});

export { addSession };
