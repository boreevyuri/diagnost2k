import React from 'react';
import FirstScreenRenderer from "../../elements/first-screen-renderer";

const Repair = () => {

  const page = 'file-service';
  const backArrowTitle = 'Menu.10'

  return (
    <div className='repair'>
      <FirstScreenRenderer page={page} title={backArrowTitle} />
      <div className='main-wrapper'></div>
    </div>
  );
};

export default Repair;
