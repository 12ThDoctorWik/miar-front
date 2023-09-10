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
