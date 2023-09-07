import axios from '@services/api';

export const SessionsService = {
  get: id => axios.get(`/session/session?sessionId=${id}`),
  list: params => axios.get('/session/sessions', { params }),
  create: payload => axios.post('/session/create-session', payload),
  update: (id, payload) =>
    axios.post(`/session/edit-session?sessionId=${id}`, payload),
  register: payload => axios.post('/session/join-session', payload),
  unregister: id => axios.get(`/session/leave-session?sessionId=${id}`),
};
