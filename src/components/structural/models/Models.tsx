import React, { useState } from 'react';
import { observer } from 'mobx-react';

import { SortingFunctionName } from '../../../constants/sortingFunctions';
import ModelsFilter from './ModelsFilter';
import ModelsView from './ModelsView';
import ModelsPagination from './ModelsPagination';
import ModelsList from './ModelsList';
import ModelsSort from './ModelsSort';
import { useRootStore } from '../../../mobx/hooks/useRootStore';

const Models: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterBy, setFilterBy] = useState('');
  const [gridView, setGridView] = useState(false);
  const itemsPerPage = 5;
  const [
    sortingFunctionName,
    setSortingFunctionName,
  ] = useState<SortingFunctionName>('sortByPriceIncreasing');
  const { models } = useRootStore().vehiclesStore;

  return (
    <div className='Models'>
      <ModelsFilter
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        setCurrentPage={setCurrentPage}
      />

      <ModelsSort
        sortingFunctionName={sortingFunctionName}
        setSortingFunctionName={setSortingFunctionName}
      />

      <ModelsView gridView={gridView} setGridView={setGridView} />

      <ModelsPagination
        filterBy={filterBy}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <ModelsList
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
