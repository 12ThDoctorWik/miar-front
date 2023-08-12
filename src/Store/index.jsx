import { configureStore } from "@reduxjs/toolkit";
// import { authMiddleware } from "./Middlewares/AuthMiddleware";
import { authSlice } from "./Slices/AuthSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware)
});

export { store };

// export * from './Hooks/useThunk';
export * from './Thunks/Auth/login';
