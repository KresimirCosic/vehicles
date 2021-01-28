import React, { useState } from 'react';
import { authenticationService } from '../../services/authenticationService';

const LoginForm: React.FC = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    authenticationService.login(email, password);
  };

  return (
    <form className='LoginForm'>
      <div className='LoginForm-inputs'>
        <input
          className='LoginForm-inputs-username'
          type='text'
          placeholder='Username...'
          value={email}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className='LoginForm-inputs-password'
          type='password'
          placeholder='Password...'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='LoginForm-controls'>
        <button
          className='LoginForm-controls-button'
          type='button'
          onClick={() => login()}
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
