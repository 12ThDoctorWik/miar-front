import { createSlice } from '@reduxjs/toolkit';
import { session } from "../Thunks/Session/getSession";

const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    session: null,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(session.fulfilled, (state, action) => {
      console.log('action', action);
      state.session = action.payload;

    });
    builder.addCase(session.rejected, (state, action) => {
      console.log('login.rejected', action)
      state.error = action.error;
    });

  },
});

export { sessionSlice };
