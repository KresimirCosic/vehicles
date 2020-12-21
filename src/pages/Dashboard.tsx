import React from 'react';

import { useRootStore } from '../mobx/hooks/useRootStore';
import Page from '../components/structural/Page';
import Makes from '../components/structural/makes/Makes';

const Dashboard: React.FC = () => {
  const { vehiclesStore } = useRootStore();

  return (
    <Page>
      <div className='Dashboard'>
        <Makes makes={vehiclesStore.makes} />
      </div>
    </Page>
  );
};

export default Dashboard;
