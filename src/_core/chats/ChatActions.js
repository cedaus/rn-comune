export const FETCH_CHAT_LIST = 'FETCH_CHAT_LIST';
export const PAGINATING_CHAT_LIST_START = 'PAGINATING_CHAT_LIST_START';
export const PAGINATING_CHAT_LIST_DONE = 'PAGINATING_CHAT_LIST_DONE';
export const SELECT_CHAT_START = 'SELECT_CHAT_START';
export const SELECT_CHAT_DONE = 'SELECT_CHAT_DONE';


export function fetchChatList(chats, count, totalCount) {
  return {
    type: FETCH_CHAT_LIST,
    chats: chats,
    count: count,
    totalCount: totalCount
  };
}

export function paginatingChatListStart() {
  return {
    type: PAGINATING_CHAT_LIST_START,
  };
}

export function paginatingChatListDone(chats, count) {
  return {
    type: PAGINATING_CHAT_LIST_DONE,
    chats: chats,
    count: count,
  };
}

export function selectChatStart(chatID) {
  return {
    type: SELECT_CHAT_START,
    chatID: chatID
  };
}

export function selectChatDone(chat) {
  return {
    type: SELECT_CHAT_DONE,
    chat: chat
  };
}