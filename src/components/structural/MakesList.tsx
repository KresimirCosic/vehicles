import React from 'react';
import { observer } from 'mobx-react';

import { VehicleMake } from '../../mobx/stores/vehiclesStore';

interface MakesListProps {
  makes: VehicleMake[];
}

const MakesList: React.FC<MakesListProps> = ({ makes }) => {
  return (
    <div className='MakesList'>
      <h1>MakesList</h1>
      {makes.map((make) => (
        <li key={make.ID}>{make.name}</li>
      ))}
    </div>
  );
};

export default observer(MakesList);
