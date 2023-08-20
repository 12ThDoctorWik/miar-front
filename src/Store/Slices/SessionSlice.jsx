import { createSlice } from '@reduxjs/toolkit';
import { fetchSession } from '../Thunks/Session/fetchSession';

const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    session: null,
    sessionStatus: null,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchSession.fulfilled, (state, action) => {
      // console.log('fetchSession.fulfilled', action);
      state.session = action.payload;
    });
    builder.addCase(fetchSession.rejected, (state, action) => {
      console.log('fetchSession.rejected', action);
      state.error = action.error;
    });
  },
});

export { sessionSlice };
