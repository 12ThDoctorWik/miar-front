import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { AuthService as service } from '../services';
import { QUERY_KEYS } from '../constants';

export const useAuthStore = ({ skip } = { skip: true }) => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: QUERY_KEYS.CURRENT_USER,
    queryFn: () => service.get(),
    enabled: !skip,
  });

  const { mutateAsync: login, isLoading: loginIsLoading } = useMutation({
    mutationFn: payload => service.login(payload),
    onSuccess: (_, data) => {
      console.log(data);
      localStorage.setItem('accessToken', data.Token);
      localStorage.setItem('refreshToken', data.RefreshToken);
      queryClient.setQueryData(QUERY_KEYS.CURRENT_USER, () => data);
    },
  });

  const { mutateAsync: refreshToken, isLoading: refreshTokenIsLoading } =
    useMutation({
      mutationFn: payload => service.refresh(payload),
      onSuccess: (_, data) => {
        console.log(data);
        localStorage.setItem('accessToken', data.Token);
        localStorage.setItem('refreshToken', data.RefreshToken);
        queryClient.setQueryData(QUERY_KEYS.CURRENT_USER, () => data);
      },
    });

  const logout = () => {
    queryClient.clear();
    localStorage.clear();
    window.location.reload();
  };
  return {
    isLoading,
    loginIsLoading,
    refreshTokenIsLoading,
    currentUser: data,
    login,
    refreshToken,
    logout,
  };
};
