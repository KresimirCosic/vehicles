import React from 'react';

import { authenticationService } from '../services/authenticationService';

import Page from '../components/structural/Page';

const Login: React.FC = () => {
  return (
    <Page>
      <div>
        <h1>Login</h1>
        <button
          onClick={() => {
            authenticationService.login('admin', 'deus');
          }}
        >
          Log in as admin
        </button>
        <button
          onClick={() => {
            authenticationService.login('user', 'mortale');
          }}
        >
          Log in as user
        </button>
      </div>
    </Page>
  );
};

export default Login;
