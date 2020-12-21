import React from 'react';
import { sortingFunctions } from '../../../constants/sortingFunctions';

import { VehicleModel } from '../../../mobx/stores/vehiclesStore';
import ModelsListItem from './ModelsListItem';

interface ModelsListProps {
  models: VehicleModel[];
  currentPage: number;
  itemsPerPage: number;
  filterBy: string;
  gridView: boolean;
  sortingFunctionName: keyof typeof sortingFunctions;
}

const ModelsList: React.FC<ModelsListProps> = ({
  models,
  currentPage,
  itemsPerPage,
  filterBy,
  gridView,
  sortingFunctionName,
}) => {
  const generateModels = () => {
    return models
      .filter(
        (model) =>
          model.name.toLowerCase().includes(filterBy.toLowerCase()) ||
          model.abrv.toLowerCase().includes(filterBy.toLowerCase())
      )
      .sort(sortingFunctions[sortingFunctionName])
      .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  };

  return (
    <ul className={gridView ? 'ModelsList grid' : 'ModelsList'}>
      {generateModels().map((model, index) => (
        <ModelsListItem key={model.ID} index={index} model={model} />
      ))}
    </ul>
  );
};

export default ModelsList;
