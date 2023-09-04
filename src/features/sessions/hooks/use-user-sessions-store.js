import { useQuery } from '@tanstack/react-query';
import { UserSessionsService as service } from '../services';
import { QUERY_KEYS } from '../constants';

export const useUserSessionsStore = ({ skip, type, ...params }) => {
  const { data, isLoading, isRefetching } = useQuery({
    queryKey: [...QUERY_KEYS.SESSIONS, { type, ...params }],
    queryFn: () => service.list(type),
    enabled: !skip,
  });

  return {
    isLoading,
    isRefetching,
    userSessions: data || [],
  };
};
