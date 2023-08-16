import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '../../../Services/api';

const fakelogin = createAsyncThunk('auth/login2', async payload => {
  const user = {
    auth_date: 1691938186,
    first_name: 'Denys',
    hash: 'f419393159ef64c3b37ea722db236cee9562f51607566e154c85d317d7c35b35',
    id: 1464575948,
    last_name: 'Serhieiev ✙',
    photo_url:
      'https://t.me/i/userpic/320/Tpw1WS_E09e8_FKXMu-NRAoyqSKPt9kMa6sJDQIS4uw.jpg',
    username: 'tropen09',
  };
  const response = await apiCall({
    method: 'POST',
    url: '/auth/login',
    // body: payload,
    body: user,
  });

  // todo test url to be deleted
  // const response = await apiCall({
  //   method: 'GET',
  //   url: '/club/user-clubs-short',
  //   // body: {
  //   //   clubId: 1
  //   // },
  //  // tokenized: true,
  // });

  const responseParsed = JSON.parse(response);

  if (!response || !responseParsed || !responseParsed.Token) {
    console.warn('Error on login', response); //todo make error better
  }

  responseParsed.user = {
    name: responseParsed.Name,
    avatar: responseParsed.Avatar,
    role: responseParsed.Role,
  };

  return responseParsed;
});

export { fakelogin };
