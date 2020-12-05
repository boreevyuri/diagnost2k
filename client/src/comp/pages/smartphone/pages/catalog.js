import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import CatalogItemPreview from './catalog-item-preview';
import nav1 from '../img/preview/catalog-item-1.jpg';
import nav2 from '../img/preview/catalog-item-2.jpg';
import nav3 from '../img/preview/catalog-item-3.jpg';
import nav4 from '../img/preview/catalog-item-4.jpg';
import nav5 from '../img/preview/catalog-item-5.jpg';
import nav6 from '../img/preview/catalog-item-6.jpg';
import nav7 from '../img/preview/catalog-item-7.jpg';
import nav8 from '../img/preview/catalog-item-8.jpg';
import nav9 from '../img/preview/catalog-item-9.jpg';

const Catalog = () => {
  const { t } = useTranslation();
  return (
    <div className='catalog-component'>
      <div className='catalog-catalog'>
        <div className='catalog-title'></div>

        <Link to='/smartphone/carplay'>
          <CatalogItemPreview
            title={t('Smartphone.CatalogItem.1.Title')}
            img={nav1}
          />
        </Link>
        <Link to='/smartphone/smartview-flex'>
          <CatalogItemPreview
            title={t('Smartphone.CatalogItem.2.Title')}
            img={nav2}
          />
        </Link>
        <Link to='/smartphone/smartview-apple-tv4'>
          <CatalogItemPreview
            title={t('Smartphone.CatalogItem.3.Title')}
            img={nav3}
          />
        </Link>
        <Link to='/smartphone/smartview-apple-tv3'>
          <CatalogItemPreview
            title={t('Smartphone.CatalogItem.4.Title')}
            img={nav4}
          />
        </Link>
        <Link to='/smartphone/android-auto'>
          <CatalogItemPreview
            title={t('Smartphone.CatalogItem.5.Title')}
            img={nav5}
          />
        </Link>
        <Link to='/smartphone/carplay-apple'>
          <CatalogItemPreview
            title={t('Smartphone.CatalogItem.6.Title')}
            img={nav6}
          />
        </Link>
        <Link to='/smartphone/bmw-bluetooth'>
          <CatalogItemPreview
            title={t('Smartphone.CatalogItem.7.Title')}
            img={nav7}
          />
        </Link>
        <Link to='/smartphone/aux-port'>
          <CatalogItemPreview
            title={t('Smartphone.CatalogItem.8.Title')}
            img={nav8}
          />
        </Link>
        <Link to='/smartphone/alpha-one'>
          <CatalogItemPreview
            title={t('Smartphone.CatalogItem.9.Title')}
            img={nav9}
          />
        </Link>
      </div>
    </div>
  );
};

export default Catalog;
