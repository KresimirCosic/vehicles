import React, { Dispatch, SetStateAction } from 'react';

interface PaginationButtonProps {
  page: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  page,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <button
      className='PaginationButton'
      disabled={page === currentPage}
      onClick={() => setCurrentPage(page)}
    >
      {page}
    </button>
  );
};

export default PaginationButton;
