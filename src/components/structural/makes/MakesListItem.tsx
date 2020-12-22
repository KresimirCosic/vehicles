import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { observer } from 'mobx-react';

import { VehicleMake } from '../../../mobx/stores/vehiclesStore';
import { fadeInDuration } from '../../../constants/durations';
import { useRootStore } from '../../../mobx/hooks/useRootStore';

import MakesListItemEdit from './MakesListItemEdit';

interface MakesListItemProps {
  index: number;
  make: VehicleMake;
}

const MakesListItem: React.FC<MakesListItemProps> = ({ index, make }) => {
  const nodeRef = useRef(null);
  const [editing, setEditing] = useState(false);
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
          <button
            className='MakesListItem-controls-button'
            onClick={() => setEditing(true)}
          >
            Edit the make
          </button>
          <button className='MakesListItem-controls-button'>
            Add a new model
          </button>
          <button
            className='MakesListItem-controls-button'
            onClick={() => vehiclesStore.removeMake(make.ID)}
          >
            Delete the make
          </button>
        </div>

        {editing && (
          <MakesListItemEdit
            ID={make.ID}
            name={make.name}
            abrv={make.abrv}
            setEditing={setEditing}
          />
        )}
      </li>
    </CSSTransition>
  );
};

export default observer(MakesListItem);
