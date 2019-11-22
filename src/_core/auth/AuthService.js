import {authLoggedIn} from "auth/AuthActions";
const axios = require('axios');


export function authLogin(phone, password) {
  const AUTH_URL = 'https://commune-django.herokuapp.com/api/auth/phone-auth/';
  return dispatch => {
    const data = {'phone_number': phone, 'password': password};
    axios.get(`${AUTH_URL}`, data).then(response => {
      const user = {'name': 'saksham'};
      const token = 'gfgf';
      if (response.error) {
          throw(response.error);
      }
      dispatch(authLoggedIn(user, token));
    })
    .catch(error => {
      console.log('Printing Error');
      console.log(error);
    })
    .finally(() => {
      // always executed
    });
  }
}
