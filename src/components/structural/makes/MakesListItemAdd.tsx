import React, { useRef, Dispatch, SetStateAction, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { scaleInDuration } from '../../../constants/durations';
import { useRootStore } from '../../../mobx/hooks/useRootStore';
import { VehicleMake } from '../../../mobx/stores/vehiclesStore';

interface MakesListItemAddProps {
  make: VehicleMake;
  adding: boolean;
  setAdding: Dispatch<SetStateAction<boolean>>;
}

const MakesListItemAdd: React.FC<MakesListItemAddProps> = ({
  make,
  adding,
  setAdding,
}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(1);
  const nodeRef = useRef(null);
  const { ID } = make;
  const { vehiclesStore } = useRootStore();

  const createModel = () => {
    vehiclesStore.addModel(name, ID, price);
    resetForm();
    setAdding(false);
  };

  const resetForm = () => {
    setName('');
    setPrice(1);
  };

  return (
    <CSSTransition
      in={adding}
      appear
      enter
      mountOnEnter
      unmountOnExit
      classNames='MakesListItemAdd'
      timeout={{
        appear: scaleInDuration,
        enter: scaleInDuration,
        exit: scaleInDuration,
      }}
      nodeRef={nodeRef}
    >
      <div className='MakesListItemAdd' ref={nodeRef}>
        <form className='MakesListItemAdd-form'>
          <div className='MakesListItemAdd-form-inputs'>
            <input
              className='MakesListItemAdd-form-inputs-name'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className='MakesListItemAdd-form-inputs-price'
              type='number'
              min={1}
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
            />
          </div>
          <div className='MakesListItemAdd-form-controls'>
            <button
              className='MakesListItemAdd-form-controls-button'
              type='button'
              onClick={() => setAdding(false)}
            >
              Cancel
            </button>
            <button
              className='MakesListItemAdd-form-controls-button'
              type='button'
              onClick={() => createModel()}
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </CSSTransition>
  );
};

export default MakesListItemAdd;
