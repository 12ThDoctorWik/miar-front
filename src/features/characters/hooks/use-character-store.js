import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CharactersService as service } from '../services';
import { QUERY_KEYS } from '../constants';

export const useCharacterStore = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: create, isLoading: isCreating } = useMutation({
    mutationFn: payload => service.create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.CHARACTERS);
    },
  });

  return {
    isCreating,
    create,
  };
};
