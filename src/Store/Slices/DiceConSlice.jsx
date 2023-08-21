import { createSlice } from '@reduxjs/toolkit';
import { checkDiceConUser } from '../Thunks/DiceCon/checkUser';
import { useDiceConToken } from '../Thunks/DiceCon/useToken';
import { SLICE_STATUSES } from './sliceStatus.const';

const diceConSlice = createSlice({
  name: 'dicecon',
  initialState: {
    checkUserStatus: null,
    useTokenStatus: null,
    isRegistered: false,
  },
  extraReducers(builder) {
    builder.addCase(checkDiceConUser.pending, (state, action) => {
      state.checkUserStatus = SLICE_STATUSES.LOADING;
    });
    builder.addCase(checkDiceConUser.fulfilled, (state, action) => {
      state.checkUserStatus = SLICE_STATUSES.SUCCESS;
      state.isRegistered = action.payload.IsRegistered;
      console.log(action.payload.IsRegistered);
    });
    builder.addCase(checkDiceConUser.rejected, (state, action) => {
      state.checkUserStatus = SLICE_STATUSES.ERROR;
    });

    builder.addCase(useDiceConToken.pending, (state, action) => {
      state.useTokenStatus = SLICE_STATUSES.LOADING;
    });
    builder.addCase(useDiceConToken.fulfilled, (state, action) => {
      state.useTokenStatus = SLICE_STATUSES.SUCCESS;
    });
    builder.addCase(useDiceConToken.rejected, (state, action) => {
      state.useTokenStatus = SLICE_STATUSES.ERROR;
    });
  },
});

export { diceConSlice };
