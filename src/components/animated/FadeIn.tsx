import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { fadeInDuration } from '../../constants/durations';

interface FadeInProp {
  appearCondition?: boolean;
  appearDelayMultiplier?: number;
}

const FadeIn: React.FC<FadeInProp> = ({
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
      classNames='FadeIn'
      timeout={{
        appear:
          typeof appearDelayMultiplier !== 'undefined'
            ? fadeInDuration * appearDelayMultiplier
            : fadeInDuration,
        enter: fadeInDuration,
        exit: fadeInDuration,
      }}
      nodeRef={nodeRef}
    >
      <div className='FadeIn' ref={nodeRef}>
        {children}
      </div>
    </CSSTransition>
  );
};

export default FadeIn;
