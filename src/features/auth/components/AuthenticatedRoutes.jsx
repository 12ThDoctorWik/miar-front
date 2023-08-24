import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const AuthenticatedRoutes = () => {
  const { user } = useSelector(state => state.auth);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
