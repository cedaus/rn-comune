import {combineReducers} from 'redux';
import {FETCH_POSTS_PENDING, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR} from './actions';

const INITIAL_STATE = {
  current: [],
  post: [],
  error: null,
};

export const feedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        pending: false,
        products: action.payload
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state
  }
};

export const getPosts = state => state.products;
export const getPostsPending = state => state.pending;
export const getPostsError = state => state.error;