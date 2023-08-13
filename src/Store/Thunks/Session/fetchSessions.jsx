import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '../../../Services/api';

const session = createAsyncThunk('session/fetch', async (payload) => {
  const response = await apiCall({
    method: 'POST',
    url: '/session/sessions',
    body: payload
  });

  console.log('response', response);

  return JSON.parse(response);
});

export { session };
