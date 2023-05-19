import React from 'react';
import Footer from '../../footer/footer';
import { useTranslation } from 'react-i18next';

const Diagnostika = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className='diagnostika'>
      <div className='firstscreen-common fs-common-1 fs-notcommon'>
        <div className='mask'>
          <div className='text-container'>
            <div className='fs-title'>{t('Diagnostik.Firstscreen.Title')}</div>
          </div>
        </div>
        <div className='fader-common'></div>
      </div>
      <div className='main-wrapper'>
        <div className='about'>
          <div className='two-row about-row'>
            {t('Diagnostik.About_1.1')}
            <br />
            <br />
            {t('Diagnostik.About_1.2')}
            <br />
            {t('Diagnostik.About_1.3')}
            <br />
            <br />
            {t('Diagnostik.About_1.4')}
            <br />
            <br />
            {t('Diagnostik.About_1.5')}
            <br />
            <br />
            {t('Diagnostik.About_1.6')}
            <br />
            <br />
            {t('Diagnostik.About_1.7')}
            <br />
            <br />
            {t('Diagnostik.About_1.8')}
            <br />
            <br />
            {t('Diagnostik.About_1.9')}
            <br />
            <br />
            {t('Diagnostik.About_1.10')}
            <br />
            <br />
          </div>

          <div className='two-row about-row'>
            {t('Diagnostik.About_1.11')}
            <br />
            <br />
            {t('Diagnostik.About_1.12')}
            <br />
            <br />
            {t('Diagnostik.About_1.13')}
            <br />
            <br />
            {t('Diagnostik.About_1.14')}
            <br />
            <br />
            {t('Diagnostik.About_1.15')}
            <br />
            <br />
            {t('Diagnostik.About_1.16')}
            <br />
            <br />
            {t('Diagnostik.About_1.17')}
            <br />
            <br />
            {t('Diagnostik.About_1.18')}
            <br />
            <br />
            {t('Diagnostik.About_1.19')}
            <br />
            <br />
            {t('Diagnostik.About_1.20')}
            <br /> <br />
          </div>
        </div>
        <div className='catalog'>
          <div className='title'>{t('Diagnostik.Catalog.Title')}</div>
          <div className='subtitle'>{t('Diagnostik.Catalog.Subtitle')}</div>
          <div className='three-row catalog-row'>
            <p>BMW 1 SERIES</p>
            <p>BMW 1 SERIES CONVERTIBLE</p>
            <p>BMW 1 SERIES COUPE</p>
            <p>BMW 1 SERIES M COUPE</p>
            <p>BMW 2 SERIES</p>
            <p>BMW 2 SERIES ACTIVE TOURER</p>
            <p>BMW 2 SERIES CONVERTIBLE</p>
            <p>BMW 2 SERIES GRAN TOURER</p>
            <p>BMW 3 SERIES</p>
            <p>BMW 3 SERIES COMPACT</p>
            <p>BMW 3 SERIES CONVERTIBLE</p>
            <p>BMW 3 SERIES COUPE</p>
            <p>BMW 3 SERIES GRAN TURISMO</p>
            <p>BMW 3 SERIES TOURING</p>
            <p>BMW 4 SERIES</p>
            <p>BMW 4 SERIES CONVERTIBLE</p>
          </div>

          <div className='three-row catalog-row'>
            <p>BMW 4 SERIES GRAN COUPE</p>
            <p>BMW 5 SERIES</p>
            <p>BMW 5 SERIES GRAN TURISMO</p>
            <p>BMW 6 SERIES</p>
            <p>BMW 6 SERIES CONVERTIBLE</p>
            <p>BMW 6 SERIES GRAN COUPE</p>
            <p>BMW 6 SERIES GT</p>
            <p>BMW 7 SERIES GRAN COUPE</p>
            <p>BMW 7 SERIES</p>
            <p>BMW 8 SERIES</p>
            <p>BMW ACTIVEHYBRID 3</p>
            <p>BMW ACTIVEHYBRID 5</p>
            <p>BMW ACTIVEHYBRID 7</p>
            <p>BMW I3</p>
            <p>BMW I8</p>
            <p>BMW ISETTA</p>
          </div>
          <div className='three-row catalog-row'>
            <p>BMW M COUPE</p>
            <p>BMW M ROADSTER</p>
            <p>BMW M2</p>
            <p>BMW M3</p>
            <p>BMW M3 CONVERTIBLE</p>
            <p>BMW M3 COUPE</p>
            <p>BMW M4 COUPE</p>
            <p>BMW M5</p>
            <p>BMW M6</p>
            <p>BMW X1</p>
            <p>BMW X2</p>
            <p>BMW X3</p>
            <p>BMW X4</p>
            <p>BMW X5</p>
            <p>BMW X5 M</p>
            <p>BMW X6</p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Diagnostika;
