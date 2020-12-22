import React, { useState } from 'react';

import { useRootStore } from '../../../mobx/hooks/useRootStore';

const MakesAddMake: React.FC = () => {
  const { vehiclesStore } = useRootStore();
  const [name, setName] = useState('');
  const [abrv, setAbrv] = useState('');

  const createMake = () => {
    vehiclesStore.addMake(name, abrv);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setAbrv('');
  };

  return (
    <div className='MakesAddMake'>
      <h2 className='MakesAddMake-title'>Create a new make:</h2>
      <form className='MakesAddMake-form'>
        <div className='MakesAddMake-form-inputs'>
          <input
            className='MakesAddMake-form-inputs-name'
            type='text'
            placeholder='Name...'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='MakesAddMake-form-inputs-abrv'
            type='text'
            placeholder='Abbrevation...'
            value={abrv}
            onChange={(e) => setAbrv(e.target.value)}
          />
        </div>
        <div className='MakesAddMake-form-controls'>
          <button
            className='MakesAddMake-form-controls-button'
            type='button'
            onClick={() => {
              createMake();
            }}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakesAddMake;
