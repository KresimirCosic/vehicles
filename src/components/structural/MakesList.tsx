import React from 'react';

import { VehicleMake } from '../../mobx/stores/vehiclesStore';
import MakesListItem from './MakesListItem';

interface MakesListProps {
  makes: VehicleMake[];
  currentPage: number;
  itemsPerPage: number;
  filterBy: string;
}

const MakesList: React.FC<MakesListProps> = ({
  makes,
  currentPage,
  itemsPerPage,
  filterBy,
}) => {
  const generateMakes = () => {
    return makes
      .filter(
        (make) =>
          make.name.toLowerCase().includes(filterBy.toLowerCase()) ||
          make.abrv.toLowerCase().includes(filterBy.toLowerCase())
      )
      .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  };

  return (
    <ul className='MakesList'>
      {generateMakes().map((make, index) => (
        <MakesListItem key={make.ID} index={index} make={make} />
      ))}
    </ul>
  );
};

export default MakesList;
