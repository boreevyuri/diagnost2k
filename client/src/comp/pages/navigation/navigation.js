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
import FirstScreenRenderer from "../../elements/first-screen-renderer";

const Navigation = () => {
  const [state, setState] = useState({
    service_name: '',
    loaded: false,
  });

  const setDataFromProps = (service_name) => {
    setState({...state, service_name: service_name});
  };

  const page = 'navigation';
  const backArrowTitle = 'Navigation.Title';

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
                    // src={`https://diagnost2k.ru/${state.data[index].preview}`}
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
    <div className='navigation'>
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
              <Route path='/' element={<Catalog />} />
              <Route path='/nav-update2020' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav1}
                  title={t('Navigation.CatalogItem.1.Title')}
                  features={t('Navigation.CatalogItem.1.Features')}
                  description={t('Navigation.CatalogItem.1.Description')}
                />
              } />
              <Route path='/nbt-evo-id5-id6' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav2}
                  title={t('Navigation.CatalogItem.2.Title')}
                  features={t('Navigation.CatalogItem.2.Features')}
                  description={t('Navigation.CatalogItem.2.Description')}
                />
              } />
              <Route path='/cic-nav-system' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav3}
                  title={t('Navigation.CatalogItem.3.Title')}
                  features={t('Navigation.CatalogItem.3.Features')}
                  description={t('Navigation.CatalogItem.3.Description')}
                />
              } />
              <Route path='/speed-limit' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav4}
                  title={t('Navigation.CatalogItem.4.Title')}
                  features={t('Navigation.CatalogItem.4.Features')}
                  description={t('Navigation.CatalogItem.4.Description')}
                />
              } />
              <Route path='/nbt-evo-id4' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav5}
                  title={t('Navigation.CatalogItem.5.Title')}
                  features={t('Navigation.CatalogItem.5.Features')}
                  description={t('Navigation.CatalogItem.5.Description')}
                />
              } />
              <Route path='/idrive-touch-controller' element={
                <CatalogItem
                  setData={setDataFromProps}
                  img={nav6}
                  title={t('Navigation.CatalogItem.6.Title')}
                  features={t('Navigation.CatalogItem.6.Features')}
                  description={t('Navigation.CatalogItem.6.Description')}
                />
            } />
          </Routes>
        </section>
        <Footer/>
      </div>
    </div>
</div>
)
  ;
};

export default Navigation;
