import React from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes, Link } from 'react-router-dom';
import arrow from './img/arrow.svg';

const AutoPick = () => {
  const { t } = useTranslation();

  const page = 'autopick';

  const firstscreenRender = () => {
    let fsName = 'firstscreen-common fs-common-' + page;
    return (
      <div className={fsName}>
        <div className='mask'>
          <div className='text-container'>
            <Routes>
              <Route exact path={`/autopick`}>
                <div className='cool-fs-title'>
                  <Link to={`/`}>
                    <div className='catalog-back-trigger common-back'>
                      <img src={arrow} alt='' />
                    </div>
                  </Link>
                  {t(`Menu.7`)}
                </div>
              </Route>
            </Routes>
          </div>
        </div>
        <div className='fader-common'></div>
      </div>
    );
  };

  return (
    <div className='autopick'>
      <div className='blur'>
        {firstscreenRender()}
        <div className='main-wrapper'></div>
      </div>
    </div>
  );
};

export default AutoPick;
