import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import CatalogItemPreview from './catalog-item-preview';
import nav1 from '../img/preview/catalog-item-1.jpg';
import nav2 from '../img/preview/catalog-item-2.jpg';
import nav3 from '../img/preview/catalog-item-3.jpg';

const Catalog = () => {
  const { t } = useTranslation();
  return (
    <div className='catalog-component'>
      <div className='catalog-catalog'>
        <div className='catalog-title'></div>
        <Link to='/tuning/turbo-boost'>
          <CatalogItemPreview
            title={t('Tuning.CatalogItem.1.Title')}
            img={nav1}
          />
        </Link>
        <Link to='/tuning/atmospher-engine-boost'>
          <CatalogItemPreview
            title={t('Tuning.CatalogItem.2.Title')}
            img={nav2}
          />
        </Link>
        <Link to='/tuning/diesel-engine-boost'>
          <CatalogItemPreview
            title={t('Tuning.CatalogItem.3.Title')}
            img={nav3}
          />
        </Link>
      </div>
    </div>
  );
};

export default Catalog;
