import axios from '@services/api';

export const ClassesService = {
  list: params => axios.get('/character/dnd-class-data', { params }),
};
