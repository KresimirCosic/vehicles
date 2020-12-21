import React, { Dispatch, SetStateAction } from 'react';

interface ModelsViewProps {
  gridView: boolean;
  setGridView: Dispatch<SetStateAction<boolean>>;
}

const ModelsView: React.FC<ModelsViewProps> = ({ gridView, setGridView }) => {
  return (
    <div className='ModelsView'>
      <button
        className='ModelsView-button'
        disabled={!gridView}
        onClick={() => setGridView(false)}
      >
        List view
      </button>
      <button
        className='ModelsView-button'
        disabled={gridView}
        onClick={() => setGridView(true)}
      >
        Grid view
      </button>
    </div>
  );
};

export default ModelsView;
