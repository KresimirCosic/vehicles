import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { scaleInDuration } from '../../../constants/durations';
import { VehicleMake } from '../../../mobx/stores/vehiclesStore';
import { vehiclesService } from '../../../services/vehiclesService';

interface MakesListItemEditProps {
  make: VehicleMake;
  editing: boolean;
  setEditing: Dispatch<SetStateAction<boolean>>;
}

const MakesListItemEdit: React.FC<MakesListItemEditProps> = ({
  make,
  editing,
  setEditing,
}) => {
  const { ID, name, abrv } = make;
  const nodeRef = useRef(null);
  const [newName, setNewName] = useState(name);
  const [newAbrv, setNewAbrv] = useState(abrv);

  const editMake = () => {
    vehiclesService.editMake(ID, newName, newAbrv);
  };

  return (
    <CSSTransition
      in={editing}
      appear
      enter
      mountOnEnter
      unmountOnExit
      classNames='MakesListItemEdit'
      timeout={{
        appear: scaleInDuration,
        enter: scaleInDuration,
        exit: scaleInDuration,
      }}
      nodeRef={nodeRef}
    >
      <div className='MakesListItemEdit' ref={nodeRef}>
        <form className='MakesListItemEdit-form'>
          <div className='MakesListItemEdit-form-inputs'>
            <input
              className='MakesListItemEdit-form-inputs-name'
              type='text'
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <input
              className='MakesListItemEdit-form-inputs-abrv'
              type='text'
              value={newAbrv}
              onChange={(e) => setNewAbrv(e.target.value)}
            />
          </div>
          <div className='MakesListItemEdit-form-controls'>
            <button
              className='MakesListItemEdit-form-controls-button'
              type='button'
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
            <button
              className='MakesListItemEdit-form-controls-button'
              type='button'
              onClick={() => {
                editMake();
                setEditing(false);
              }}
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </CSSTransition>
  );
};

export default MakesListItemEdit;
