import React from 'react';

import Nav from './structural/Nav';
import Loader from './structural/Loader';

const Shell: React.FC = () => {
  return (
    <div className='Shell'>
      <Nav />
      <Loader />
    </div>
  );
};

export default Shell;
