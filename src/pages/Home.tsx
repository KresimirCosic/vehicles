import React, { useEffect } from 'react';

import Page from '../components/structural/Page';
import Models from '../components/structural/models/Models';
import { useRootStore } from '../mobx/hooks/useRootStore';
import { vehiclesService } from '../services/vehiclesService';

const Home: React.FC = () => {
  const { vehiclesStore } = useRootStore();

  useEffect(() => {
    if (!vehiclesStore.initialModelsFetchComplete) {
      vehiclesService.getModels();
    }
  });

  return (
    <Page>
      <div className='Home'>
        <Models />
      </div>
    </Page>
  );
};

export default Home;
