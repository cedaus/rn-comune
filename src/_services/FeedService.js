const axios = require('axios');
import {constructAll} from "../_helpers/base";
import {fetchPostsError, fetchPostsPending, fetchPostsSuccess} from 'reducers/actions';
import {PostModel} from 'models/FeedModel'

// export default function getUserFeed(username) {
//   const USER_FEED_URL = 'https://commune-django.herokuapp.com/api/broadcast/feed';
//   axios.get(`${USER_FEED_URL}/${username}/`).then(function (response) {
//     data = constructAll(response['data']['broadcasts'], PostModel);
//     return data
//   })
//   .catch(function (error) {
//     console.log('Printing Error');
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });
// }


function fetchUserPosts() {
  return dispatch => {
    dispatch(fetchPostsPending());
    axios.get(`${USER_FEED_URL}/${username}/`).then(response => {
      const data = constructAll(response['data']['broadcasts'], PostModel);
      console.log(data);
      if (response.error) {
          throw(response.error);
      }
      dispatch(fetchPostsSuccess(data));
      return response.products;
    })
    .catch(error => {
      console.log('Printing Error');
      console.log(error);
      dispatch(fetchPostsError(error));
    })
    .finally(() => {
      // always executed
    });
  }
}

export default fetchUserPosts();