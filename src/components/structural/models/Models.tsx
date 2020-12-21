import React, { useState } from 'react';
import { observer } from 'mobx-react';

import { VehicleModel } from '../../../mobx/stores/vehiclesStore';
import ModelsFilter from './ModelsFilter';
import ModelsView from './ModelsView';
import ModelsPagination from './ModelsPagination';
import ModelsList from './ModelsList';

interface ModelsProps {
  models: VehicleModel[];
}

const Models: React.FC<ModelsProps> = ({ models }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterBy, setFilterBy] = useState('');
  const [gridView, setGridView] = useState(false);
  const itemsPerPage = 5;

  return (
    <div className='Models'>
      <ModelsFilter
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        setCurrentPage={setCurrentPage}
      />

      <ModelsView gridView={gridView} setGridView={setGridView} />

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
        gridView={gridView}
      />
    </div>
  );
};

export default observer(Models);
