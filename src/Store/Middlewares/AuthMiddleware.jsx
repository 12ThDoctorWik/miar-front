const authMiddleware = store => next => action => {
  // if (authActions.login.match(action)) {
  //   // const serializedAuth = localStorage.getItem('refreshToken');
  //   // const serializedAuth = localStorage.getItem('accessToken');
  //   // const parsed = JSON.parse(serializedState);
  //   // const { authKey, ...noAuthKeyState } = state;
  //   // authKey ? localStorage.setItem('authKey', JSON.stringify(authKey))
  //   //     : localStorage.removeItem('authKey');
  //   // localStorage.setItem('state', JSON.stringify(noAuthKeyState));
  //
  //   // localStorage expects a string (!)
  //   localStorage.setItem('accessToken', 'true');
  // } else if (authActions.logout.match(action)) {
  //   localStorage.setItem('accessToken', 'false');
  // }
  return next(action);
};

export { authMiddleware };
