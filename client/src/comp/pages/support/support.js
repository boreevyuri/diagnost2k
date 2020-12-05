import React from 'react';
import { useTranslation } from 'react-i18next';
import PopUpForm from '../../pop-up-form/pop-up-form';
import { Route, Switch, Link } from 'react-router-dom';
import $ from 'jquery';
import arrow from './img/arrow.svg';

const Support = () => {
  const { t } = useTranslation();

  const popUpHandle = () => {
    $('.blur').addClass('active');
    $('.pop-up-form-container').fadeIn(100);
  };

  const page = 'support';

  const firstscreenRender = () => {
    let fsName = 'firstscreen-common fs-common-' + page;
    return (
      <div className={fsName}>
        <div className='mask'>
          <div className='text-container'>
            <Switch>
              <Route exact path={`/support`}>
                <div className='cool-fs-title'>
                  <Link to={`/`}>
                    <div className='catalog-back-trigger common-back'>
                      <img src={arrow} alt='' />
                    </div>
                  </Link>
                  {t(`Navbar.3`)}
                </div>
              </Route>
            </Switch>
          </div>
        </div>
        <div className='fader-common'></div>
      </div>
    );
  };

  return (
    <div className='support'>
      <PopUpForm />
      <div className='blur'>
        {firstscreenRender()}
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
