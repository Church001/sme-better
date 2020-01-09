import {
  LOGIN_USER,
  AUTH_ERROR,
  WRONG_USERNAME_CONST,
  WRONG_PASSWORD_CONST,
} from '../actions';
import {
  authConstants,
  WRONG_EMAIL,
  WRONG_PASSWORD,
  EMPYT_FIELDS,
} from '../../data/auth';

export const loginAction = data => dispatch => {
  let MESSAGE = '';
  if (falseChecker(data) === true) {
    dispatch({
      type: LOGIN_USER,
      payload: data,
    });
  } else {
    if (data.username !== authConstants.EMAIL) {
      MESSAGE = WRONG_EMAIL;
      dispatch({
        type: WRONG_USERNAME_CONST,
        payload: MESSAGE,
      });
    } else if (data.password !== authConstants.PASSWORD) {
      MESSAGE = WRONG_PASSWORD;
      dispatch({
        type: WRONG_PASSWORD_CONST,
        payload: MESSAGE,
      });
    } else {
      MESSAGE = EMPYT_FIELDS;
      dispatch({
        type: AUTH_ERROR,
        payload: MESSAGE,
      });
    }
  }
};

export const falseChecker = data => {
  // check email
  if (
    data.username === authConstants.EMAIL &&
    data.password === authConstants.PASSWORD
  ) {
    return true;
  }
  // check password
};
