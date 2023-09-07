import axios from '@services/api';

export const GameSystemsService = {
  list: params => axios.get('/gamesystem/system-names', { params }),
};
