import React, {useState, useEffect, Fragment} from 'react';
import Footer from '../../footer/footer';
import {Route, Routes} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
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
import FirstScreenRenderer from "../../elements/first-screen-renderer";

const Smartphone = () => {
  const [state, setState] = useState({
    service_name: '',
    loaded: false,
  });

  const setDataFromProps = (service_name) => {
    setState({...state, service_name: service_name});
  };

  const page = 'multimedia';
  const backArrowTitle = 'Smartphone.Title';

  useEffect(() => {
    const getContent = async (category) => {
      let res = await axios.get(`/api/content/${category}`);
      setState({...state, data: res.data, loaded: true});
    };

    getContent(page);
  }, [state]);

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

  return (
    <div className='smartphones='>
      <PopUpForm service_name={state.service_name}/>
      <div className='blur'>
        <FirstScreenRenderer page={page} title={backArrowTitle} />
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
              <Route exact path='/' element={<Catalog />}/>
              <Route path='/carplay' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav1}
                  title={t('Smartphone.CatalogItem.1.Title')}
                  features={t('Smartphone.CatalogItem.1.Features')}
                  description={t('Smartphone.CatalogItem.1.Description')}
                />
              } />
              <Route path='/smartview-flex' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav2}
                  title={t('Smartphone.CatalogItem.2.Title')}
                  features={t('Smartphone.CatalogItem.2.Features')}
                  description={t('Smartphone.CatalogItem.2.Description')}
                />
              } />
              <Route path='/smartview-apple-tv4' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav3}
                  title={t('Smartphone.CatalogItem.3.Title')}
                  features={t('Smartphone.CatalogItem.3.Features')}
                  description={t('Smartphone.CatalogItem.3.Description')}
                />
              } />
              <Route path='/smartview-apple-tv3' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav4}
                  title={t('Smartphone.CatalogItem.4.Title')}
                  features={t('Smartphone.CatalogItem.4.Features')}
                  description={t('Smartphone.CatalogItem.4.Description')}
                />
              } />
              <Route path='/android-auto' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav5}
                  title={t('Smartphone.CatalogItem.5.Title')}
                  features={t('Smartphone.CatalogItem.5.Features')}
                  description={t('Smartphone.CatalogItem.5.Description')}
                />
              } />
              <Route path='/carplay-apple' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav6}
                  title={t('Smartphone.CatalogItem.6.Title')}
                  features={t('Smartphone.CatalogItem.6.Features')}
                  description={t('Smartphone.CatalogItem.6.Description')}
                />
              } />
              <Route path='/bmw-bluetooth' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav7}
                  title={t('Smartphone.CatalogItem.7.Title')}
                  features={t('Smartphone.CatalogItem.7.Features')}
                  description={t('Smartphone.CatalogItem.7.Description')}
                />
              } />
              <Route path='/aux-port' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav8}
                  title={t('Smartphone.CatalogItem.8.Title')}
                  features={t('Smartphone.CatalogItem.8.Features')}
                  description={t('Smartphone.CatalogItem.8.Description')}
                />
              } />
              <Route path='/alpha-one' element={
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
