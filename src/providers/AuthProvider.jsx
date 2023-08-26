import { createContext, useContext, useMemo } from 'react';
import { useAuthStore } from '@features/auth/hooks';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const {
    currentUser,
    isLoading,
    loginIsLoading,
    refreshIsLoading,
    login,
    logout,
  } = useAuthStore({ skip: false });

  const value = useMemo(
    () => ({
      currentUser,
      isLoading: isLoading || loginIsLoading || refreshIsLoading,
      login,
      logout,
    }),
    [currentUser, isLoading, loginIsLoading, refreshIsLoading, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
