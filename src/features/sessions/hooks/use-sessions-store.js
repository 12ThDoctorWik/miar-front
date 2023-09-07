import { useQuery } from '@tanstack/react-query';
import { parse } from 'date-fns';
import { SessionsService as service } from '../services';
import { QUERY_KEYS } from '../constants';

export const useSessionsStore = ({ skip, ...params }) => {
  const { data, isLoading, isRefetching } = useQuery({
    queryKey: [...QUERY_KEYS.SESSIONS, { ...params }],
    queryFn: () => service.list(params),
    enabled: !skip,
  });

  return {
    isLoading,
    isRefetching,
    sessions: (data || []).map(session => ({
      ...session,
      StartTime: parse(session.StartTime, 'dd-MM HH:mm', new Date()),
    })),
  };
};
