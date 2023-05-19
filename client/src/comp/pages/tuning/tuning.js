import React, { useState, Fragment } from 'react';
import Footer from '../../footer/footer';
import { useTranslation } from 'react-i18next';
import $ from 'jquery';
import { Route, Routes, Navigate } from 'react-router-dom';
import TuningPage from './pages/tuning-page';
import CatalogItem from './pages/catalog-item.js';
import PopUpForm from '../../pop-up-form/pop-up-form';
import Gearbox from './pages/gearbox-page.js';
import nav1 from './img/catalog-item-1.jpg';
import nav2 from './img/catalog-item-2.jpg';
import nav3 from './img/catalog-item-3.jpg';

const Tuning = () => {
  const [state, setState] = useState({
    service_name: '',
    redirect: '',
  });

  const setDataFromProps = (service_name) => {
    setState({ ...state, service_name: service_name });
  };

  const { t, i18n } = useTranslation();

  const carHandle = (num) => {
    $('.price-content-item').removeClass('active');
    $('.car-type-item').removeClass('act');
    $('.pci-' + num).addClass('active');
    $('.cti-' + num).addClass('act');
  };
  const redirect = async (link) => {
    console.log(link);
    setState({ ...state, redirect: link });
  };
  const handleClose = (e) => {
    $('.pop-up-container').removeClass('active');
    $('body').removeClass('no-scroll');
  };

  return (
    <div className='tuning'>
      {
        <Fragment>
          {!state.redirect ? (
            <Fragment></Fragment>
          ) : (
            <Fragment>
              <Navigate to={state.redirect} replace />
            </Fragment>
          )}
        </Fragment>
      }
      <PopUpForm service_name={state.service_name} />
      <div className='blur'>
        <div className='firstscreen-common fs-common-2'>
          <div className='mask'>
            <div className='text-container'>
              <div className='fs-title'>{t('Tuning.Firstscreen.Title')}</div>
            </div>
          </div>
          <div className='fader-common'></div>
        </div>
        <div className='main-wrapper'>
          <section>
            <Routes>
              <Route exact path='/tuning'>
                <TuningPage redirect={(link) => redirect(link)} />
              </Route>
              <Route path='/tuning/gearbox'>
                <Gearbox />
              </Route>
              <Route path='/tuning/turbo-boost'>
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav1}
                  title={t('Tuning.CatalogItem.1.Title')}
                  features={t('Tuning.CatalogItem.1.Features')}
                />
              </Route>
              <Route exact path='/tuning'>
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav1}
                  title={t('Tuning.CatalogItem.1.Title')}
                  features={t('Tuning.CatalogItem.1.Features')}
                />
              </Route>
              <Route path='/tuning/atmospher-engine-boost'>
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav2}
                  title={t('Tuning.CatalogItem.2.Title')}
                  features={t('Tuning.CatalogItem.2.Features')}
                />
              </Route>
              <Route path='/tuning/diesel-engine-boost'>
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav3}
                  title={t('Tuning.CatalogItem.3.Title')}
                  features={t('Tuning.CatalogItem.3.Features')}
                />
              </Route>
            </Routes>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Tuning;
