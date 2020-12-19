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
            // authenticationStore.setUser('user', 'mortale');
          }}
        >
          Log in
        </button>
      </div>
    </Page>
  );
};

export default Login;
