import React from 'react';

import Page from '../components/structural/Page';
import Makes from '../components/structural/makes/Makes';

const Dashboard: React.FC = () => {
  return (
    <Page>
      <div className='Dashboard'>
        <Makes />
      </div>
    </Page>
  );
};

export default Dashboard;
