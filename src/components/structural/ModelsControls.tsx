import React, { Dispatch, SetStateAction } from 'react';

import { VehicleModel } from '../../mobx/stores/vehiclesStore';
import PaginationButton from './PaginationButton';

interface ModelsControlsProps {
  models: VehicleModel[];
  filterBy: string;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const ModelsControls: React.FC<ModelsControlsProps> = ({
  models,
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
        models.filter(
          (model) =>
            model.name.toLowerCase().includes(filterBy.toLowerCase()) ||
            model.abrv.toLowerCase().includes(filterBy.toLowerCase())
        ).length / itemsPerPage
      );
      i++
    ) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className='ModelsControls'>
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

export default ModelsControls;
