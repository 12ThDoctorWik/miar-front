import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '../../../Services/api';

const fetchSessions = createAsyncThunk('session/fetch', async payload => {
  const response = await apiCall({
    method: 'POST',
    url: '/session/sessions',
    body: payload,
  });

  return JSON.parse(response);
});

export { fetchSessions };
