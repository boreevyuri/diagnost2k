import React from 'react';
import arrow from '../img/arrow.svg';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { useTranslation } from 'react-i18next';

const CatalogItem = (props) => {
  const { t } = useTranslation();
  const popUpHandle = () => {
    $('.blur').addClass('active');
    $('.pop-up-form-container').fadeIn(100);
    props.setData(props.title);
  };

  return (
    <div className='catalog-item-component'>
      <div className='catalog-item-title'>
        <Link to='/tuning'>
          <div className='catalog-back-trigger'>
            <img src={arrow} alt='' />
          </div>
        </Link>
        {props.title}
        <div onClick={() => popUpHandle()} className='btn-catalog-item-form'>
          {t('Coding.ButtonRequest')}
        </div>
      </div>
      <div className='catalog-item-main-img'>
        <img src={props.img} alt='' />
      </div>
      <div class='catalog-item-main-text'>
        <div class='item-text-row'>
          <div className='title-two'>
            {t('Coding.CatalogItem.Title-features')}
          </div>
          {props.features}
        </div>
        <div
          onClick={() => popUpHandle()}
          className='btn-catalog-item-form-mobile'
        >
          {t('Coding.ButtonRequest')}
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
