import React, { Component, Fragment } from 'react';
// import { Row } from 'reactstrap';
import { connect } from 'react-redux';
import { EyeIcon, GoogleIcon, PaperIcon, DotsIcon } from '../components/svg';
import { loginAction } from '../redux/actions';
import { verifyEmail, verifyLength } from '../components/utils/utils';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      toggleVisibility: false,
      error: {},
      usernameError: false,
      passwordError: false,
    };
  }

  componentDidMount() {
    if (this.props.auth.isLoggedin) {
      this.props.history.push('/app');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isLoggedin) {
      this.props.history.push('/app');
    }
  }

  handleOnchange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleToggleVisibility = () => {
    this.setState({
      toggleVisibility: !this.state.toggleVisibility,
    });
  };

  handleSubmit = () => {
    if (verifyEmail(this.state.username)) {
      this.setState({
        usernameError: true,
      });
    }
    if (verifyLength(this.state.username, 5)) {
      this.setState({
        passwordError: true,
      });
    }
    if (!this.state.usernameError && !this.state.passwordError) {
      const data = {
        username: this.state.username,
        password: this.state.password,
      };
      this.props.loginAction(data);
    }
  };

  render() {
    console.log(this.props.error);
    return (
      <Fragment>
        <div className='auth_layout'>
          <div className='auth_card'>
            <div className='form_side'>
              <div className='sme_better'>
                <p>SME Better</p>
              </div>
              <div className='business_manager'>
                <p>Log into your Business Manager</p>
              </div>
              <div
                className={
                  !this.state.usernameError ? 'email_box' : 'input_error'
                }
              >
                <p>Email Address</p>
                <input
                  name='username'
                  type='text'
                  placeholder='someone@email.com'
                  onChange={this.handleOnchange}
                />
              </div>
              <div
                className={
                  !this.state.passwordError ? 'password_box' : 'input_error_p'
                }
              >
                <p>Enter Your Password</p>
                <div className='pwd_mini_box'>
                  <input
                    name='password'
                    type={this.state.toggleVisibility ? 'text' : 'password'}
                    placeholder='Password'
                    onChange={this.handleOnchange}
                  />
                  <div
                    onClick={this.handleToggleVisibility}
                    className='eye_icon'
                  >
                    <EyeIcon />
                  </div>
                </div>
              </div>
              <button onClick={this.handleSubmit}>
                <p>SIGN IN</p>
              </button>
              <div className='sign_up'>
                <div className='p1'>
                  <p>Don't have an account?</p>
                </div>
                <div className='p2'>
                  <p>Sign Up</p>
                </div>
              </div>
              <div className='forgot_password'>
                <p>Forgot Password?</p>
              </div>
              <div className='google_btn'>
                <button>
                  <div style={{ display: 'flex' }}>
                    <div className='g_img'>
                      <GoogleIcon />
                    </div>
                    <p>Log in with Google</p>
                  </div>
                </button>
              </div>
            </div>
            <div className='image_side'>
              <div className='organise_cust'>
                <p>Organise your customer information</p>
              </div>
              <div className='group_image'>
                <div className='paper_icon'>
                  <PaperIcon />
                </div>
              </div>
              <div className='dots_icon'>
                <DotsIcon />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.authReducer,
    error: state.errorReducer,
  };
};

export default connect(mapStateToProps, { loginAction })(Login);
