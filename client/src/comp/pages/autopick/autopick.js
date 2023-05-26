import React from 'react';
import FirstScreenRenderer from "../../elements/first-screen-renderer";

const AutoPick = () => {

  const page = 'autopick';
  const backArrowTitle = 'Menu.7'

  return (
    <div className='autopick'>
      <div className='blur'>
          <FirstScreenRenderer page={page} title={backArrowTitle} />
        <div className='main-wrapper'></div>
      </div>
    </div>
  );
};

export default AutoPick;
