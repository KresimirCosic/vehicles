import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { scaleInDuration } from '../../../constants/durations';
import { VehicleModel } from '../../../mobx/stores/vehiclesStore';
import { useRootStore } from '../../../mobx/hooks/useRootStore';

interface ModelsListItemEditProps {
  model: VehicleModel;
  editing: boolean;
  setEditing: Dispatch<SetStateAction<boolean>>;
}

const ModelsListItemEdit: React.FC<ModelsListItemEditProps> = ({
  model,
  editing,
  setEditing,
}) => {
  const nodeRef = useRef(null);
  const { ID, name, price } = model;
  const [newName, setNewName] = useState(name);
  const [newPrice, setNewPrice] = useState(price);
  const { vehiclesStore } = useRootStore();

  const editModel = () => {
    vehiclesStore.editModel(ID, newName, newPrice);
    setEditing(false);
  };

  return (
    <CSSTransition
      in={editing}
      appear
      enter
      mountOnEnter
      unmountOnExit
      classNames='ModelsListItemEdit'
      timeout={{
        appear: scaleInDuration,
        enter: scaleInDuration,
        exit: scaleInDuration,
      }}
      nodeRef={nodeRef}
    >
      <div className='ModelsListItemEdit' ref={nodeRef}>
        <form className='ModelsListItemEdit-form'>
          <div className='ModelsListItemEdit-form-inputs'>
            <input
              className='ModelsListItemEdit-form-inputs-name'
              type='text'
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <input
              className='ModelsListItemEdit-form-inputs-price'
              type='number'
              min={1}
              value={newPrice}
              onChange={(e) => setNewPrice(parseInt(e.target.value))}
            />
          </div>
          <div className='ModelsListItemEdit-form-controls'>
            <button
              className='ModelsListItemEdit-form-controls-button'
              type='button'
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
            <button
              className='ModelsListItemEdit-form-controls-button'
              type='button'
              onClick={() => editModel()}
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </CSSTransition>
  );
};

export default ModelsListItemEdit;
