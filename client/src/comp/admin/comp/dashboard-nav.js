import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const DashboardNav = (props) => {
  const changeFocus = (name) => {
    props.changeFocus(name);
  };

  const mainRow = (i, name) => {
    $('.row-item').removeClass('act');
    $('.main-row-item-' + i).toggleClass('act');
    if (i == 1) {
      $('.posts-table').addClass('act');
      $('.second-panel').removeClass('act');
      $('.create-btn').addClass('act');
    }
    if (i == 2) {
      $('.posts-table').removeClass('act');
      $('.second-panel').toggleClass('act');
      $('.create-btn').removeClass('act');
    }
    changeFocus(name);
  };
  const secondRow = (i, name) => {
    $('.second-row-item').removeClass('act');
    $('.second-row-item-' + i).toggleClass('act');
    $('.service-all').removeClass('act');
    $('.create-btn').addClass('act');
    $('.service-' + name).addClass('act');
    changeFocus(name);
  };

  const create = () => {
    props.create();
  };

  return (
    <div className='admin-nav-panel'>
      <div className='admin-panel-row'>
        <div
          onClick={() => mainRow(1, 'posts')}
          className='row-item act main-row-item-1'
        >
          Посты
        </div>
        <div
          onClick={() => mainRow(2, 'all')}
          className='row-item main-row-item-2'
        >
          Услуги
        </div>
      </div>
      <div className='admin-panel-row second-panel '>
        <div
          onClick={() => secondRow(1, 'coding')}
          className='row-item second-row-item second-row-item-1'
        >
          Кодинг
        </div>
        <div
          onClick={() => secondRow(2, 'multimedia')}
          className='row-item second-row-item second-row-item-2'
        >
          Мультимедия
        </div>
        <div
          onClick={() => secondRow(3, 'navigation')}
          className='row-item second-row-item second-row-item-3'
        >
          Навигация
        </div>
        <div
          onClick={() => secondRow(4, 'display')}
          className='row-item second-row-item second-row-item-4'
        >
          Дисплеи
        </div>
        <div
          onClick={() => secondRow(5, 'parking')}
          className='row-item second-row-item second-row-item-5'
        >
          Парковка
        </div>
        <div
          onClick={() => secondRow(6, 'other')}
          className='row-item second-row-item second-row-item-6'
        >
          Другие
        </div>
      </div>

      <div onClick={() => create()} className='create-btn act'>
        +
      </div>
    </div>
  );
};

export default DashboardNav;
