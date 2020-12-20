import React, { useState } from 'react';
import { observer } from 'mobx-react';

import { VehicleMake } from '../../mobx/stores/vehiclesStore';
import MakesList from './MakesList';
import MakesControls from './MakesControls';

interface MakesProps {
  makes: VehicleMake[];
}

const Makes: React.FC<MakesProps> = ({ makes }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterBy, setFilterBy] = useState('');
  const itemsPerPage = 5;

  return (
    <div className='Makes'>
      <input
        type='text'
        value={filterBy}
        onChange={(e) => {
          setCurrentPage(1);
          setFilterBy(e.target.value);
        }}
      />

      <MakesControls
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
