import React, { useRef } from 'react';
import { observer } from 'mobx-react';
import { CSSTransition } from 'react-transition-group';

import { scaleInDuration } from '../../constants/durations';
import { useRootStore } from '../../mobx/hooks/useRootStore';
import LoaderAnimation from './LoaderAnimation';

const Loader: React.FC = () => {
  const nodeRef = useRef(null);
  const { userInterfaceStore } = useRootStore();

  return (
    <CSSTransition
      in={userInterfaceStore.loader}
      appear
      enter
      mountOnEnter
      unmountOnExit
      classNames='Loader'
      timeout={{
        appear: scaleInDuration,
        enter: scaleInDuration,
        exit: scaleInDuration,
      }}
      nodeRef={nodeRef}
    >
      <div className='Loader fixed' ref={nodeRef}>
        <LoaderAnimation />
      </div>
    </CSSTransition>
  );
};

export default observer(Loader);
