import React from 'react';
import $ from 'jquery';
import Footer from '../footer/footer';
import MenuMobile from '../menu/menu-mobile/menu-mobile';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Firstpage = () => {
  const firstscreenItemHandle = (num) => {
    $('.firstscreen-item').removeClass('active');
    $('.fs-' + num).addClass('active');
  };

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { t, i18n } = useTranslation();

  return (
    <div className='firstpage'>
      <section>
        <div className='main-firstscreen'>
          <div
            onMouseEnter={() => firstscreenItemHandle(1)}
            className='firstscreen-item active fs-1'
          >
            <div className='mask'>
              <div className='fs-text-container fstc-1'>
                <div className='fs-title'>
                  {t('Firstpage.Firstscreen.1.Title')}
                </div>
                <div className='fs-subtitle'>
                  {t('Firstpage.Firstscreen.1.Subtitle')}
                </div>
                <div className='fs-text'>
                  {t('Firstpage.Firstscreen.1.Text')}
                </div>
              </div>
              <div className='fs-btn-container active fsbc-1'>
                <Link to='/diagnostika'>
                  <div className='fs-btn box-hover btn-more'>
                    {t('Firstpage.Firstscreen.Button')}
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => firstscreenItemHandle(2)}
            className='firstscreen-item fs-2'
          >
            <div className='mask'>
              <div className='fs-text-container '>
                <div className='fs-title title-transform'>
                  {t('Firstpage.Firstscreen.2.Title')}
                </div>
                <div className='fs-subtitle'>
                  {t('Firstpage.Firstscreen.2.Subtitle')}
                </div>
                <div className='fs-text'>
                  {t('Firstpage.Firstscreen.2.Text')}
                </div>
              </div>
              <div className='fs-btn-container active'>
                <Link to='/tuning'>
                  <div className='fs-btn box-hover btn-more'>
                    {t('Firstpage.Firstscreen.Button')}
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => firstscreenItemHandle(3)}
            className='firstscreen-item fs-3'
          >
            <div className='mask'>
              <div className='fs-text-container'>
                <div className='fs-title'>
                  {t('Firstpage.Firstscreen.3.Title')}
                </div>
                <div className='fs-subtitle'>
                  {t('Firstpage.Firstscreen.3.Subtitle')}
                </div>
                <div className='fs-text'>
                  {t('Firstpage.Firstscreen.3.Text')}
                </div>
              </div>
              <div className='fs-btn-container active'>
                <Link to='/file-service'>
                  <div className='fs-btn box-hover btn-more'>
                    {t('Firstpage.Firstscreen.Button')}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='mobile-firstscreen'>
          <Slider {...settings}>
            <div>
              <div className='mobile-firstscreen-item m-fs-1'>
                <div className='mobile-fs-text-container '>
                  <div className='mobile-fs-title'>
                    {t('Firstpage.Firstscreen.1.Title')}
                  </div>
                  <div className='mobile-fs-btn-container active'>
                    <Link to='/diagnostika'>
                      <div className='mobile-fs-btn'>
                        {t('Firstpage.Firstscreen.Button')}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='mobile-firstscreen-item m-fs-2'>
                <div className='mobile-fs-text-container '>
                  <div className='mobile-fs-title'>
                    {t('Firstpage.Firstscreen.2.Title')}
                  </div>
                  <div className='mobile-fs-btn-container active'>
                    <Link to='/tuning'>
                      <div className='mobile-fs-btn'>
                        {t('Firstpage.Firstscreen.Button')}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='mobile-firstscreen-item m-fs-3'>
                <div className='mobile-fs-text-container '>
                  <div className='mobile-fs-title'>
                    {t('Firstpage.Firstscreen.3.Title')}
                  </div>
                  <div className='mobile-fs-btn-container active'>
                    <Link to='/file-service'>
                      <div className='mobile-fs-btn'>
                        {t('Firstpage.Firstscreen.Button')}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <div className='main-wrapper'>
        <section>
          <MenuMobile />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Firstpage;
