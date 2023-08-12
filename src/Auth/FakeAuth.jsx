const API = 'https://dnd-lviv.azurewebsites.net/';

function Login(user)
{
  fetch(API + 'Auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
      .then(response => response.json())
      .then(data =>
      {
        setCookie("telegramId", `${user.id}`);
        setCookie("token", `Bearer ${data.Token}`);
        setCookie("refreshToken", data.RefreshToken);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}


function setCookie(name, value) {
  let cookieValue = `${name}=${value}; Secure; SameSite=Lax`;
  document.cookie = cookieValue;
}