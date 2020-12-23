import React, { Dispatch, SetStateAction } from 'react';
import { observer } from 'mobx-react';

import PaginationButton from '../PaginationButton';
import { useRootStore } from '../../../mobx/hooks/useRootStore';

interface ModelsPaginationProps {
  filterBy: string;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const ModelsPagination: React.FC<ModelsPaginationProps> = ({
  filterBy,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const { models } = useRootStore().vehiclesStore;

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
    <div className='ModelsPagination'>
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

export default observer(ModelsPagination);
