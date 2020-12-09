import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

interface FadeInProp {
  appearCondition?: boolean;
}

const FadeIn: React.FC<FadeInProp> = ({ children, appearCondition }) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={typeof appearCondition === 'boolean' ? appearCondition : true}
      appear
      enter
      mountOnEnter
      unmountOnExit
      classNames='FadeIn'
      timeout={1000}
      nodeRef={nodeRef}
    >
      <div className='FadeIn' ref={nodeRef}>
        {children}
      </div>
    </CSSTransition>
  );
};

export default FadeIn;
