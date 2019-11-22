const axios = require('axios');

export function getPublicUser(username) {
  const USER_PUBLIC_URL = 'https://commune-django.herokuapp.com/api/user/profile/public';
  axios.get(`${USER_PUBLIC_URL}/${username}`).then(function (response) {
    data = console.log(response['data']['data']['user']);
    return data;
  })
  .catch(function (error) {
    console.log('Printing Error');
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}