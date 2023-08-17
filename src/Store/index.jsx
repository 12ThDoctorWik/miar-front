import { configureStore } from '@reduxjs/toolkit';
// import { authMiddleware } from "./Middlewares/AuthMiddleware";
import { authSlice } from './Slices/AuthSlice';
import { sessionSlice } from './Slices/SessionSlice';
import { toastSlice } from './Slices/ToastSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    sessions: sessionSlice.reducer,
    toast: toastSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware)
});

export { store };

export * from './Thunks/Auth/login';
export * from './Thunks/Auth/fakelogin';
export * from './Thunks/Auth/checkUserLoggedIn';
export * from './Thunks/Session/fetchSessions';
export * from './Thunks/Session/addSession';
