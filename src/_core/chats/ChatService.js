import {CHAT_URL, CHAT_LIST_URL} from "../../main/RootAPI";
import {fetchChatList, paginatingChatListDone, paginatingChatListStart, selectChatDone} from "./ChatActions";
import {constructAll} from "../../_helpers/base";
import {ChatModel} from "chats/ChatModels";

const axios = require('axios');

export function apiChatList(token) {
  axios.defaults.headers.common['Authorization'] = 'JWT <' + token + '>';

  return dispatch => {
    axios.get(`${CHAT_LIST_URL}`).then(response => {
      if (response.error) {
        throw(response.error);
      }
      const data = response['data']['data'];
      const chats = constructAll(data['chats'], ChatModel);
      const count = data['count'];
      const totalCount = data['total_count'];
      dispatch(fetchChatList(chats, count, totalCount));
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


export function apiMoreChatList(offset, token) {
  axios.defaults.headers.common['Authorization'] = 'JWT <' + token + '>';
  return dispatch => {
    dispatch(paginatingChatListStart());
    axios.get(`${CHAT_LIST_URL}?offset=${offset}`).then(response => {
      if (response.error) {
        throw(response.error);
      }
      const data = response['data']['data'];
      const chats = constructAll(data['chats'], ChatModel);
      const count = data['count'];
      dispatch(paginatingChatListDone(chats, count));
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

export function apiChat(chatID, token) {
  axios.defaults.headers.common['Authorization'] = 'JWT <' + token + '>';
  return dispatch => {
    axios.get(`${CHAT_URL}/${chatID}/`).then(response => {
      if (response.error) {
        throw(response.error);
      }
      const data = response['data']['data'];
      const chat = new ChatModel(data['chat']);
      dispatch(selectChatDone(chat))
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