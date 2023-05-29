import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import CatalogItemPreview from './catalog-item-preview';
import nav1 from '../img/preview/catalog-item-1.jpg';
import nav2 from '../img/preview/catalog-item-2.jpg';
import nav3 from '../img/preview/catalog-item-3.jpg';
import nav4 from '../img/preview/catalog-item-4.jpg';
import nav5 from '../img/preview/catalog-item-5.jpg';
import nav6 from '../img/preview/catalog-item-6.jpg';

const Catalog = () => {
  const { t } = useTranslation();
  return (
    <div className='catalog-component'>
      <div className='catalog-catalog'>
        <div className='catalog-title'></div>

        <Link to='/navigation/nav-update2020'>
          <CatalogItemPreview
            title={t('Navigation.CatalogItem.1.Title')}
            img={nav1}
          />
        </Link>
        <Link to='/navigation/nbt-evo-id5-id6'>
          <CatalogItemPreview
            title={t('Navigation.CatalogItem.2.Title')}
            img={nav2}
          />
        </Link>
        <Link to='/navigation/cic-nav-system'>
          <CatalogItemPreview
            title={t('Navigation.CatalogItem.3.Title')}
            img={nav3}
          />
        </Link>
        <Link to='/navigation/speed-limit'>
          <CatalogItemPreview
            title={t('Navigation.CatalogItem.4.Title')}
            img={nav4}
          />
        </Link>
        <Link to='/navigation/nbt-evo-id4'>
          <CatalogItemPreview
            title={t('Navigation.CatalogItem.5.Title')}
            img={nav5}
          />
        </Link>
        <Link to='/navigation/idrive-touch-controller'>
          <CatalogItemPreview
            title={t('Navigation.CatalogItem.6.Title')}
            img={nav6}
          />
        </Link>
      </div>
      {/*TODO: Убрать этот хардкод*/}
      <div className='about'>
        <div className='two-row about-row'>
          Когда вы регулярно обновляете навигацию BMW, ваша карта показывает
          вам:
          <br />
          <br />
          1. Открыты новые дороги или закрыты существующие.
          <br />
          2. Экономия времени для ваших обычных поездок.
          <br />
          3. Ежегодно добавляется почти 300 000 новых достопримечательностей
          (отели, заправки, кафе и т. Д.)
        </div>
        <div className='two-row about-row'>
          BMW рекомендует выполнять обновление карты навигационной системы BMW
          не реже одного раза в год. <br />
          <br />
          Тем не менее, для тех, кто много ездит, лучше получать новую
          информацию каждые три-шесть месяцев.
        </div>
      </div>
    </div>
  );
};

export default Catalog;
