import React from 'react';
import { Link } from 'react-router-dom';
import reason1 from '../img/1.png';
import reason2 from '../img/2.png';
import reason3 from '../img/3.png';
import reason4 from '../img/4.png';
import reason5 from '../img/5.png';
import Catalog from './catalog.js';
import item1 from '../img/catalog-item-1.jpg';
import item2 from '../img/catalog-item-2.jpg';
import item3 from '../img/catalog-item-3.jpg';
import Chooser from '../comp/chooser.js';
import { useTranslation } from 'react-i18next';

const TuningPage = (props) => {
  const { t } = useTranslation();
  const redirect = async (link) => {
    props.redirect(link);
  };
  return (
    <div className='tuning'>
      <Chooser redirect={(link) => redirect(link)} />
      <div className='about'>
        <div className='two-row about-row'>
          {t('Tuning.About_1.1')}
          <br />
          <br />
          {t('Tuning.About_1.2')}
        </div>
        <div className='two-row about-row'>
          {t('Tuning.About_1.3')}
          <br />
          <br />
          {t('Tuning.About_1.4')}
        </div>
      </div>
      <div className='gearbox-container'>
        <div className='two-row'>
          <Link to='/tuning/gearbox'>
            <div className='gearbox-item gearbox-bmw'>
              <div className='gearbox-title'>{t('Tuning.Gearbox.1')}</div>
            </div>
          </Link>
        </div>
        <div className='two-row'>
          <Link to='/tuning/gearbox'>
            <div className='gearbox-item gearbox-vag'>
              <div className='gearbox-title'>{t('Tuning.Gearbox.2')}</div>
            </div>
          </Link>
        </div>
      </div>
      <div className='reason'>
        <div className='reason-title'>{t('Tuning.Reason.Title')}</div>
        <div className='reason-item'>
          <div className='reason-img'>
            <img src={reason1} alt='' />
          </div>
          <div className='reason-text'>{t('Tuning.Reason.1')}</div>
        </div>
        <div className='reason-item'>
          <div className='reason-img'>
            <img src={reason2} alt='' />
          </div>
          <div className='reason-text'>{t('Tuning.Reason.2')}</div>
        </div>
        <div className='reason-item'>
          <div className='reason-img'>
            <img src={reason3} alt='' />
          </div>
          <div className='reason-text'>{t('Tuning.Reason.3')}</div>
        </div>
        <div className='reason-item'>
          <div className='reason-img'>
            <img src={reason4} alt='' />
          </div>
          <div className='reason-text'>{t('Tuning.Reason.4')}</div>
        </div>
        <div className='reason-item'>
          <div className='reason-img'>
            <img src={reason5} alt='' />
          </div>
          <div className='reason-text'>{t('Tuning.Reason.5')}</div>
        </div>
      </div>
      <div className='cool-about-section'>
        <div className='three-row cool-about-row'>
          <div className='cool-about-title'>
            {t('Tuning.CatalogItem.1.Title')}
          </div>
          <br />
          <br />
          {t('Tuning.CatalogItem.1.Features')}
        </div>

        <div className='three-row cool-about-row'>
          <div className='cool-about-title'>
            {t('Tuning.CatalogItem.2.Title')}
          </div>
          <br />
          <br />
          {t('Tuning.CatalogItem.2.Features')}
        </div>

        <div className='three-row cool-about-row'>
          <div className='cool-about-title'>
            {t('Tuning.CatalogItem.3.Title')}
          </div>
          <br />
          <br />
          {t('Tuning.CatalogItem.3.Features')}
        </div>
      </div>
      <div className='about'>
        <div className='title'>{t('Tuning.Works.Title')}</div>
        <div className='two-row about-row'>
          {t('Tuning.Works.1')}
          <br />
          <br />
          {t('Tuning.Works.2')}
          <br />
          <br />
          {t('Tuning.Works.3')}
        </div>
        <div className='two-row about-row'>
          {t('Tuning.Works.4')}
          <br />
          <br />
          {t('Tuning.Works.5')}
          <br />
          <br />
          {t('Tuning.Works.6')}
        </div>
      </div>
    </div>
  );
};

export default TuningPage;
