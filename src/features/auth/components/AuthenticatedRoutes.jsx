import { Outlet, Navigate } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import { useAuthContext } from '@providers/AuthProvider';

export const AuthenticatedRoutes = () => {
  const { currentUser, isLoading } = useAuthContext();

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" p={5}>
        <CircularProgress size={36} />
      </Box>
    );
  }

  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
