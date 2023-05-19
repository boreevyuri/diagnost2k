import React, { Fragment, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../../footer/footer';
import PopUpForm from '../../pop-up-form/pop-up-form';
import arrow from './img/arrow.svg';

const Coding = () => {
  const [state, setState] = useState({
    service_name: '',
    loaded: false,
  });

  const { i18n, t } = useTranslation();

  const page = 'coding';

  const getContent = async (category) => {
    let res = await axios.get(`/api/content/${category}`);
    setState({ ...state, data: res.data, loaded: true });
  };

  useEffect(() => {
    getContent(page);
  }, [getContent]);

  const renderContent = () => {
    return state.data.map((item, index) => {
      console.log(state);
      return (
        <Fragment key={index}>
          <Link to={`/service/${page}/${item.id}`}>
            <div className='cool-catalog-item'>
              <div className='cool-catalog-container'>
                <div className='catalog-item-img'>
                  <img
                    src={`https://diagnost2k.cz/${state.data[index].preview}`}
                    alt=''
                  />
                </div>
                <div className='catalog-item-text'>
                  {t(`${page}.${item.id}.0`)}
                </div>
              </div>
            </div>
          </Link>
        </Fragment>
      );
    });
  };

  const setDataFromProps = (service_name) => {
    setState({ ...state, service_name: service_name });
  };

  const firstscreenRender = () => {
    let fsName = 'firstscreen-common fs-common-' + page;
    return (
      <div className={fsName}>
        <div className='mask'>
          <div className='text-container'>
            <Routes>
              <Route exact path={`/${page}`}>
                <div className='cool-fs-title'>
                  <Link to={`/`}>
                    <div className='catalog-back-trigger common-back'>
                      <img src={arrow} alt='' />
                    </div>
                  </Link>
                  {t(`Coding.Title`)}
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

export default Coding;
