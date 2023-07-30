import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  headers: { 'Accept': 'application/json', 'Content-Type': 'application/json;charset=utf-8' }
});

export const apiCall = async ({ method, url, body = null, token = false }) => {
  // if (token) {
  //   const authKey = JSON.parse(localStorage.getItem('authKey'));
  //   if (!authKey) {
  //     throw new Error('No token provided');
  //   }
  //   client.defaults.headers.common['authentication'] = authKey;
  // }

  try {
    const res = await client({
      method,
      url: process.env.APP_API_URI + url,
      data: body,
    });

    return res.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error.response || error.message);
  }
};