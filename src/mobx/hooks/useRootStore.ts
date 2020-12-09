import { useContext } from 'react';

import { RootStoreContext } from '../contexts/RootStoreContext';

export const useRootStore = () => {
  return useContext(RootStoreContext);
};
