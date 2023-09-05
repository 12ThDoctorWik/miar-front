import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useClassesStore } from './use-classes-store';
import { CharactersService as service } from '../services';
import { QUERY_KEYS } from '../constants';

export const useCharactersStore = ({ skip, ...params } = {}) => {
  const { classes } = useClassesStore();

  const { data, isLoading, isRefetching } = useQuery({
    queryKey: [...QUERY_KEYS.CHARACTERS, { ...params }],
    queryFn: () => service.list(params),
    enabled: !skip,
  });

  const characters = useMemo(() => {
    return (data || []).map(character => ({
      ...character,
      ClassDataModels: character.ClassDataModels.map(model => ({
        ...model,
        className: classes.find(({ Id }) => Id === model.ClassType)?.Name,
      })),
    }));
  }, [data, classes]);

  return {
    isLoading,
    isRefetching,
    characters,
    characterOptions: (data || []).map(({ Name, Id, ...rest }) => ({
      label: Name,
      value: Id,
      data: rest,
    })),
  };
};
