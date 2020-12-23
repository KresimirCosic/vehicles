import React, { useState } from 'react';

import { authenticationService } from '../../services/authenticationService';

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [admin, setAdmin] = useState(false);

  const register = () => {
    authenticationService.register(username, password, admin);
    resetForm();
  };

  const resetForm = () => {
    setUsername('');
    setPassword('');
    setAdmin(false);
  };

  return (
    <form className='RegisterForm'>
      <div className='RegisterForm-inputs'>
        <input
          className='RegisterForm-inputs-username'
          type='text'
          placeholder='Username...'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className='RegisterForm-inputs-password'
          type='password'
          placeholder='Password...'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor='RegisterForm-inputs-admin'>Admin privileges?</label>
        <input
          className='RegisterForm-inputs-admin'
          type='checkbox'
          id='RegisterForm-inputs-admin'
          checked={admin}
          onChange={() => setAdmin(!admin)}
        />
      </div>
      <div className='RegisterForm-controls'>
        <button
          className='RegisterForm-controls-button'
          type='button'
          onClick={() => register()}
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
