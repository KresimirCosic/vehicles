import React from 'react';
import { observer } from 'mobx-react';

import {
  SortingFunctionName,
  sortingFunctions,
} from '../../../constants/sortingFunctions';

import ModelsListItem from './ModelsListItem';
import { useRootStore } from '../../../mobx/hooks/useRootStore';

interface ModelsListProps {
  currentPage: number;
  itemsPerPage: number;
  filterBy: string;
  gridView: boolean;
  sortingFunctionName: SortingFunctionName;
}

const ModelsList: React.FC<ModelsListProps> = ({
  currentPage,
  itemsPerPage,
  filterBy,
  gridView,
  sortingFunctionName,
}) => {
  const { models } = useRootStore().vehiclesStore;

  const generateModels = () => {
    return models
      .filter(
        (model) =>
          model.name.toLowerCase().includes(filterBy.toLowerCase()) ||
          model.abrv.toLowerCase().includes(filterBy.toLowerCase())
      )
      .sort(sortingFunctions[sortingFunctionName].function)
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

export default observer(ModelsList);
