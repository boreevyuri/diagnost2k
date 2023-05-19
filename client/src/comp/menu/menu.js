import React from 'react';
import { Route, Link } from 'react-router-dom';
import car from './img/car.svg';
import more from './img/more.svg';
import navigation from './img/navigation.svg';
import parking from './img/parking.svg';
import phone from './img/phone.svg';
import cog from './img/cog.svg';
import speed from './img/speed.svg';
import usb from './img/usb.svg';
import chip from './img/chip.svg';
import upload from './img/upload.svg';
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className='menu'>
      <Link to='/coding'>
        <div className='menu-item'>
          <div className='menu-item-img'>
            <img src={usb} alt='' />
          </div>
          <div className='menu-item-text'>{t('Menu.9')}</div>
        </div>
      </Link>
      <Link to='/smartphone'>
        <div className='menu-item'>
          <div className='menu-item-img'>
            <img src={phone} alt='' />
          </div>
          <div className='menu-item-text'>{t('Menu.1')}</div>
        </div>
      </Link>
      <Link to='/navigation'>
        <div className='menu-item'>
          <div className='menu-item-img'>
            <img src={navigation} alt='' />
          </div>
          <div className='menu-item-text'>{t('Menu.2')}</div>
        </div>
      </Link>

      <Link to='/displays'>
        <div className='menu-item'>
          <div className='menu-item-img'>
            <img src={speed} alt='' />
          </div>
          <div className='menu-item-text'>{t('Menu.3')}</div>
        </div>
      </Link>
      <Link to='/diagnostika'>
        <div className='menu-item'>
          <div className='menu-item-img'>
            <img src={cog} alt='' />
          </div>
          <div className='menu-item-text'>{t('Menu.4')}</div>
        </div>
      </Link>
      <Link to='/parking'>
        <div className='menu-item'>
          <div className='menu-item-img'>
            <img src={parking} alt='' />
          </div>
          <div className='menu-item-text'>{t('Menu.5')}</div>
        </div>
      </Link>
      <Link to='/tuning'>
        <div className='menu-item'>
          <div className='menu-item-img'>
            <img src={chip} alt='' />
          </div>
          <div className='menu-item-text'>{t('Menu.6')}</div>
        </div>
      </Link>
      <Link to='/autopick'>
        <div className='menu-item'>
          <div className='menu-item-img'>
            <img src={car} alt='' />
          </div>
          <div className='menu-item-text'>{t('Menu.7')}</div>
        </div>
      </Link>
      <Link to='/file-service'>
        <div className='menu-item'>
          <div className='menu-item-img'>
            <img src={upload} alt='' />
          </div>
          <div className='menu-item-text'>{t('Menu.10')}</div>
        </div>
      </Link>
      <Link to='/other'>
        <div className='menu-item'>
          <div className='menu-item-img'>
            <img src={more} alt='' />
          </div>
          <div className='menu-item-text'>{t('Menu.8')}</div>
        </div>
      </Link>
    </div>
  );
};

export default Menu;
