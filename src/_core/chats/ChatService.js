import {CHAT_LIST_URL, CHAT_PAGINATE_URL, CHAT_URL} from "../../main/RootAPI";
import {
  fetchChatList, paginatingChatDone,
  paginatingChatListDone,
  paginatingChatListStart,
  paginatingChatStart,
  selectChatDone
} from "./ChatActions";
import {constructAll} from "../../_helpers/base";
import {ChatModel} from "chats/ChatModels";
import {MessageModel} from "./ChatModels";

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

export function apiMoreChat(chatID, offset, token) {
  axios.defaults.headers.common['Authorization'] = 'JWT <' + token + '>';
  return dispatch => {
    dispatch(paginatingChatStart());
    axios.get(`${CHAT_PAGINATE_URL}/${chatID}/?offset=${offset}`).then(response => {
      if (response.error) {
        throw(response.error);
      }
      const data = response['data']['data'];
      const messages = constructAll(data['messages'], MessageModel);
      dispatch(paginatingChatDone(messages));
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