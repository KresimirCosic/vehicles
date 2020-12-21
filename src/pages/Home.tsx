import React from 'react';

import { useRootStore } from '../mobx/hooks/useRootStore';
import Page from '../components/structural/Page';
import Models from '../components/structural/models/Models';

const Home: React.FC = () => {
  const { vehiclesStore } = useRootStore();

  return (
    <Page>
      <div className='Home'>
        <Models models={vehiclesStore.models} />
      </div>
    </Page>
  );
};

export default Home;
