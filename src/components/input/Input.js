import React from 'react';

const Input = props => {
  return (
    <div className={false ? 'email_box' : 'input_error'}>
      <p>Email Address</p>
      <input
        name='username'
        type='text'
        placeholder='someone@email.com'
        onChange={props.func}
      />
    </div>
  );
};

export default Input;
