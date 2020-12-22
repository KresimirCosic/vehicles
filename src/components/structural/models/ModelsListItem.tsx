import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { VehicleModel } from '../../../mobx/stores/vehiclesStore';
import { fadeInDuration } from '../../../constants/durations';

import ModelsListItemControls from './ModelsListItemControls';
import ModelsListItemEdit from './ModelsListItemEdit';

interface ModelsListItemProps {
  index: number;
  model: VehicleModel;
}

const ModelsListItem: React.FC<ModelsListItemProps> = ({ index, model }) => {
  const nodeRef = useRef(null);
  const [editing, setEditing] = useState(false);

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
        <div className='ModelsListItem-card'>
          <h4>{model.name}</h4>
          <h6>${model.price}</h6>
        </div>
        <div className='ModelsListItem-controls'>
          <ModelsListItemControls model={model} setEditing={setEditing} />
        </div>

        {editing && (
          <ModelsListItemEdit
            model={model}
            editing={editing}
            setEditing={setEditing}
          />
        )}
      </li>
    </CSSTransition>
  );
};

export default ModelsListItem;
