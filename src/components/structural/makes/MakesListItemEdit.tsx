import React, { Dispatch, SetStateAction, useState } from 'react';

import { useRootStore } from '../../../mobx/hooks/useRootStore';

interface MakesListItemEditProps {
  ID: number;
  name: string;
  abrv: string;
  setEditing: Dispatch<SetStateAction<boolean>>;
}

const MakesListItemEdit: React.FC<MakesListItemEditProps> = ({
  ID,
  name,
  abrv,
  setEditing,
}) => {
  const [newName, setNewName] = useState(name);
  const [newAbrv, setNewAbrv] = useState(abrv);
  const { vehiclesStore } = useRootStore();

  const editMake = () => {
    vehiclesStore.editMake(ID, newName, newAbrv);
  };

  return (
    <div className='MakesListItemEdit'>
      <form className='MakesListItemEdit-form'>
        <input
          className='MakesListItemEdit-form-name'
          type='text'
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          className='MakesListItemEdit-form-abrv'
          type='text'
          value={newAbrv}
          onChange={(e) => setNewAbrv(e.target.value)}
        />
        <button
          className='MakesListItemEdit-form-button'
          type='button'
          onClick={() => setEditing(false)}
        >
          Cancel
        </button>
        <button
          className='MakesListItemEdit-form-button'
          type='button'
          onClick={(e) => {
            e.preventDefault();
            editMake();
            setEditing(false);
          }}
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default MakesListItemEdit;
