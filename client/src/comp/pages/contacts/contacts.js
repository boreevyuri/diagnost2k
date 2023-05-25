import React from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes, Link } from 'react-router-dom';
import arrow from './img/arrow.svg';

const Contacts = () => {
  const { t } = useTranslation();

  const page = 'contacts';

  const firstscreenRender = () => {
    let fsName = 'firstscreen-common fs-common-' + page;
    return (
      <div className={fsName}>
        <div className='mask'>
          <div className='text-container'>
            <Routes>
              <Route path={`/contacts`} element={
                <div className='cool-fs-title'>
                  <Link to={`/`}>
                    <div className='catalog-back-trigger common-back'>
                      <img src={arrow} alt='' />
                    </div>
                  </Link>
                  {t(`Navbar.1`)}
                </div>
              } />
            </Routes>
          </div>
        </div>
        <div className='fader-common'></div>
      </div>
    );
  };

  return (
    <div className='support'>
      {firstscreenRender()}
      <div className='main-wrapper'>
        {/*<div className='three-row'>*/}
        {/*  <div className='contact-col'>*/}
        {/*    <div className='cont-col-title'>*/}
        {/*      Czech republic <br />*/}
        {/*      Prague*/}
        {/*    </div>*/}
        {/*    <li>Diagnost2k s.r.o</li>*/}
        {/*    <li>Phone: +420 774 508 743</li>*/}
        {/*    <li>PSČ: 254 01</li>*/}
        {/*    <li>Adres: Ke Slunci 395, Jílové u Prahy</li>*/}
        {/*    <li>IČO: 09585648</li>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className='three-row'>
          <div className='contact-col'>
            <div className='cont-col-title'>
              Россия, Санкт-Петербург
            </div>
            <li>Address: ул. Варшавская д.9 корпус 1</li>
            <li>Phone: +7 (921) 423 21 71</li>
            <li>Email: info@diagnost2k.bizml.ru</li>
          </div>
        </div>
        <div className='three-row'>
          {/* <div className='contact-col'>
            <div className='cont-col-title'>
              {t('ContactsPage.3.1')} <br />
              {t('ContactsPage.3.2')}
            </div>
            <li>Address: 723 Olive Ave, Suite B, Vista, CA, 92083</li>
            <li>Phone: +1 (253) 846-2171</li>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
