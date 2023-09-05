import { useQuery } from '@tanstack/react-query';
import { UserSessionsService as service } from '../services';
import { QUERY_KEYS } from '../constants';

export const useUserSessionsStore = ({ skip, ...params }) => {
  const { data, isLoading, isRefetching } = useQuery({
    queryKey: [...QUERY_KEYS.SESSIONS, { ...params }],
    queryFn: () => service.list(params),
    enabled: !skip,
  });

  return {
    isLoading,
    isRefetching,
    userSessions: data || [],
  };
};
