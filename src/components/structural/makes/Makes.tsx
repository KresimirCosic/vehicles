import React, { useState } from 'react';
import { observer } from 'mobx-react';

import { VehicleMake } from '../../../mobx/stores/vehiclesStore';
import MakesFilter from './MakesFilter';
import MakesPagination from './MakesPagination';
import MakesList from './MakesList';

interface MakesProps {
  makes: VehicleMake[];
}

const Makes: React.FC<MakesProps> = ({ makes }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterBy, setFilterBy] = useState('');
  const itemsPerPage = 5;

  return (
    <div className='Makes'>
      <MakesFilter
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        setCurrentPage={setCurrentPage}
      />

      <MakesPagination
        makes={makes}
        filterBy={filterBy}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <MakesList
        makes={makes}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        filterBy={filterBy}
      />
    </div>
  );
};

export default observer(Makes);
