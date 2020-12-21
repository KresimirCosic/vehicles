import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { VehicleModel } from '../../../mobx/stores/vehiclesStore';
import { fadeInDuration } from '../../../constants/durations';

interface ModelsListItemProps {
  index: number;
  model: VehicleModel;
}

const ModelsListItem: React.FC<ModelsListItemProps> = ({ index, model }) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in
      appear
      enter
      mountOnEnter
      unmountOnExit
      classNames='ModelsListItem'
      timeout={{
        appear: (fadeInDuration * index) / 2,
        enter: fadeInDuration,
        exit: fadeInDuration,
      }}
      nodeRef={nodeRef}
    >
      <li className='ModelsListItem' ref={nodeRef}>
        {model.name}
      </li>
    </CSSTransition>
  );
};

export default ModelsListItem;
