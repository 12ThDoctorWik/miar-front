import { configureStore } from '@reduxjs/toolkit';
// import { authMiddleware } from "./Middlewares/AuthMiddleware";
import { authSlice } from './Slices/AuthSlice';
import { sessionsSlice } from './Slices/SessionsSlice';
import { sessionSlice } from './Slices/SessionSlice';
import { toastSlice } from './Slices/ToastSlice';
import { registerSessionSlice } from './Slices/RegisterSessionSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    sessions: sessionsSlice.reducer,
    session: sessionSlice.reducer,
    registerSession: registerSessionSlice.reducer,
    toast: toastSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware)
});

export { store };

export * from './Thunks/Auth/login';
// export * from './Thunks/Auth/fakelogin';
export * from './Thunks/Auth/checkUserLoggedIn';
export * from './Thunks/Session/fetchSessions';
export * from './Thunks/Session/fetchSession';
export * from './Thunks/Session/addSession';
export * from './Thunks/Session/updateSession';
export * from './Thunks/Session/registerForSession';
export * from './Thunks/Session/unRegisterForSession';
