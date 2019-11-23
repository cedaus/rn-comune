import {CHAT_LIST_URL} from "../../main/RootAPI";
import {fetchChatList} from "./ChatActions";
import {constructAll} from "../../_helpers/base";
import {ChatModel} from "chats/ChatModels";
const axios = require('axios');

export function apiChatList(token) {
  console.log('Mimi', token);
  axios.defaults.headers.common['Authorization'] = 'JWT <' + token + '>';

  return dispatch => {
    axios.get(`${CHAT_LIST_URL}`).then(response => {
      if (response.error) {
        throw(response.error);
      }
      const data = response['data']['data'];
      console.log(data[0]);
      const chats = constructAll(data['chats'], ChatModel);
      const count = data['count'];
      dispatch(fetchChatList(chats, count));
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
