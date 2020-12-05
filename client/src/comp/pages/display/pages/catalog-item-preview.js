import React from 'react';

const CatalogItemPreview = (props) => {
  return (
    <div className='cool-catalog-item'>
      <div className="cool-catalog-container">
        <div className='catalog-item-img'>
          <img src={props.img} alt='' />
        </div>
        <div className='catalog-item-text'>
          {props.title}
        </div>
      </div>
    </div>
  );
};

export default CatalogItemPreview;
