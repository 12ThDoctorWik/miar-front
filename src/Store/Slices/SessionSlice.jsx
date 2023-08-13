import { createSlice } from '@reduxjs/toolkit';
import { session } from "../Thunks/Session/fetchSessions";

const sessionSlice = createSlice({
  name: 'sessions',
  initialState: {
    sessions: null,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(session.fulfilled, (state, action) => {
      console.log('session.fulfilled', action);
      state.sessions = action.payload;
    });
    builder.addCase(session.rejected, (state, action) => {
      console.log('session.rejected', action)
      state.error = action.error;
    });

  },
});

export const selectSessions = (state) => state.session;
export { sessionSlice };
