import React from 'react';
import { useTranslation } from 'react-i18next';

const Gearbox = () => {
  const { t } = useTranslation();
  return (
    <div className='gearbox-page'>
      <div className='about'>
        <div className='title'>{t('Tuning.Gearbox.Title')}</div>
        <div className='two-row about-row'>
          {t('Tuning.Gearbox.Page.1')}
          <br />
          <br />
          {t('Tuning.Gearbox.Page.2')}
          <br />
          <br />
          {t('Tuning.Gearbox.Page.3')}
          <br />
          <br />
          {t('Tuning.Gearbox.Page.4')}
        </div>
        <div className='two-row about-row'>
          {t('Tuning.Gearbox.Page.5')}
          <br />
          <br />
          {t('Tuning.Gearbox.Page.6')}
          <br />
          <br />
          {t('Tuning.Gearbox.Page.7')}
        </div>
      </div>
    </div>
  );
};

export default Gearbox;
