import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '../../../Services/api';

const registerForSession = createAsyncThunk('sessions/register', async id => {
  const response = await apiCall({
    method: 'POST',
    url: `/session/join-session`,
    body: { sessionId: id },
    tokenized: true,
  });

  return response;
});

export { registerForSession };
