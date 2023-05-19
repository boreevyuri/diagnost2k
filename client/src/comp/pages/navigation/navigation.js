import React, { useState, useEffect, Fragment } from 'react';
import Footer from '../../footer/footer';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import arrow from './img/arrow.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Catalog from './pages/catalog.js';
import CatalogItem from './pages/catalog-item.js';
import PopUpForm from '../../pop-up-form/pop-up-form';
import nav1 from './img/catalog-item-1.jpg';
import nav2 from './img/catalog-item-2.jpg';
import nav3 from './img/catalog-item-3.jpg';
import nav4 from './img/catalog-item-4.jpg';
import nav5 from './img/catalog-item-5.jpg';
import nav6 from './img/catalog-item-6.jpg';

const Navigation = () => {
  const [state, setState] = useState({
    service_name: '',
    loaded: false,
  });

  const setDataFromProps = (service_name) => {
    setState({ ...state, service_name: service_name });
  };

  const page = 'navigation';

  useEffect(() => {
    getContent(page);
  }, []);

  const getContent = async (category) => {
    let res = await axios.get(`/api/content/${category}`);
    setState({ ...state, data: res.data, loaded: true });
  };

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

  const { t } = useTranslation();

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
                  {t(`Navigation.Title`)}
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
    <div className='navigation'>
      <PopUpForm service_name={state.service_name} />
      <div className='blur'>
        {firstscreenRender()}
        <div className='main-wrapper'>
          <Fragment>
            {state.loaded ? (
              <Fragment>{renderContent()}</Fragment>
            ) : (
              <Fragment></Fragment>
            )}
          </Fragment>
          <section>
            <Routes>
              <Route exact path='/navigation' element={Catalog} />
              <Route path='/navigation/nav-update2020'>
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav1}
                  title={t('Navigation.CatalogItem.1.Title')}
                  features={t('Navigation.CatalogItem.1.Features')}
                  description={t('Navigation.CatalogItem.1.Description')}
                />
              </Route>
              <Route path='/navigation/nbt-evo-id5-id6'>
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav2}
                  title={t('Navigation.CatalogItem.2.Title')}
                  features={t('Navigation.CatalogItem.2.Features')}
                  description={t('Navigation.CatalogItem.2.Description')}
                />
              </Route>
              <Route path='/navigation/cic-nav-system'>
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav3}
                  title={t('Navigation.CatalogItem.3.Title')}
                  features={t('Navigation.CatalogItem.3.Features')}
                  description={t('Navigation.CatalogItem.3.Description')}
                />
              </Route>
              <Route path='/navigation/speed-limit'>
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav4}
                  title={t('Navigation.CatalogItem.4.Title')}
                  features={t('Navigation.CatalogItem.4.Features')}
                  description={t('Navigation.CatalogItem.4.Description')}
                />
              </Route>
              <Route path='/navigation/nbt-evo-id4'>
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav5}
                  title={t('Navigation.CatalogItem.5.Title')}
                  features={t('Navigation.CatalogItem.5.Features')}
                  description={t('Navigation.CatalogItem.5.Description')}
                />
              </Route>
              <Route path='/navigation/idrive-touch-controller'>
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav6}
                  title={t('Navigation.CatalogItem.6.Title')}
                  features={t('Navigation.CatalogItem.6.Features')}
                  description={t('Navigation.CatalogItem.6.Description')}
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

export default Navigation;
