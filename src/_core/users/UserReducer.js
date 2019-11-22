import {FETCH_USER_PENDING, FETCH_USER_SUCCESS, FETCH_USER_ERROR} from 'users/UserActions';

const INITIAL_STATE = {
  pending: false,
  user: [],
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        user: action.payload
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };  
    default:
      return state;
  }
};


export const getUser = state => state.userReducer.user;
export const getUserPending = state => state.userReducer.pending;
export const getUserError = state => state.userReducer.error;