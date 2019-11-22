const axios = require('axios');
import {constructAll} from "../../_helpers/base";
import {fetchPostsError, fetchPostsPending, fetchPostsSuccess} from 'feeds/FeedActions';
import {PostModel} from 'feeds/FeedModel'


function fetchUserPosts() {
  const USER_FEED_URL = 'https://commune-django.herokuapp.com/api/broadcast/feed';
  return dispatch => {
    console.log('H2');
    dispatch(fetchPostsPending());
    axios.get(`${USER_FEED_URL}/cedaus97/`).then(response => {
      const data = constructAll(response['data']['broadcasts'], PostModel);
      if (response.error) {
          throw(response.error);
      }
      console.log('H5');
      dispatch(fetchPostsSuccess(data));
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

export default fetchUserPosts;