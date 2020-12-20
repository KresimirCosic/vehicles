import React, { useState } from 'react';
import { observer } from 'mobx-react';

import { VehicleModel } from '../../mobx/stores/vehiclesStore';

interface ModelsListProps {
  models: VehicleModel[];
}

const ModelsList: React.FC<ModelsListProps> = ({ models }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const generatePageNumbers = () => {
    const pageNumbers: number[] = [];

    for (let i = 1; i <= Math.ceil(models.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className='ModelsList'>
      {generatePageNumbers().map((page) => (
        <button
          disabled={currentPage === page}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}

      {models
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .map((model) => (
          <li key={model.ID}>{model.name}</li>
        ))}
    </div>
  );
};

export default observer(ModelsList);
