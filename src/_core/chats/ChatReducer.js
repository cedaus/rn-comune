import {FETCH_CHAT_LIST} from "chats/ChatActions";


const INITIAL_STATE = {
  chats: [],
  count: null,
  pending: false,
  error: null,
};

export const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CHAT_LIST:
      return {
        ...state,
        chats: action.chats,
        count: action.count,
      };
    default:
      return state
  }
};

export const getChatList = state => state.chatReducer.chats;
export const getChatListCount = state => state.chatReducer.count;