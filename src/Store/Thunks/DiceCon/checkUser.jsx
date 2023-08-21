import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '../../../Services/api';

const checkDiceConUser = createAsyncThunk('dicecon/check-user', async () => {
  const response = await apiCall({
    method: 'POST',
    url: `/dicecon/check-user`,
    tokenized: true,
  });

  return response;
});

export { checkDiceConUser };
