import {fetchUserSuccess, fetchUserPending, fetchUserError} from "users/UserActions";
const axios = require('axios');


function fetchUser(username) {
  const USER_PUBLIC_URL = 'https://commune-django.herokuapp.com/api/user/profile/public';
  return dispatch => {
    dispatch(fetchUserPending());
    axios.get(`${USER_PUBLIC_URL}/${username}/`).then(response => {
      const data = console.log(response['data']['data']['user']);
      if (response.error) {
          throw(response.error);
      }
      dispatch(fetchUserSuccess(data));
    })
    .catch(error => {
      console.log('Printing Error');
      console.log(error);
      dispatch(fetchUserError(error));
    })
    .finally(() => {
      // always executed
    });
  }
}

export default fetchUser;