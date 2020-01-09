import { AUTH_ERROR } from '../actions';

export const authError = data => dispatch => {
  dispatch({
    type: AUTH_ERROR,
    payload: data,
  });
};
