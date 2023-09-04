import axios from '@services/api';

export const UserSessionsService = {
  list: type => axios.get(`/user/${type}-sessions`),
};
