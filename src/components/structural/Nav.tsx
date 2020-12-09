import React from 'react';

import FadeIn from '../animated/FadeIn';

const Nav: React.FC = () => {
  return (
    <FadeIn>
      <div className='Nav'>
        <h1>Nav</h1>
      </div>
    </FadeIn>
  );
};

export default Nav;
