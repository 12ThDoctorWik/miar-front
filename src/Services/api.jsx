import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
  },
});

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    try {
      return JSON.parse(response?.data || '');
    } catch (e) {
      return response?.data;
    }
  },
  error => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url.includes('refresh-token')
    ) {
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');
      return axios
        .post('/auth/refresh-token', {
          token: refreshToken,
        })
        .then(res => {
          if (res.status === 200) {
            const response = res.data ? JSON.stringify(res.data) : null;
            if (response) {
              const { Token, RefreshToken } = response;
              localStorage.setItem('accessToken', Token);
              localStorage.setItem('refreshToken', RefreshToken);
              axios.defaults.headers.common[
                'Authorization'
              ] = `Bearer ${Token}`;
              return axios(originalRequest);
            }
          }
        });
    }
    return Promise.reject(error);
  }
);

export default instance;

const apiCall = async ({ method, url, body = null, tokenized = false }) => {
  if (tokenized) {
    //get from local storage
    const authKey = localStorage.getItem('accessToken');
    if (!authKey) {
      throw new Error('No token provided');
    }
    instance.defaults.headers.common['Authorization'] = 'Bearer ' + authKey;
  }

  try {
    const res = await instance({
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
      const refResponse = await instance({
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

      instance.defaults.headers.common['Authorization'] =
        'Bearer ' + parsed.Token;
      const res = await instance({
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
