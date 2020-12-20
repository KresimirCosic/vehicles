import React, { Dispatch, SetStateAction } from 'react';

import { VehicleMake } from '../../mobx/stores/vehiclesStore';
import PaginationButton from './PaginationButton';

interface MakesControlsProps {
  makes: VehicleMake[];
  filterBy: string;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const MakesControls: React.FC<MakesControlsProps> = ({
  makes,
  filterBy,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const generatePageNumbers = () => {
    const pageNumbers: number[] = [];

    for (
      let i = 1;
      i <=
      Math.ceil(
        makes.filter(
          (make) =>
            make.name.toLowerCase().includes(filterBy.toLowerCase()) ||
            make.abrv.toLowerCase().includes(filterBy.toLowerCase())
        ).length / itemsPerPage
      );
      i++
    ) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className='MakesControls'>
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
    </div>
  );
};

export default MakesControls;
