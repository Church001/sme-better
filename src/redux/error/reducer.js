import { WRONG_PASSWORD_CONST, WRONG_USERNAME_CONST } from '../actions';

const initialState = {
  passwordError: null,
  usernameError: null,
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case WRONG_PASSWORD_CONST:
      return {
        ...state,
        passwordError: action.payload,
      };
    case WRONG_USERNAME_CONST:
      return {
        ...state,
        usernameError: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
