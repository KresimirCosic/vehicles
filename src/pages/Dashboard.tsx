import React from 'react';

import { useRootStore } from '../mobx/hooks/useRootStore';
import Page from '../components/structural/Page';
import MakesList from '../components/structural/MakesList';

const Dashboard: React.FC = () => {
  const { vehiclesStore } = useRootStore();

  return (
    <Page>
      <div className='Dashboard'>
        <MakesList makes={vehiclesStore.makes} />
      </div>
    </Page>
  );
};

export default Dashboard;
