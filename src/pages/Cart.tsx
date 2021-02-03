import React from 'react';
import { observer } from 'mobx-react';

import Page from '../components/structural/Page';
import { useRootStore } from '../mobx/hooks/useRootStore';

const Cart: React.FC = () => {
  const { vehiclesStore } = useRootStore();

  return (
    <Page>
      <div className='Cart'>
        <h1>Cart</h1>
        {vehiclesStore.cart.map((model) => (
          <li>{model.name}</li>
        ))}
      </div>
    </Page>
  );
};

export default observer(Cart);
