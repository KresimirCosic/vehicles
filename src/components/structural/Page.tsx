import React from 'react';

import FadeIn from '../animated/FadeIn';

const Page: React.FC = ({ children }) => {
  return (
    <FadeIn>
      <div className='Page'>
        <div className='container'>{children}</div>
      </div>
    </FadeIn>
  );
};

export default Page;
