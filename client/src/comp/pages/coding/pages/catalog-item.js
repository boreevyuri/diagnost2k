import React, { Fragment } from 'react';
import arrow from '../img/arrow.svg';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CatalogItem = (props) => {
  const { t } = useTranslation();
  const popUpHandle = () => {
    $('.blur').addClass('active');
    $('.pop-up-form-container').fadeIn(100);
    props.setData(props.title);
  };

  const renderList = () => {
    return props.list.map((item, index) => {
      return <li key={index}>{item}</li>;
    });
  };

  const renderDescList = () => {
    return props.descList.map((item, index) => {
      return <li key={index}>{item}</li>;
    });
  };

  return (
    <div className='catalog-item-component'>
      <div className='catalog-item-title'>
        <Link to='/coding'>
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
        <Fragment>
          {!props.img ? (
            <Fragment></Fragment>
          ) : (
              <Fragment>
                <img src={props.img} alt='' />
              </Fragment>
            )}
        </Fragment>

        <Fragment>
          {!props.img_1 ? (
            <Fragment></Fragment>
          ) : (
              <Fragment>
                <img src={props.img_1} alt='' />
              </Fragment>
            )}
        </Fragment>

        <Fragment>
          {!props.img_2 ? (
            <Fragment></Fragment>
          ) : (
              <Fragment>
                <img src={props.img_2} alt='' />
              </Fragment>
            )}
        </Fragment>
      </div>
      <div class='catalog-item-main-text'>
        <div class='item-text-row'>
          <Fragment>
            {!props.features ? (
              <Fragment></Fragment>
            ) : (
                <Fragment>
                  <div className='title-two'>{props.title_features}</div>
                  {props.features}
                </Fragment>
              )}
          </Fragment>
        </div>
        <div class='item-text-row'>
          <Fragment>
            {!props.listTitle ? (
              <Fragment></Fragment>
            ) : (
                <Fragment>
                  <div className='title-list'>{props.listTitle}</div>
                </Fragment>
              )}
          </Fragment>
        </div>
        <div class='item-text-row'>
          <Fragment>
            {!props.list ? (
              <Fragment></Fragment>
            ) : (
                <div className='catalog-item-list'>
                  <ul>{renderList()}</ul>
                </div>
              )}
          </Fragment>
        </div>
        <div class='item-text-row'>
          <Fragment>
            {!props.description ? (
              <Fragment></Fragment>
            ) : (
                <Fragment>
                  <div className='title-two'>{props.title_description}</div>
                  {props.description}
                </Fragment>
              )}
          </Fragment>
          <Fragment>
            {!props.descList ? (
              <Fragment></Fragment>
            ) : (
                <Fragment>
                  <div className='big-text-container'>{renderDescList()}</div>
                </Fragment>
              )}
          </Fragment>
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
