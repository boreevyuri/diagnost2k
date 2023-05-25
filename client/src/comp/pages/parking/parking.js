import React, {useState, useEffect, Fragment} from 'react';
import Footer from '../../footer/footer';
import {Route, Routes} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import arrow from './img/arrow.svg';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Catalog from './pages/catalog.js';
import CatalogItem from './pages/catalog-item.js';
import PopUpForm from '../../pop-up-form/pop-up-form';
import nav1 from './img/catalog-item-1.jpg';
import nav2 from './img/catalog-item-2.jpg';
import nav3 from './img/catalog-item-3.jpg';
import nav4 from './img/catalog-item-4.jpg';
import nav5 from './img/catalog-item-5.jpg';
import nav6 from './img/catalog-item-6.jpg';

const Parking = () => {
  const [state, setState] = useState({
    service_name: '',
    loaded: false,
  });

  const setDataFromProps = (service_name) => {
    setState({...state, service_name: service_name});
  };

  const page = 'parking';

  useEffect(() => {
    getContent(page);
  }, []);

  const getContent = async (category) => {
    let res = await axios.get(`/api/content/${category}`);
    setState({...state, data: res.data, loaded: true});
  };

  const renderContent = () => {
    return state.data.map((item, index) => {
      console.log('state next')
      console.log(state);
      return (
        <Fragment key={index}>
          <Link to={`/service/${page}/${item.id}`}>
            <div className='cool-catalog-item'>
              <div className='cool-catalog-container'>
                <div className='catalog-item-img'>
                  <img
                    src={`/${state.data[index].preview}`}
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

  const {t} = useTranslation();

  const firstscreenRender = () => {
    let fsName = 'firstscreen-common fs-common-' + page;
    return (
      <div className={fsName}>
        <div className='mask'>
          <div className='text-container'>
            <Routes>
              <Route exact path={`/parking`} element={
                <>
                  <div className='cool-fs-title'>
                    <Link to={`/`}>
                      <div className='catalog-back-trigger common-back'>
                        <img src={arrow} alt=''/>
                      </div>
                    </Link>
                    {t(`Parking.Title`)}
                  </div>
                </>
              } />
          </Routes>
        </div>
      </div>
    <div className='fader-common'></div>
  </div>
  )
    ;
  };

  return (
    <div className='parking'>
      <PopUpForm service_name={state.service_name}/>
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
              <Route exact path='/parking' element={<Catalog/>}/>
              <Route path='/parking/nav-update2020' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav1}
                  title={t('Parking.CatalogItem.1.Title')}
                  features={t('Parking.CatalogItem.1.Features')}
                  description={t('Parking.CatalogItem.1.Description')}
                />
              } />
              <Route path='/parking/nbt-evo-id5-id6' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav2}
                  title={t('Parking.CatalogItem.2.Title')}
                  features={t('Parking.CatalogItem.2.Features')}
                  description={t('Parking.CatalogItem.2.Description')}
                />
              } />
              <Route path='/parking/cic-nav-system' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav3}
                  title={t('Parking.CatalogItem.3.Title')}
                  features={t('Parking.CatalogItem.3.Features')}
                  description={t('Parking.CatalogItem.3.Description')}
                />
              } />
              <Route path='/parking/speed-limit' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav4}
                  title={t('Parking.CatalogItem.4.Title')}
                  features={t('Parking.CatalogItem.4.Features')}
                  description={t('Parking.CatalogItem.4.Description')}
                />
              } />
              <Route path='/parking/nbt-evo-id4' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav5}
                  title={t('Parking.CatalogItem.5.Title')}
                  features={t('Parking.CatalogItem.5.Features')}
                  description={t('Parking.CatalogItem.5.Description')}
                />
              } />
              <Route path='/parking/idrive-touch-controller' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav6}
                  title={t('Parking.CatalogItem.6.Title')}
                  features={t('Parking.CatalogItem.6.Features')}
                  description={t('Parking.CatalogItem.6.Description')}
                />
              } />
            </Routes>
          </section>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Parking;
