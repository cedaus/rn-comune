import {fetchUserSuccess, fetchUserPending, fetchUserError} from "users/UserActions";
import {PUBLIC_USER_URL} from "../../main/RootAPI";
const axios = require('axios');


export function fetchUser(username) {
  return dispatch => {
    dispatch(fetchUserPending());
    axios.get(`${PUBLIC_USER_URL}/${username}/`).then(response => {
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
