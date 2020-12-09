import React from 'react';

import { useRootStore } from '../mobx/hooks/useRootStore';
import { RootStoreContext } from '../mobx/contexts/RootStoreContext';

import Shell from './Shell';

const App: React.FC = () => {
  const rootStore = useRootStore();

  return (
    <div className='App'>
      <RootStoreContext.Provider value={rootStore}>
        <Shell />
      </RootStoreContext.Provider>
    </div>
  );
};

export default App;
