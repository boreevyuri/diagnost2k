import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import CatalogItemPreview from './catalog-item-preview';
import nav1 from '../img/catalog-item-1.jpg';
import nav2 from '../img/catalog-item-2.jpg';
import nav3 from '../img/catalog-item-3.jpg';
import nav4 from '../img/catalog-item-4.jpg';
import nav5 from '../img/catalog-item-5.jpg';
import nav6 from '../img/catalog-item-6.jpg';
import nav7 from '../img/catalog-item-7.jpg';
import nav8 from '../img/catalog-item-8.jpg';
import nav9 from '../img/catalog-item-9.jpg';
import nav10 from '../img/catalog-item-10.jpg';
import nav11 from '../img/catalog-item-11.jpg';
import nav12 from '../img/catalog-item-12.jpg';
import nav13 from '../img/catalog-item-13.jpg';

const Catalog = (props) => {
  const clickLink = (name) => {
    console.log(name);
  };

  const { t } = useTranslation();
  return (
    <div>
      <div className='about'>
        <div className='two-row about-row'>
          {t('Coding.About.1')}
          <br />
          <br />
          {t('Coding.About.2')}
        </div>
        <div className='two-row about-row'>
          {t('Coding.About.3')}
          <br />
          <br />
          {t('Coding.About.4')}
        </div>
      </div>
      <div className='catalog-component'>
        <div className='catalog-catalog'>
          <Link to='/coding/seria-f'>
            <CatalogItemPreview
              title={t('Coding.CatalogItem.11.Title')}
              img={nav11}
            />
          </Link>
          <Link to='/coding/seria-e'>
            <CatalogItemPreview
              title={t('Coding.CatalogItem.12.Title')}
              img={nav12}
            />
          </Link>
          <Link to='/coding/seria-j'>
            <CatalogItemPreview
              title={t('Coding.CatalogItem.13.Title')}
              img={nav13}
            />
          </Link>
          <Link to='/coding/bluetooth-activation'>
            <CatalogItemPreview
              title={t('Coding.CatalogItem.1.Title')}
              img={nav1}
            />
          </Link>
          <Link to='/coding/audio-bluetooth-aptx'>
            <CatalogItemPreview
              onCLick={() => clickLink(t('Coding.CatalogItem.2.Title'))}
              title={t('Coding.CatalogItem.2.Title')}
              img={nav2}
            />
          </Link>
          <Link to='/coding/video-unlock'>
            <CatalogItemPreview
              title={t('Coding.CatalogItem.3.Title')}
              img={nav3}
            />
          </Link>
          <Link to='/coding/apple-car-play-activation'>
            <CatalogItemPreview
              title={t('Coding.CatalogItem.4.Title')}
              img={nav4}
            />
          </Link>
          <Link to='/coding/screen-mirror-activation'>
            <CatalogItemPreview
              title={t('Coding.CatalogItem.5.Title')}
              img={nav5}
            />
          </Link>
          <Link to='/coding/denial-of-responsibility'>
            <CatalogItemPreview
              title={t('Coding.CatalogItem.6.Title')}
              img={nav6}
            />
          </Link>
          <Link to='/coding/russification'>
            <CatalogItemPreview
              title={t('Coding.CatalogItem.7.Title')}
              img={nav7}
            />
          </Link>
          <Link to='/coding/sport-display'>
            <CatalogItemPreview
              title={t('Coding.CatalogItem.8.Title')}
              img={nav8}
            />
          </Link>
          <Link to='/coding/day-light-off'>
            <CatalogItemPreview
              title={t('Coding.CatalogItem.9.Title')}
              img={nav9}
            />
          </Link>
          <Link to='/coding/id5-interface'>
            <CatalogItemPreview
              title={t('Coding.CatalogItem.10.Title')}
              img={nav10}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
