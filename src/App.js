import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import AppLocale from './lang';
import ColorSwitcher from './components/common/ColorSwitcher';
import NotificationContainer from './components/common/react-notifications/NotificationContainer';
import { isMultiColorActive } from './constants/defaultValues';
import { getDirection } from './helpers/Utils';
import { ProtectedRoute } from './components/utils/utils';

const ViewMain = React.lazy(() =>
  import(/* webpackChunkName: "views" */ './views'),
);
const ViewApp = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ './views/app'),
);
const ViewError = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ './views/error'),
);
const LoginView = React.lazy(() => import('./views/Login'));

class App extends Component {
  constructor(props) {
    super(props);
    const direction = getDirection();
    if (direction.isRtl) {
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
  }

  render() {
    const { locale, isLoggedin } = this.props;
    const currentAppLocale = AppLocale[locale];
    return (
      <div className='h-100'>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <React.Fragment>
            <NotificationContainer />
            {isMultiColorActive && <ColorSwitcher />}
            <Suspense fallback={<div className='loading' />}>
              <Router>
                <Switch>
                  <Route
                    path='/login'
                    render={props => <LoginView {...props} />}
                  />
                  <ProtectedRoute
                    path='/app'
                    authUser={isLoggedin}
                    component={ViewApp}
                  />
                  <Route
                    path='/error'
                    exact
                    render={props => <ViewError {...props} />}
                  />
                  <ProtectedRoute
                    path='/'
                    authUser={isLoggedin}
                    exact
                    component={ViewMain}
                  />
                  <Redirect to='/error' />
                </Switch>
              </Router>
            </Suspense>
          </React.Fragment>
        </IntlProvider>
      </div>
    );
  }
}

const mapStateToProps = ({ settings, authReducer }) => {
  const { locale } = settings;
  const { isLoggedin } = authReducer;
  return { locale, isLoggedin };
};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(App);
