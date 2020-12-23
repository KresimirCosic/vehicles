import React from 'react';

import Page from '../components/structural/Page';
import RegisterForm from '../components/register/RegisterForm';

const Register: React.FC = () => {
  return (
    <Page>
      <div className='Register'>
        <RegisterForm />
      </div>
    </Page>
  );
};

export default Register;
