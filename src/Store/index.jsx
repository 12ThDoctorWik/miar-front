import { configureStore } from "@reduxjs/toolkit";
// import { authMiddleware } from "./Middlewares/AuthMiddleware";
import { authSlice } from "./Slices/AuthSlice";
import { sessionSlice } from "./Slices/SessionSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    session: sessionSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware)
});

export { store };

// export * from './Hooks/useThunk';
export * from './Thunks/Auth/login';
export * from './Thunks/Auth/fakelogin';
export * from './Thunks/Session/getSession';
