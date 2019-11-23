import {FETCH_CHAT_LIST, PAGINATING_CHAT_LIST_START, PAGINATING_CHAT_LIST_DONE} from "chats/ChatActions";


const INITIAL_STATE = {
  chats: [],
  currentCount: null,
  totalCount: null,
  error: null,
  paginating: false,
};

export const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CHAT_LIST:
      return {
        ...state,
        chats: action.chats,
        currentCount: action.count,
        totalCount: action.totalCount
      };
    case PAGINATING_CHAT_LIST_START:
      return {
        ...state,
        paginating: true
      };
    case PAGINATING_CHAT_LIST_DONE:
      return {
        ...state,
        chats: state.chats.concat(action.chats),
        currentCount: state.currentCount + action.count,
        paginating: false
      };
    default:
      return state
  }
};

export const getChatList = state => state.chatReducer.chats;
export const getChatCurrentCount = state => state.chatReducer.currentCount;
export const getChatTotalCount = state => state.chatReducer.totalCount;
export const getIsPaginating = state => state.chatReducer.paginating;