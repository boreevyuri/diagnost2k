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
import nav7 from './img/catalog-item-7.jpg';
import nav8 from './img/catalog-item-8.jpg';
import nav9 from './img/catalog-item-9.jpg';

const Smartphone = () => {
  const [state, setState] = useState({
    service_name: '',
    loaded: false,
  });

  const setDataFromProps = (service_name) => {
    setState({...state, service_name: service_name});
  };

  const page = 'multimedia';

  useEffect(() => {
    getContent(page);
  }, []);

  const getContent = async (category) => {
    let res = await axios.get(`/api/content/${category}`);
    setState({...state, data: res.data, loaded: true});
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
              <Route exact path={`/smartphone`}
                     element={
                       <div className='cool-fs-title'>
                         <Link to={`/`}>
                           <div className='catalog-back-trigger common-back'>
                             <img src={arrow} alt=''/>
                           </div>
                         </Link>
                         {t(`Smartphone.Title`)}
                       </div>
                     }
              />
            </Routes>
          </div>
        </div>
        <div className='fader-common'></div>
      </div>
    );
  };

  return (
    <div className='smartphones='>
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
              <Route exact path='/smartphone' element={<Catalog />}/>
              <Route path='/smartphone/carplay' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav1}
                  title={t('Smartphone.CatalogItem.1.Title')}
                  features={t('Smartphone.CatalogItem.1.Features')}
                  description={t('Smartphone.CatalogItem.1.Description')}
                />
              } />
              <Route path='/smartphone/smartview-flex' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav2}
                  title={t('Smartphone.CatalogItem.2.Title')}
                  features={t('Smartphone.CatalogItem.2.Features')}
                  description={t('Smartphone.CatalogItem.2.Description')}
                />
              } />
              <Route path='/smartphone/smartview-apple-tv4' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav3}
                  title={t('Smartphone.CatalogItem.3.Title')}
                  features={t('Smartphone.CatalogItem.3.Features')}
                  description={t('Smartphone.CatalogItem.3.Description')}
                />
              } />
              <Route path='/smartphone/smartview-apple-tv3' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav4}
                  title={t('Smartphone.CatalogItem.4.Title')}
                  features={t('Smartphone.CatalogItem.4.Features')}
                  description={t('Smartphone.CatalogItem.4.Description')}
                />
              } />
              <Route path='/smartphone/android-auto' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav5}
                  title={t('Smartphone.CatalogItem.5.Title')}
                  features={t('Smartphone.CatalogItem.5.Features')}
                  description={t('Smartphone.CatalogItem.5.Description')}
                />
              } />
              <Route path='/Smartphone/carplay-apple' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav6}
                  title={t('Smartphone.CatalogItem.6.Title')}
                  features={t('Smartphone.CatalogItem.6.Features')}
                  description={t('Smartphone.CatalogItem.6.Description')}
                />
              } />
              <Route path='/Smartphone/bmw-bluetooth' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav7}
                  title={t('Smartphone.CatalogItem.7.Title')}
                  features={t('Smartphone.CatalogItem.7.Features')}
                  description={t('Smartphone.CatalogItem.7.Description')}
                />
              } />
              <Route path='/Smartphone/aux-port' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav8}
                  title={t('Smartphone.CatalogItem.8.Title')}
                  features={t('Smartphone.CatalogItem.8.Features')}
                  description={t('Smartphone.CatalogItem.8.Description')}
                />
              } />
              <Route path='/Smartphone/alpha-one' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav9}
                  title={t('Smartphone.CatalogItem.9.Title')}
                  features={t('Smartphone.CatalogItem.9.Features')}
                  description={t('Smartphone.CatalogItem.9.Description')}
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

export default Smartphone;
