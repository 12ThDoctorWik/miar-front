import { useNavigate } from 'react-router-dom';

export const useAuthStore = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate(0);
  };
  return {
    logout,
  };
};
