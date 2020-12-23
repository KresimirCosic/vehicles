import React, { Dispatch, SetStateAction } from 'react';
import { observer } from 'mobx-react';

import PaginationButton from '../PaginationButton';
import { useRootStore } from '../../../mobx/hooks/useRootStore';

interface MakesPaginationProps {
  filterBy: string;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const MakesPagination: React.FC<MakesPaginationProps> = ({
  filterBy,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const { makes } = useRootStore().vehiclesStore;

  const generatePageNumbers = () => {
    const pageNumbers: number[] = [];

    for (
      let i = 1;
      i <=
      Math.ceil(
        makes.filter(
          (make) =>
            make.name.toLowerCase().includes(filterBy.toLowerCase()) ||
            make.abrv.toLowerCase().includes(filterBy.toLowerCase())
        ).length / itemsPerPage
      );
      i++
    ) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className='MakesPagination'>
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

export default observer(MakesPagination);
