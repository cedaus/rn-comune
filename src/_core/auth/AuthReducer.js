import {LOGGED_IN, LOGGED_OUT} from 'auth/AuthActions';

const INITIAL_STATE = {
  isLoggedIn: false,
  user: null,
  token: null,
  pending: false,
  error: null,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
        token: action.token
      };
    case LOGGED_OUT:
      return INITIAL_STATE;
    default:
      return state
  }
};