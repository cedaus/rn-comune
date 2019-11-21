import {constructAll} from "../_helpers/base";

const axios = require('axios');
import {PostModel} from 'models/FeedModel'

export default function getUserFeed(username) {
  const USER_FEED_URL = 'https://commune-django.herokuapp.com/api/broadcast/feed';
  axios.get(`${USER_FEED_URL}/${username}/`).then(function (response) {
    data = constructAll(response['data']['broadcasts'], PostModel);
    return data
  })
  .catch(function (error) {
    console.log('Printing Error');
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}