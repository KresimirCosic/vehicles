import React, { useState } from 'react';
import { observer } from 'mobx-react';

import { VehicleModel } from '../../mobx/stores/vehiclesStore';
import PaginationButton from './PaginationButton';

interface ModelsListProps {
  models: VehicleModel[];
}

const ModelsList: React.FC<ModelsListProps> = ({ models }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterBy, setFilterBy] = useState('');
  const itemsPerPage = 5;

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

  const generateModelsList = () => {
    return models
      .filter(
        (model) =>
          model.name.toLowerCase().includes(filterBy.toLowerCase()) ||
          model.abrv.toLowerCase().includes(filterBy.toLowerCase())
      )
      .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  };

  return (
    <div className='ModelsList'>
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

      {generateModelsList().map((model) => (
        <li key={model.ID}>{model.name}</li>
      ))}
    </div>
  );
};

export default observer(ModelsList);
