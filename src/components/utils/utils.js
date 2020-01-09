import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, authUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export const verifyLength = (val, limit) => {
  if (typeof val == 'string') {
    if (val.length >= limit) {
      return false;
    } else {
      return true;
    }
  }
};

export const verifyEmail = val => {
  if (typeof val == 'string') {
    if (val.includes('.com') && val.includes('@')) {
      return false;
    } else {
      return true;
    }
  }
};
