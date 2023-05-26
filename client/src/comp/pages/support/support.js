import React from 'react';
import PopUpForm from '../../pop-up-form/pop-up-form';
import $ from 'jquery';
import FirstScreenRenderer from "../../elements/first-screen-renderer";

const Support = () => {

  const popUpHandle = () => {
    $('.blur').addClass('active');
    $('.pop-up-form-container').fadeIn(100);
  };

  const page = 'support';
  const backArrowTitle = 'Navbar.3';

  return (
    <div className='support'>
      <PopUpForm />
      <div className='blur'>
        <FirstScreenRenderer page={page} title={backArrowTitle} />
        <div className='main-wrapper'>
          <div onClick={() => popUpHandle()} className='btn-pop-up-form'>
            Click for support
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
