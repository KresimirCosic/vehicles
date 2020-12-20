import React from 'react';

import { VehicleMake } from '../../mobx/stores/vehiclesStore';
import FadeIn from '../animated/FadeIn';

interface MakesListItemProps {
  index: number;
  make: VehicleMake;
}

const MakesListItem: React.FC<MakesListItemProps> = ({ index, make }) => {
  return (
    <FadeIn appearDelayMultiplier={index / 2}>
      <li className='MakesListItem'>{make.name}</li>
    </FadeIn>
  );
};

export default MakesListItem;
