import React from 'react';

import { useRootStore } from '../mobx/hooks/useRootStore';

import Page from '../components/structural/Page';

const Login: React.FC = () => {
  const { authenticationStore } = useRootStore();

  return (
    <Page>
      <div>
        <h1>Login</h1>
        <button
          onClick={() => {
            authenticationStore.setUser('admin', 'deus');
          }}
        >
          Log in as admin
        </button>
        <button
          onClick={() => {
            authenticationStore.setUser('user', 'mortale');
          }}
        >
          Log in as user
        </button>
      </div>
    </Page>
  );
};

export default Login;
