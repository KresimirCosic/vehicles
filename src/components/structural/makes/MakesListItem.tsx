import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { VehicleMake } from '../../../mobx/stores/vehiclesStore';
import { fadeInDuration } from '../../../constants/durations';
import { useRootStore } from '../../../mobx/hooks/useRootStore';

interface MakesListItemProps {
  index: number;
  make: VehicleMake;
}

const MakesListItem: React.FC<MakesListItemProps> = ({ index, make }) => {
  const nodeRef = useRef(null);
  const { vehiclesStore } = useRootStore();

  const numberOfVehicles = () => {
    return vehiclesStore.models.reduce((totalNumber, model) => {
      if (make.ID === model.makeID) {
        return totalNumber + 1;
      }
      return totalNumber;
    }, 0);
  };

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
        <div className='MakesListItem-card'>
          <h4 className='MakesListItem-card-name'>{make.name}</h4>
          <h6 className='MakesListItem-card-number'>
            {numberOfVehicles()} models in store
          </h6>
        </div>
        <div className='MakesListItem-controls'>
          <button className='MakesListItem-controls-button'>
            Edit the make
          </button>
          <button className='MakesListItem-controls-button'>
            Add a new model
          </button>
        </div>
      </li>
    </CSSTransition>
  );
};

export default MakesListItem;
