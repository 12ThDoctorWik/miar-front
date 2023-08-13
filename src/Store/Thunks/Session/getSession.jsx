import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '../../../Services/api';

const session = createAsyncThunk('session/get', async (payload) => {
  const response = await apiCall({
    method: 'POST',
    url: '/session/sessions',
    body: payload
  });

  console.log('response', response);

  const responseParsed = JSON.parse(response);

  if (!response || !responseParsed || !responseParsed.Token) {
    console.warn('Error on login', response); //todo make error better
  }

  // responseParsed.user = payload;
  // responseParsed.user = user;

  return responseParsed;
});

export { session };
