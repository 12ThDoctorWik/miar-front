import { createSlice } from '@reduxjs/toolkit';
import { fetchSessions } from "../Thunks/Session/fetchSessions";
import { addSession } from "../Thunks/Session/addSession";

const sessionSlice = createSlice({
  name: 'sessions',
  initialState: {
    sessions: null,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchSessions.fulfilled, (state, action) => {
      console.log('session.fulfilled', action);
      state.sessions = action.payload;
    });
    builder.addCase(fetchSessions.rejected, (state, action) => {
      console.log('session.rejected', action)
      state.error = action.error;
    });

    builder.addCase(addSession.fulfilled, (state, action) => {
      console.log('session.fulfilled', action.payload);
      // state.sessions = action.payload;
    });
    builder.addCase(addSession.rejected, (state, action) => {
      console.log('session.rejected', action)
      // state.error = action.error;
    });

  },
});

// export const selectSessions = (state) => state.session;
export { sessionSlice };
