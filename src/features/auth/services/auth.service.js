import axios from '@services/api';

export const AuthService = {
  get: () => axios.get('/user/auth-data'),
  refresh: payload => axios.post('/auth/refresh-token', payload),
  login: async payload => axios.post('/auth/login', payload),
};
