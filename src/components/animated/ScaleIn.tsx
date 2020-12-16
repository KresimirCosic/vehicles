import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { scaleInDuration } from '../../constants/durations';

interface ScaleInProps {
  appearCondition?: any;
  appearDelayMultiplier?: number;
}

const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  appearCondition,
  appearDelayMultiplier,
}) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={typeof appearCondition !== 'undefined' ? appearCondition : true}
      appear
      enter
      mountOnEnter
      unmountOnExit
      classNames='ScaleIn'
      timeout={{
        appear:
          typeof appearDelayMultiplier !== 'undefined'
            ? scaleInDuration * appearDelayMultiplier
            : scaleInDuration,
        enter: scaleInDuration,
        exit: scaleInDuration,
      }}
      nodeRef={nodeRef}
    >
      <div className='ScaleIn' ref={nodeRef}>
        {children}
      </div>
    </CSSTransition>
  );
};

export default ScaleIn;
