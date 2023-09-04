import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useLocalStorage } from '@hooks/use-local-storage';
import { AuthService as service } from '../services';
import { QUERY_KEYS } from '../constants';

export const useAuthStore = ({ skip } = { skip: true }) => {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken');
  const [refreshToken, setRefreshToken] = useLocalStorage('refreshToken');
  const queryClient = useQueryClient();

  const { data, isLoading, fetchStatus } = useQuery({
    queryKey: QUERY_KEYS.CURRENT_USER,
    queryFn: () => service.get(),
    enabled: !skip && !!accessToken,
    onSuccess: data => {
      setAccessToken(data.Token);
      setRefreshToken(data.RefreshToken);
    },
  });

  const { mutateAsync: login, isLoading: loginIsLoading } = useMutation({
    mutationFn: payload => service.login(payload),
    onSuccess: data => {
      setAccessToken(data.Token);
      setRefreshToken(data.RefreshToken);
      queryClient.setQueryData(QUERY_KEYS.CURRENT_USER, () => data);
    },
  });

  const { mutateAsync: refresh, isLoading: refreshIsLoading } = useMutation({
    mutationFn: payload => service.refresh(payload),
    onSuccess: data => {
      setAccessToken(data.Token);
      setRefreshToken(data.RefreshToken);
      queryClient.setQueryData(QUERY_KEYS.CURRENT_USER, () => data);
    },
    enabled: !!refreshToken,
  });

  const logout = () => {
    queryClient.clear();
    localStorage.clear();
    window.location.reload();
  };
  return {
    isLoading: isLoading && fetchStatus !== 'idle',
    loginIsLoading,
    refreshIsLoading,
    currentUser: data,
    login,
    refresh,
    logout,
  };
};
