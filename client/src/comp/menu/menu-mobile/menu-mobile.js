import React from 'react';
import { Link } from 'react-router-dom';
import car from '../img/car.svg';
import key from '../img/key.svg';
import navigation from '../img/navigation.svg';
import parking from '../img/parking.svg';
import phone from '../img/phone.svg';
import cog from '../img/cog.svg';
import speed from '../img/speed.svg';
import usb from '../img/usb.svg';
import chip from '../img/chip.svg';
import { useTranslation } from 'react-i18next';

const MenuMobile = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className='menu-mobile'>
      <Link to='/coding'>
        <div className='menu-item-mobile'>
          <div className='menu-item-img-mobile'>
            <img src={usb} alt='' />
          </div>
          <div className='menu-item-text-mobile'>{t('Menu.9')}</div>
        </div>
      </Link>
      <Link to='/smartphone'>
        <div className='menu-item-mobile'>
          <div className='menu-item-img-mobile'>
            <img src={phone} alt='' />
          </div>
          <div className='menu-item-text-mobile'>{t('Menu.1')}</div>
        </div>
      </Link>
      <Link to='/navigation'>
        <div className='menu-item-mobile'>
          <div className='menu-item-img-mobile'>
            <img src={navigation} alt='' />
          </div>
          <div className='menu-item-text'>{t('Menu.2')}</div>
        </div>
      </Link>
      <Link to='/displays'>
        <div className='menu-item-mobile'>
          <div className='menu-item-img-mobile'>
            <img src={speed} alt='' />
          </div>
          <div className='menu-item-text-mobile'>{t('Menu.3')}</div>
        </div>
      </Link>
      <Link to='/diagnostika'>
        <div className='menu-item-mobile'>
          <div className='menu-item-img-mobile'>
            <img src={cog} alt='' />
          </div>
          <div className='menu-item-text-mobile'>{t('Menu.4')}</div>
        </div>
      </Link>
      <Link to='/parking'>
        <div className='menu-item-mobile'>
          <div className='menu-item-img-mobile'>
            <img src={parking} alt='' />
          </div>
          <div className='menu-item-text-mobile'>{t('Menu.5')}</div>
        </div>
      </Link>
      <Link to='/tuning'>
        <div className='menu-item-mobile'>
          <div className='menu-item-img-mobile'>
            <img src={chip} alt='' />
          </div>
          <div className='menu-item-text-mobile'>{t('Menu.6')}</div>
        </div>
      </Link>
      <Link to='/autopick'>
        <div className='menu-item-mobile'>
          <div className='menu-item-img-mobile'>
            <img src={car} alt='' />
          </div>
          <div className='menu-item-text-mobile'>{t('Menu.7')}</div>
        </div>
      </Link>
      <Link to='/other'>
        <div className='menu-item-mobile'>
          <div className='menu-item-img-mobile'>
            <img src={key} alt='' />
          </div>
          <div className='menu-item-text-mobile'>{t('Menu.8')}</div>
        </div>
      </Link>
    </div>
  );
};

export default MenuMobile;
