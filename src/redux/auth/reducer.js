import { LOGIN_USER } from '../actions';

const initialState = {
  isLoggedin: false,
  user: {},
  isloading: false,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isloading: false,
        isLoggedin: true,
      };
    default:
      return state;
  }
};
