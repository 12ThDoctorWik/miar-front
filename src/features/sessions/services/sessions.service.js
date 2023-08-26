import axios from '@services/api';

export const SessionsService = {
  get: id => axios.get(`/session/session?sessionId=${id}`),
  list: payload => axios.post('/session/sessions', payload),
  create: payload => axios.post('/session/create-session', payload),
  update: (id, payload) =>
    axios.post(`/session/edit-session?sessionId=${id}`, payload),
  register: id => axios.post('/session/join-session', { sessionId: id }),
  unregister: id => axios.get(`/session/leave-session?sessionId=${id}`),
};
