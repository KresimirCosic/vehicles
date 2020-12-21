import React, { Dispatch, SetStateAction } from 'react';

interface MakesFilterProps {
  filterBy: string;
  setFilterBy: Dispatch<SetStateAction<string>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const MakesFilter: React.FC<MakesFilterProps> = ({
  filterBy,
  setFilterBy,
  setCurrentPage,
}) => {
  return (
    <div className='MakesFilter'>
      <input
        className='MakesFilter-input'
        type='text'
        placeholder='Search makes...'
        value={filterBy}
        onChange={(e) => {
          setCurrentPage(1);
          setFilterBy(e.target.value);
        }}
      />
    </div>
  );
};

export default MakesFilter;
