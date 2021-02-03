import { observer } from 'mobx-react';
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
  const { authenticationStore, vehiclesStore } = useRootStore();
  const { user } = authenticationStore;
  const { ID } = model;

  const deleteModel = () => {
    vehiclesService.deleteModel(ID);
  };

  const addToCart = (ID: string) => {
    vehiclesStore.addToCart(ID);
  };

  const determineValidity = () => {
    return vehiclesStore.cart.find((model) => model.ID === ID) ? true : false;
  };

  return (
    <>
      {user && !user.admin && (
        <>
          <button
            className='ModelsListItem-controls-button'
            onClick={() => addToCart(ID)}
            disabled={determineValidity()}
          >
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

export default observer(ModelsListItemControls);
