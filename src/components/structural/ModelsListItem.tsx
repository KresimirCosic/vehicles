import React from 'react';

import { VehicleModel } from '../../mobx/stores/vehiclesStore';
import FadeIn from '../animated/FadeIn';

interface ModelsListItemProps {
  index: number;
  model: VehicleModel;
}

const ModelsListItem: React.FC<ModelsListItemProps> = ({ index, model }) => {
  return (
    <FadeIn appearDelayMultiplier={index / 2}>
      <li className='ModelsListItem'>{model.name}</li>
    </FadeIn>
  );
};

export default ModelsListItem;
