import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
  },
});

const apiCall = async ({ method, url, body = null, tokenized = false }) => {
  if (tokenized) {
    //get from local storage
    const authKey = localStorage.getItem('accessToken');
    if (!authKey) {
      throw new Error('No token provided');
    }
    client.defaults.headers.common['Authorization'] = 'Bearer ' + authKey;
  }

  try {
    const res = await client({
      method,
      url: process.env.REACT_APP_API_URI + url,
      data: body,
    });

    return res.data;
  } catch (error) {
    if (!!error.response && error.response.status === 401) {
      const refresh = localStorage.getItem('refreshToken');

      if (
        refresh === null ||
        refresh === undefined ||
        refresh === 'undefined'
      ) {
        console.warn('login first. no refresh token provided');
        return null;
      }
      const refResponse = await client({
        method: 'POST',
        url: process.env.REACT_APP_API_URI + '/auth/refresh-token',
        data: {
          token: refresh,
        },
      });

      const parsed = JSON.parse(refResponse.data);
      localStorage.setItem('accessToken', parsed.Token);
      localStorage.setItem('refreshToken', parsed.RefreshToken);
      // localStorage.setItem('role', parsed.Role);
      // localStorage.setItem('user', JSON.stringify({
      //   name:parsed.Name,
      //   avatar:parsed.Avatar,
      // }));

      client.defaults.headers.common['Authorization'] =
        'Bearer ' + parsed.Token;
      const res = await client({
        method,
        url: process.env.REACT_APP_API_URI + url,
        data: body,
      });

      return res.data;
    } else {
      console.warn(error);
      return Promise.reject(error.response || error.message);
    }
  }
};

export { apiCall };
