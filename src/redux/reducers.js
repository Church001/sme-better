import { combineReducers } from 'redux';
import settings from './settings/reducer';
import menu from './menu/reducer';
import { authReducer } from './auth/reducer';
import { errorReducer } from './error/reducer';

const reducers = combineReducers({
  menu,
  settings,
  authReducer,
  errorReducer,
});

export default reducers;
