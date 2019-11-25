import {
  FETCH_CHAT_LIST,
  PAGINATING_CHAT_LIST_DONE,
  PAGINATING_CHAT_LIST_START,
  PAGINATING_CHAT_START,
  PAGINATING_CHAT_DONE,
  SELECT_CHAT_DONE,
  SELECT_CHAT_START
} from "chats/ChatActions";


const INITIAL_STATE = {
  chats: [],
  currentCount: null,
  totalCount: null,
  selectedChatID: null,
  selectedChat: null,
  selectedChatPaginating: false,
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
    case SELECT_CHAT_START:
      return {
        ...state,
        selectedChatID: action.chatID,
        selectedChat: null
      };
    case SELECT_CHAT_DONE:
      return {
        ...state,
        selectedChat: action.chat
      };
    case PAGINATING_CHAT_START:
      return {
        ...state,
        selectedChatPaginating: true,
      };
    case PAGINATING_CHAT_DONE:
      state.selectedChat.paginateMessages(action.messages)
      return {
        ...state,
        selectedChatPaginating: false,
      };
    default:
      return state
  }
};

export const getChatList = state => state.chatReducer.chats;
export const getChatCurrentCount = state => state.chatReducer.currentCount;
export const getChatTotalCount = state => state.chatReducer.totalCount;
export const getIsPaginating = state => state.chatReducer.paginating;
export const getSelectedChatID = state => state.chatReducer.selectedChatID;
export const getSelectedChat = state => state.chatReducer.selectedChat;
export const getSelectedChatPaginating = state => state.chatReducer.selectedChatPaginating;