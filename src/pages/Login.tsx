import React from 'react';

import { useRootStore } from '../mobx/hooks/useRootStore';

import Page from '../components/utility/Page';

const Login: React.FC = () => {
  const { authenticationStore } = useRootStore();

  return (
    <Page>
      <div>
        <h1>Login</h1>
        <button
          onClick={() => {
            authenticationStore.setUserName('Kresimir');
          }}
        >
          Log in
        </button>
      </div>
    </Page>
  );
};

export default Login;
