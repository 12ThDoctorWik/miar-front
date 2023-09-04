import { useQuery } from '@tanstack/react-query';
import { CharactersService as service } from '../services';
import { QUERY_KEYS } from '../constants';

export const useCharactersStore = ({ skip, ...params } = {}) => {
  const { data, isLoading, isRefetching } = useQuery({
    queryKey: [...QUERY_KEYS.CHARACTERS, { ...params }],
    queryFn: () => service.list(params),
    enabled: !skip,
  });

  return {
    isLoading,
    isRefetching,
    characters: data || [],
  };
};
