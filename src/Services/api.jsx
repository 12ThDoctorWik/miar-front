import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  headers: { 'Accept': 'application/json', 'Content-Type': 'application/json;charset=utf-8' }
});
const refreshToken = () => {
  const refresh = localStorage.getItem('refreshToken');
  //todo apiCall refreshToken;
}
const apiCall = async ({ method, url, body = null, tokenized = false }) => {
  if (tokenized) {
    //get from local storage
    const authKey = JSON.parse(localStorage.getItem('accessToken'));
    if (!authKey) {
      //todo -> show modal Зареєструйся, курво.
      throw new Error('No token provided');
    }
    client.defaults.headers.common['authentication'] = authKey;
  }

  console.log(process.env.REACT_APP_API_URI + url);

  try {
    const res = await client({
      method,
      url: process.env.REACT_APP_API_URI + url,
      data: body,
    });

    // todo if (res.code = 401)
    // use refresh token to refresh the access token
    return res.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error.response || error.message);
  }
};

export { apiCall };