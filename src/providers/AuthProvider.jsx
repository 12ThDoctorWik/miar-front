import { createContext, useContext, useMemo } from 'react';
import { useAuthStore } from '@features/auth/hooks';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const {
    currentUser,
    isLoading,
    loginIsLoading,
    refreshTokenIsLoading,
    login,
    logout,
  } = useAuthStore({ skip: false });

  const value = useMemo(
    () => ({
      currentUser,
      isLoading: isLoading || loginIsLoading || refreshTokenIsLoading,
      login,
      logout,
    }),
    [
      currentUser,
      isLoading,
      loginIsLoading,
      refreshTokenIsLoading,
      login,
      logout,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
