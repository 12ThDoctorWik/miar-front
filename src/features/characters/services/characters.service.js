import axios from '@services/api';

export const CharactersService = {
  list: params => axios.get('/character/my-characters', { params }),
  create: payload => axios.post('/character/create-dnd-character', payload),
};
