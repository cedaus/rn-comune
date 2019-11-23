import {authLoggedIn} from "auth/AuthActions";
import {UserModel} from "users/UserModel";

const axios = require('axios');

export function authLogin(phone, password, navigation) {
  const AUTH_URL = 'https://commune-django.herokuapp.com/api/authe/phone-auth/';
  console.log(navigation);
  const params = new URLSearchParams();
  params.append('phone_number', phone);
  params.append('password', password);

  return dispatch => {
    axios.post(`${AUTH_URL}`, params).then(response => {
      const data = response['data']['data'];
      const user = new UserModel({'name': 'Saksham Jain', 'profile_image': 'https://s3.ap-south-1.amazonaws.com/cmn-user-profile-image/cedaus97.png', 'location': 'Bengaluru', 'email': 'cedaus97@gmail.com', 'sex': 'Male'});
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
