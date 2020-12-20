import React from 'react';

import { useRootStore } from '../mobx/hooks/useRootStore';
import Page from '../components/structural/Page';
import ModelsList from '../components/structural/ModelsList';

const Home: React.FC = () => {
  const { vehiclesStore } = useRootStore();

  return (
    <Page>
      <div className='Home'>
        <ModelsList models={vehiclesStore.models} />
      </div>
    </Page>
  );
};

export default Home;
