import React, { useState } from 'react';
import { observer } from 'mobx-react';

import { VehicleModel } from '../../../mobx/stores/vehiclesStore';
import {
  SortingFunctionName,
  sortingFunctions,
} from '../../../constants/sortingFunctions';
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
  const [
    sortingFunctionName,
    setSortingFunctionName,
  ] = useState<SortingFunctionName>('sortByPriceIncreasing');
  const itemsPerPage = 5;

  return (
    <div className='Models'>
      <ModelsFilter
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        setCurrentPage={setCurrentPage}
      />

      <select
        value={sortingFunctionName}
        onChange={(e) =>
          setSortingFunctionName(e.target.value as SortingFunctionName)
        }
      >
        {Object.keys(sortingFunctions).map((sortingFunction, index) => {
          return (
            <option key={index} value={sortingFunction}>
              {
                sortingFunctions[sortingFunction as SortingFunctionName]
                  .description
              }
            </option>
          );
        })}
      </select>

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
        sortingFunctionName={sortingFunctionName}
      />
    </div>
  );
};

export default observer(Models);
