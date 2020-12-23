import React from 'react';
import { observer } from 'mobx-react';

import MakesListItem from './MakesListItem';
import { useRootStore } from '../../../mobx/hooks/useRootStore';

interface MakesListProps {
  currentPage: number;
  itemsPerPage: number;
  filterBy: string;
  gridView: boolean;
}

const MakesList: React.FC<MakesListProps> = ({
  currentPage,
  itemsPerPage,
  filterBy,
  gridView,
}) => {
  const { makes } = useRootStore().vehiclesStore;

  const generateMakes = () => {
    return makes
      .filter(
        (make) =>
          make.name.toLowerCase().includes(filterBy.toLowerCase()) ||
          make.abrv.toLowerCase().includes(filterBy.toLowerCase())
      )
      .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  };

  return (
    <ul className={gridView ? 'MakesList grid' : 'MakesList'}>
      {generateMakes().map((make, index) => (
        <MakesListItem key={make.ID} index={index} make={make} />
      ))}
    </ul>
  );
};

export default observer(MakesList);
