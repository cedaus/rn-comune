export const FETCH_CHAT_LIST = 'FETCH_CHAT_LIST';
export const PAGINATING_CHAT_LIST_START = 'PAGINATING_CHAT_LIST_START';
export const PAGINATING_CHAT_LIST_DONE = 'PAGINATING_CHAT_LIST_DONE';


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