import { apiCall } from '@services/api';

export const SessionsService = {
  list: async payload => {
    const response = await apiCall({
      method: 'POST',
      url: '/session/sessions',
      body: payload,
    });

    return response ? JSON.parse(response) : [];
  },
};
