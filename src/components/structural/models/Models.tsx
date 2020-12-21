import React, { useState } from 'react';
import { observer } from 'mobx-react';

import { VehicleModel } from '../../../mobx/stores/vehiclesStore';
import ModelsFilter from './ModelsFilter';
import ModelsPagination from './ModelsPagination';
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
      <ModelsFilter
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        setCurrentPage={setCurrentPage}
      />

      <ModelsPagination
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
