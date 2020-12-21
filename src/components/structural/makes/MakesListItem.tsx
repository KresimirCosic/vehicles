import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { VehicleMake } from '../../../mobx/stores/vehiclesStore';
import { fadeInDuration } from '../../../constants/durations';

interface MakesListItemProps {
  index: number;
  make: VehicleMake;
}

const MakesListItem: React.FC<MakesListItemProps> = ({ index, make }) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in
      appear
      enter
      mountOnEnter
      unmountOnExit
      classNames='MakesListItem'
      timeout={{
        appear: (fadeInDuration * index) / 2,
        enter: fadeInDuration,
        exit: fadeInDuration,
      }}
      nodeRef={nodeRef}
    >
      <li className='MakesListItem' ref={nodeRef}>
        {make.name}
      </li>
    </CSSTransition>
  );
};

export default MakesListItem;
