import { configureStore } from '@reduxjs/toolkit';
import { toastSlice } from './Slices/ToastSlice';
import { diceConSlice } from './Slices/DiceConSlice';

const store = configureStore({
  reducer: {
    toast: toastSlice.reducer,
    diceCon: diceConSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware)
});

export { store };

export * from './Thunks/DiceCon/useToken';
export * from './Thunks/DiceCon/checkUser';
