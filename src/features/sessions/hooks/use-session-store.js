import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { SessionsService as service } from '../services';
import { QUERY_KEYS } from '../constants';

export const useSessionStore = id => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: [...QUERY_KEYS.SESSION, { id: `${id}` }],
    queryFn: () => service.get(id),
    enabled: !!id,
  });

  const { mutateAsync: create, isLoading: isCreating } = useMutation({
    mutationFn: payload => service.create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.SESSIONS);
    },
  });

  const { mutateAsync: update, isLoading: isUpdating } = useMutation({
    mutationFn: ({ id, payload }) => service.update(id, payload),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries([...QUERY_KEYS.SESSION, { id: `${id}` }]);
    },
  });

  const { mutateAsync: register, isLoading: isRegistering } = useMutation({
    mutationFn: params => service.register(params),
    onSuccess: (_, { sessionId }) => {
      queryClient.invalidateQueries([
        ...QUERY_KEYS.SESSION,
        { id: `${sessionId}` },
      ]);
    },
  });

  const { mutateAsync: unregister, isLoading: isUnregistering } = useMutation({
    mutationFn: id => service.unregister(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries([...QUERY_KEYS.SESSION, { id: `${id}` }]);
    },
  });

  return {
    isLoading,
    isCreating,
    isUpdating,
    isRegistering,
    isUnregistering,
    session: data,
    create,
    update,
    register,
    unregister,
  };
};
