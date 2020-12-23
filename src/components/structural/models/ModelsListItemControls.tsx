import React, { Dispatch, SetStateAction } from 'react';

import { useRootStore } from '../../../mobx/hooks/useRootStore';
import { VehicleModel } from '../../../mobx/stores/vehiclesStore';
import { vehiclesService } from '../../../services/vehiclesService';

interface ModelsListItemControlsProps {
  model: VehicleModel;
  setEditing: Dispatch<SetStateAction<boolean>>;
}

const ModelsListItemControls: React.FC<ModelsListItemControlsProps> = ({
  model,
  setEditing,
}) => {
  const { authenticationStore } = useRootStore();
  const { user } = authenticationStore;
  const { ID } = model;

  const deleteModel = () => {
    vehiclesService.deleteModel(ID);
  };

  return (
    <>
      {user && !user.admin && (
        <>
          <button className='ModelsListItem-controls-button'>
            Add to cart
          </button>
        </>
      )}
      {user && user.admin && (
        <>
          <button
            className='ModelsListItem-controls-button'
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
          <button
            className='ModelsListItem-controls-button'
            onClick={() => deleteModel()}
          >
            Delete
          </button>
        </>
      )}
    </>
  );
};

export default ModelsListItemControls;
