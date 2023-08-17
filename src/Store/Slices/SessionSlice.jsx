import { createSlice } from '@reduxjs/toolkit';
import { fetchSessions } from '../Thunks/Session/fetchSessions';
import { addSession } from '../Thunks/Session/addSession';
import { SLICE_STATUSES } from './sliceStatus.const';

const sessionSlice = createSlice({
  name: 'sessions',
  initialState: {
    sessions: null,
    sessionStatus: null,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchSessions.fulfilled, (state, action) => {
      console.log('session.fulfilled', action);
      state.sessions = action.payload;
    });
    builder.addCase(fetchSessions.rejected, (state, action) => {
      console.log('session.rejected', action);
      state.error = action.error;
    });

    builder.addCase(addSession.pending, (state, action) => {
      state.sessionStatus = SLICE_STATUSES.LOADING;
    });
    builder.addCase(addSession.fulfilled, (state, action) => {
      state.sessionStatus = SLICE_STATUSES.SUCCESS;
    });
    builder.addCase(addSession.rejected, (state, action) => {
      state.sessionStatus = SLICE_STATUSES.ERROR;
    });
  },
});

export { sessionSlice };
