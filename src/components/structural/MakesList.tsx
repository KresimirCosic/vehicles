import React, { useState } from 'react';
import { observer } from 'mobx-react';

import { VehicleMake } from '../../mobx/stores/vehiclesStore';
import PaginationButton from './PaginationButton';

interface MakesListProps {
  makes: VehicleMake[];
}

const MakesList: React.FC<MakesListProps> = ({ makes }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterBy, setFilterBy] = useState('');
  const itemsPerPage = 5;

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

  const generateMakesList = () => {
    return makes
      .filter(
        (make) =>
          make.name.toLowerCase().includes(filterBy.toLowerCase()) ||
          make.abrv.toLowerCase().includes(filterBy.toLowerCase())
      )
      .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  };

  return (
    <div className='MakesList'>
      <input
        type='text'
        value={filterBy}
        onChange={(e) => {
          setCurrentPage(1);
          setFilterBy(e.target.value);
        }}
      />

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

      {generateMakesList().map((make) => (
        <li key={make.ID}>{make.name}</li>
      ))}
    </div>
  );
};

export default observer(MakesList);
