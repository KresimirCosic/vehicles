import React, { useState } from 'react';
import { observer } from 'mobx-react';

import { VehicleMake } from '../../mobx/stores/vehiclesStore';
import PaginationButton from './PaginationButton';

interface MakesListProps {
  makes: VehicleMake[];
}

const MakesList: React.FC<MakesListProps> = ({ makes }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const generatePageNumbers = () => {
    const pageNumbers: number[] = [];

    for (let i = 1; i <= Math.ceil(makes.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className='MakesList'>
      {generatePageNumbers().map((page) => (
        <PaginationButton
          key={page}
          page={page}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        >
          {page}
        </PaginationButton>
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
