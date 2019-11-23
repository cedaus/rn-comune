import {authLoggedIn} from "auth/AuthActions";

const axios = require('axios');
const qs = require('qs');

export function authLogin(phone, password, navigation) {
  const AUTH_URL = 'https://commune-django.herokuapp.com/api/authe/phone-auth/';
  console.log(navigation);
  const params = new URLSearchParams();
  params.append('phone_number', phone);
  params.append('password', password);

  return dispatch => {
    axios.post(`${AUTH_URL}`, params).then(response => {
      const data = response['data']['data'];
      const user = {'name': 'saksham'};
      const token = data['token'];
      if (response.error) {
        throw(response.error);
      }
      dispatch(authLoggedIn(user, token));
      navigation.navigate('Home');
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
