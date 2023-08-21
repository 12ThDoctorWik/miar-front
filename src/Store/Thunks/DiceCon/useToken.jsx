import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '../../../Services/api';

const useDiceConToken = createAsyncThunk('dicecon/use-token', async payload => {
  const response = await apiCall({
    method: 'POST',
    url: `/dicecon/use-token`,
    body: payload,
    tokenized: true,
  });

  return response;
});

export { useDiceConToken };
