export const FETCH_CHAT_LIST = 'FETCH_CHAT_LIST';


export function fetchChatList(chats, count) {
  return {
    type: FETCH_CHAT_LIST,
    chats: chats,
    count: count,
  };
}