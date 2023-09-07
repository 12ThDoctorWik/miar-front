import { Outlet, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { LoadingIndicator } from '@components/ui/LoadingIndicator';
import { useAuthContext } from '@providers/AuthProvider';

export const AuthenticatedRoutes = () => {
  const { currentUser, isLoading } = useAuthContext();

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" p={5}>
        <LoadingIndicator size={108} />
      </Box>
    );
  }

  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
