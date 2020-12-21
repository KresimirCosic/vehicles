import React, { Dispatch, SetStateAction } from 'react';

interface MakesViewProps {
  gridView: boolean;
  setGridView: Dispatch<SetStateAction<boolean>>;
}

const MakesView: React.FC<MakesViewProps> = ({ gridView, setGridView }) => {
  return (
    <div className='MakesView'>
      <button
        className='MakesView-button'
        disabled={!gridView}
        onClick={() => setGridView(false)}
      >
        List view
      </button>
      <button
        className='MakesView-button'
        disabled={gridView}
        onClick={() => setGridView(true)}
      >
        Grid view
      </button>
    </div>
  );
};

export default MakesView;
