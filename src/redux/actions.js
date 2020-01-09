/* SETTINGS */
export const CHANGE_LOCALE = 'CHANGE_LOCALE';

/* MENU */
export const MENU_SET_CLASSNAMES = 'MENU_SET_CLASSNAMES';
export const MENU_CONTAINER_ADD_CLASSNAME = 'MENU_CONTAINER_ADD_CLASSNAME';
export const MENU_CLICK_MOBILE_MENU = 'MENU_CLICK_MOBILE_MENU';
export const MENU_CHANGE_DEFAULT_CLASSES = 'MENU_CHANGE_DEFAULT_CLASSES';
export const MENU_CHANGE_HAS_SUB_ITEM_STATUS =
  'MENU_CHANGE_HAS_SUB_ITEM_STATUS';

// AUTH
export const LOGIN_USER = 'LOGIN_USER';

// ERROR
export const AUTH_ERROR = 'AUTH_ERROR';
export const WRONG_PASSWORD_CONST = 'WRONG_PASSWORD';
export const WRONG_USERNAME_CONST = 'WRONG_USERNAME';
export const EMPTY_FIELDS_CONST = 'EMPTY_FIELDS';

export * from './menu/actions';
export * from './settings/actions';
export * from './auth/actons';
export * from './error/actions';
