import { useQuery } from '@tanstack/react-query';
import { ClassesService as service } from '../services';
import { QUERY_KEYS } from '../constants';

export const useClassesStore = ({ skip, ...params } = {}) => {
  const { data, isLoading } = useQuery({
    queryKey: [...QUERY_KEYS.CLASSES, { ...params }],
    queryFn: () => service.list(params),
    enabled: !skip,
  });

  return {
    isLoading,
    classes: data || [],
    classOptions: (data || []).map(({ Name, Id }) => ({
      value: Id,
      label: Name,
    })),
  };
};
