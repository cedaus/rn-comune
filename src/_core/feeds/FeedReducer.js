import {FETCH_POSTS_PENDING, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR} from 'feeds/FeedActions';

const INITIAL_STATE = {
  pending: false,
  posts: [],
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
      console.log('H6');
      return {
        ...state,
        pending: false,
        posts: action.payload
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

export const getPosts = state => state.feedReducer.posts;
export const getPostsPending = state => state.feedReducer.pending;
export const getPostsError = state => state.feedReducer.error;