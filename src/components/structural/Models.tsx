import React, { useState } from 'react';
import { observer } from 'mobx-react';

import { VehicleModel } from '../../mobx/stores/vehiclesStore';
import ModelsControls from './ModelsControls';
import ModelsList from './ModelsList';

interface ModelsProps {
  models: VehicleModel[];
}

const Models: React.FC<ModelsProps> = ({ models }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterBy, setFilterBy] = useState('');
  const itemsPerPage = 5;

  return (
    <div className='Models'>
      <input
        type='text'
        value={filterBy}
        onChange={(e) => {
          setCurrentPage(1);
          setFilterBy(e.target.value);
        }}
      />

      <ModelsControls
        models={models}
        filterBy={filterBy}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <ModelsList
        models={models}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        filterBy={filterBy}
      />
    </div>
  );
};

export default observer(Models);
