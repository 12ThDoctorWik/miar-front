import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '../../../Services/api';

const login = createAsyncThunk('auth/login', async (payload) => {
  console.log('payload', payload);
//  // "id": "1464575948",
//       // "first_name": "Denys",
//       // "last_name": "Serhieiev ✙",
//       // "username": "@tropen09",
//       // "photo_url": "string",
//       // "auth_date": "string",
//       // "hash": "string"
//
  const response = await apiCall({
    method: 'POST',
    url: '/auth/login',
    body:
      payload
  });

  console.log('response', response);
  return response.data;
});

export { login };
