import React from 'react';
import { observer } from 'mobx-react';

const Loader: React.FC = () => {
  return (
    <div className='Loader'>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default observer(Loader);
