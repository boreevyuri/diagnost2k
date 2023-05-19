import React, { useState, useEffect, Fragment } from 'react';
import Footer from '../../footer/footer';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import arrow from './img/arrow.svg';
import { Link } from 'react-router-dom';
import bmwkey from './img/bmw-key.jpg';
import PopUpForm from '../../pop-up-form/pop-up-form';

const Others = (props) => {
  const [state, setState] = useState({
    service_name: '',
    loaded: false,
  });

  const page = 'other';

  useEffect(() => {
    getContent(page);
  }, []);

  const getContent = async () => {
    let res = await axios.get(`https://diagnost2k.cz/others`);

    console.log(res);
    setState({ ...state, data: res.data, loaded: true });
  };

  const renderContent = () => {
    return state.data.map((item, index) => {
      console.log(item.Image[0].url)
      return (
        <Fragment key={index}>
          <Link to={`/service/${item.slug}`}>
            <div className='cool-catalog-item'>
              <div className='cool-catalog-container'>
                <div className='catalog-item-img'>
                  <img
                    src={`https://diagnost2k.cz${item.Image[0].url}`}
                    alt=''
                  />
                </div>
                <div className='catalog-item-text'>
                  {item.Name}
                </div>
              </div>
            </div>
          </Link>
        </Fragment>
      );
    });
  };

  const { t } = useTranslation();

  const firstscreenRender = () => {
    let fsName = 'firstscreen-common fs-common-' + page;
    return (
      <div className={fsName}>
        <div className='mask'>
          <div className='text-container'>
            <Routes>
              <Route exact path={`/other`}>
                <div className='cool-fs-title'>
                  <Link to={`/`}>
                    <div className='catalog-back-trigger common-back'>
                      <img src={arrow} alt='' />
                    </div>
                  </Link>
                  {t(`Others.Title`)}
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
    <div className='coding'>
      <PopUpForm service_name={state.service_name} />
      <div className='blur'>
        {firstscreenRender()}
        <div className='main-wrapper'>
          <section>
            <Link to='/bmw-key'>
              <div className='cool-catalog-item'>
                <div className='cool-catalog-container'>
                  <div className='catalog-item-img'>
                    <img src={bmwkey} alt='' />
                  </div>
                  <div className='catalog-item-text'>{t('Others.Bwmkey')}</div>
                </div>
              </div>
            </Link>
            <Fragment>
              {state.loaded ? (
                <Fragment>{renderContent()}</Fragment>
              ) : (
                  <Fragment></Fragment>
                )}
            </Fragment>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Others;
