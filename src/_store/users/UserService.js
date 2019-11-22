const axios = require('axios');



export default function getPublicUser(username) {
  const USER_PUBLIC_URL = 'https://commune-django.herokuapp.com/api/user/profile/public';
  axios.get(`${USER_PUBLIC_URL}/${username}`).then(function (response) {
    console.log(response['data']['data']);
  })
  .catch(function (error) {
    console.log('Printing Error');
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}