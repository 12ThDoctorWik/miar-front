import { createSlice } from '@reduxjs/toolkit';
import { registerForSession } from '../Thunks/Session/registerForSession';
import { unRegisterForSession } from '../Thunks/Session/unRegisterForSession';
import { SLICE_STATUSES } from './sliceStatus.const';

const registerSessionSlice = createSlice({
  name: 'registerSession',
  initialState: {
    session: null,
    status: null,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(registerForSession.fulfilled, (state, action) => {
      state.status = SLICE_STATUSES.SUCCESS;
    });
    builder.addCase(registerForSession.pending, (state, action) => {
      state.status = SLICE_STATUSES.LOADING;
    });
    builder.addCase(registerForSession.rejected, (state, action) => {
      state.status = SLICE_STATUSES.ERROR;
    });
    builder.addCase(unRegisterForSession.fulfilled, (state, action) => {
      state.status = SLICE_STATUSES.SUCCESS;
    });
    builder.addCase(unRegisterForSession.pending, (state, action) => {
      state.status = SLICE_STATUSES.LOADING;
    });
    builder.addCase(unRegisterForSession.rejected, (state, action) => {
      state.status = SLICE_STATUSES.ERROR;
    });
  },
});

export { registerSessionSlice };
