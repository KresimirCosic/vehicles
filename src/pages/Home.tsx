import React from 'react';

import Page from '../components/structural/Page';
import Models from '../components/structural/models/Models';

const Home: React.FC = () => {
  return (
    <Page>
      <div className='Home'>
        <Models />
      </div>
    </Page>
  );
};

export default Home;
