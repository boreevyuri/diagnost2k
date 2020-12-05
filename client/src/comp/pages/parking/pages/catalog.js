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

const Catalog = () => {
  const { t } = useTranslation();
  return (
    <div className='catalog-component'>
      <div className='catalog-catalog'>
        <div className='catalog-title'></div>

        <Link to='/parking/nav-update2020'>
          <CatalogItemPreview
            title={t('Parking.CatalogItem.1.Title')}
            img={nav1}
          />
        </Link>
        <Link to='/parking/nbt-evo-id5-id6'>
          <CatalogItemPreview
            title={t('Parking.CatalogItem.2.Title')}
            img={nav2}
          />
        </Link>
        <Link to='/parking/cic-nav-system'>
          <CatalogItemPreview
            title={t('Parking.CatalogItem.3.Title')}
            img={nav3}
          />
        </Link>
        <Link to='/parking/speed-limit'>
          <CatalogItemPreview
            title={t('Parking.CatalogItem.4.Title')}
            img={nav4}
          />
        </Link>
        <Link to='/parking/nbt-evo-id4'>
          <CatalogItemPreview
            title={t('Parking.CatalogItem.5.Title')}
            img={nav5}
          />
        </Link>
        <Link to='/parking/idrive-touch-controller'>
          <CatalogItemPreview
            title={t('Parking.CatalogItem.6.Title')}
            img={nav6}
          />
        </Link>
      </div>
    </div>
  );
};

export default Catalog;
