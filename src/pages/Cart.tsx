import React from 'react';

import Page from '../components/structural/Page';
import { useRootStore } from '../mobx/hooks/useRootStore';

const Cart: React.FC = () => {
  const { vehiclesStore } = useRootStore();

  return (
    <Page>
      <div className='Cart'>
        <h1>Cart</h1>
      </div>
    </Page>
  );
};

export default Cart;
