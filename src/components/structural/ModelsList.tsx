import React from 'react';
import { observer } from 'mobx-react';

import { VehicleModel } from '../../mobx/stores/vehiclesStore';

interface ModelsListProps {
  models: VehicleModel[];
}

const ModelsList: React.FC<ModelsListProps> = ({ models }) => {
  return (
    <div className='ModelsList'>
      <h1>ModelsList</h1>
      {models.map((model) => (
        <li key={model.ID}>{model.name}</li>
      ))}
    </div>
  );
};

export default observer(ModelsList);
