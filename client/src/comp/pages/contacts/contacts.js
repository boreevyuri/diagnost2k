import React from 'react';
import FirstScreenRenderer from "../../elements/first-screen-renderer";

const Contacts = () => {

  const page = 'contacts';
  const backArrowTitle = 'Navbar.1';

  return (
    <div className='support'>
      <FirstScreenRenderer page={page} title={backArrowTitle} />
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
