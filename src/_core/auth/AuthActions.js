export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';


export function authLoggedIn(user, token) {
  return {
    type: LOGGED_IN,
    user: user,
    token: token
  };
}

export function authLoggedOut() {
  return {
    type: LOGGED_OUT
  };
}

