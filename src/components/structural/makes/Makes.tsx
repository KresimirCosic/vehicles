import React, { useState } from 'react';
import { observer } from 'mobx-react';

import MakesAddMake from './MakesAddMake';
import MakesFilter from './MakesFilter';
import MakesView from './MakesView';
import MakesPagination from './MakesPagination';
import MakesList from './MakesList';

const Makes: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterBy, setFilterBy] = useState('');
  const [gridView, setGridView] = useState(false);
  const itemsPerPage = 5;

  return (
    <div className='Makes'>
      <MakesAddMake />

      <MakesFilter
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        setCurrentPage={setCurrentPage}
      />

      <MakesView gridView={gridView} setGridView={setGridView} />

      <MakesPagination
        filterBy={filterBy}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <MakesList
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        filterBy={filterBy}
        gridView={gridView}
      />
    </div>
  );
};

export default observer(Makes);
