import React, { Dispatch, SetStateAction } from 'react';

import {
  SortingFunctionName,
  sortingFunctions,
} from '../../../constants/sortingFunctions';

interface ModelsSortProps {
  sortingFunctionName: SortingFunctionName;
  setSortingFunctionName: Dispatch<SetStateAction<SortingFunctionName>>;
}

const ModelsSort: React.FC<ModelsSortProps> = ({
  sortingFunctionName,
  setSortingFunctionName,
}) => {
  const generateSortingFunctions = () => {
    return Object.keys(sortingFunctions);
  };

  return (
    <div className='ModelsSort'>
      <select
        className='ModelsSort-select'
        value={sortingFunctionName}
        onChange={(e) =>
          setSortingFunctionName(e.target.value as SortingFunctionName)
        }
      >
        {generateSortingFunctions().map((sortingFunction, index) => (
          <option key={index} value={sortingFunction}>
            {
              sortingFunctions[sortingFunction as SortingFunctionName]
                .description
            }
          </option>
        ))}
      </select>
    </div>
  );
};

export default ModelsSort;
