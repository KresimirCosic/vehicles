import React from 'react';

import { VehicleMake } from '../../../mobx/stores/vehiclesStore';
import MakesListItem from './MakesListItem';

interface MakesListProps {
  makes: VehicleMake[];
  currentPage: number;
  itemsPerPage: number;
  filterBy: string;
  gridView: boolean;
}

const MakesList: React.FC<MakesListProps> = ({
  makes,
  currentPage,
  itemsPerPage,
  filterBy,
  gridView,
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
    <ul className={gridView ? 'MakesList grid' : 'MakesList'}>
      {generateMakes().map((make, index) => (
        <MakesListItem key={make.ID} index={index} make={make} />
      ))}
    </ul>
  );
};

export default MakesList;
