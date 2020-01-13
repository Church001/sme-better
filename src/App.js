import React, { Component, Suspense } from 'react';
import AppLocale from './lang';
import { IntlProvider } from 'react-intl';
import ColorSwitcher from './components/common/ColorSwitcher';
import NotificationContainer from './components/common/react-notifications/NotificationContainer';
import { isMultiColorActive } from './constants/defaultValues';
import { getDirection } from './helpers/Utils';
import Routes from './Routes';
import { connect } from 'react-redux';

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
    const { locale } = this.props;
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
              <Routes />
            </Suspense>
          </React.Fragment>
        </IntlProvider>
      </div>
    );
  }
}
const mapStateToProps = ({ settings }) => {
  const { locale } = settings;
  return { locale };
};
export default connect(mapStateToProps, null)(App);
