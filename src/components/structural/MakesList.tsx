import React, { useState } from 'react';
import { observer } from 'mobx-react';

import { VehicleMake } from '../../mobx/stores/vehiclesStore';

interface MakesListProps {
  makes: VehicleMake[];
}

const MakesList: React.FC<MakesListProps> = ({ makes }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const generatePageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(makes.length) / itemsPerPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className='MakesList'>
      <h1>MakesList</h1>

      {generatePageNumbers().map((page) => (
        <button
          disabled={currentPage === page}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}

      {makes
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .map((make) => (
          <li key={make.ID}>{make.name}</li>
        ))}
    </div>
  );
};

export default observer(MakesList);
