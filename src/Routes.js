import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { ProtectedRoute } from './components/utils/utils';
import { connect } from 'react-redux';

const ViewMain = React.lazy(() => import('./views'));
const ViewApp = React.lazy(() => import('./views/app'));
const ViewError = React.lazy(() => import('./views/error'));
const LoginView = React.lazy(() => import('./views/Login/Login'));
const SettingsView = React.lazy(() => import('./views/SME_Registration/Setup'));

const Routes = props => {
  const { isLoggedin } = props;
  return (
    <Router>
      <Switch>
        <Route path='/login' render={props => <LoginView {...props} />} />
        <Route path='/error' exact render={props => <ViewError {...props} />} />
        <ProtectedRoute
          path='/app'
          exact
          authUser={isLoggedin}
          component={ViewApp}
        />
        <ProtectedRoute
          path='/'
          authUser={isLoggedin}
          exact
          component={ViewMain}
        />
        <Route
          path='/settings'
          exact
          render={props => <SettingsView {...props} />}
        />
        <Redirect to='/error' />
      </Switch>
    </Router>
  );
};
const mapStateToProps = ({ authReducer }) => {
  const { isLoggedin } = authReducer;
  return { isLoggedin };
};
export default connect(mapStateToProps, {})(Routes);
