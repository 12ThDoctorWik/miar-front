import axios from '@services/api';

export const UserSessionsService = {
  list: params => axios.get('/user/sessions', { params }),
};
