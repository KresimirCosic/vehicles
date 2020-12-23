import React from 'react';

import Page from '../components/structural/Page';
import LoginForm from '../components/login/LoginForm';

const Login: React.FC = () => {
  return (
    <Page>
      <div className='Login'>
        <LoginForm />
      </div>
    </Page>
  );
};

export default Login;
