import React, { useEffect } from 'react';

import Page from '../components/structural/Page';
import Makes from '../components/structural/makes/Makes';
import { vehiclesService } from '../services/vehiclesService';
import { useRootStore } from '../mobx/hooks/useRootStore';

const Dashboard: React.FC = () => {
  const { vehiclesStore } = useRootStore();

  useEffect(() => {
    if (!vehiclesStore.initialMakesFetchComplete) {
      vehiclesService.getMakes();
    }
  });

  return (
    <Page>
      <div className='Dashboard'>
        <Makes />
      </div>
    </Page>
  );
};

export default Dashboard;
