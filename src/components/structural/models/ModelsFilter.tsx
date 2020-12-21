import React, { Dispatch, SetStateAction } from 'react';

interface ModelsFilterProps {
  filterBy: string;
  setFilterBy: Dispatch<SetStateAction<string>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const ModelsFilter: React.FC<ModelsFilterProps> = ({
  filterBy,
  setFilterBy,
  setCurrentPage,
}) => {
  return (
    <div className='ModelsFilter'>
      <input
        className='ModelsFilter-input'
        type='text'
        placeholder='Search models...'
        value={filterBy}
        onChange={(e) => {
          setCurrentPage(1);
          setFilterBy(e.target.value);
        }}
      />
    </div>
  );
};

export default ModelsFilter;
