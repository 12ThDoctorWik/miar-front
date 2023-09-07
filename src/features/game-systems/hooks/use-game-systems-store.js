import { useQuery } from '@tanstack/react-query';
import { GameSystemsService as service } from '../services';
import { QUERY_KEYS } from '../constants';

export const useGameSystemsStore = ({ skip, ...params } = {}) => {
  const { data, isLoading } = useQuery({
    queryKey: [...QUERY_KEYS.GAME_SYSTEMS, { ...params }],
    queryFn: () => service.list(params),
    enabled: !skip,
  });

  return {
    isLoading,
    gameSystems: data || [],
    gameSystemOptions: (data || []).map(({ Name, Id }) => ({
      label: Name,
      value: Id,
    })),
  };
};
