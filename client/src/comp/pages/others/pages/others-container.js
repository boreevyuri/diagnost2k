import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import key from '../img/bmw-key.jpg';

const Others = (props) => {
  const renderItems = () => {
    return props.data.map((item, index) => {
      return (
        <div key={index}>
          <Link to={`/service/${item.id}`}>
            <div className='cool-catalog-item'>
              <div className='cool-catalog-container'>
                <div className='catalog-item-img'>
                  <img src={`/${item.value}`} alt='' />
                </div>
                <div className='catalog-item-text'>{item.title}</div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };

  const { t } = useTranslation();
  return (
    <div>
      <div className='catalog-component'>
        <div className='catalog-catalog'>
          <div>
            <Link to='/bmw-key'>
              <div className='cool-catalog-item'>
                <div className='cool-catalog-container'>
                  <div className='catalog-item-img'>
                    <img src={key} alt='' />
                  </div>
                  <div className='catalog-item-text'>Mega Display BMW Key</div>
                </div>
              </div>
            </Link>
          </div>
          {renderItems()}
        </div>
      </div>
    </div>
  );
};

export default Others;
