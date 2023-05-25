import React, { useState } from 'react';
import phoneIcon from './img/phone.svg';
import envelope from './img/envelope.svg';
import $ from 'jquery';
import axios from 'axios';
import Socials from "../socials/socials";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const { t } = useTranslation();

  const { name, phone } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = await JSON.stringify({ name, phone });
      const res = await axios.post('/api/email', body, config);
    } catch (err) {
      console.log(err);
    }
    $('.success-msg').fadeIn(300);
    setFormData({ ...formData, name: '', phone: '' });
    setTimeout(() => {
      $('.success-msg').fadeOut(300);
    }, 2500);
  };

  const onChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id='footer' className='contact-form'>
      <div className='contacts'>
        <div className='contact-title'>{t('Navbar.1')}</div>
        <div className='contact-item'>
          <img src={phoneIcon} alt='' />
          {t('Contacts.Phone')}
        </div>
        <div className='contact-item'>
          <img src={envelope} alt='' />
          {t('Contacts.Email')}
        </div>
        <div className='contact-item social-media-footer'>
          <Socials />
        </div>
      </div>
      <div className='form'>
        <div className='contact-title form-contact-title'>
          {t('Footer.FormTitle')}
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            onChange={(e) => onChange(e)}
            type='text'
            className='input'
            name='name'
            value={name}
            placeholder='Name'
          />
          <input
            onChange={(e) => onChange(e)}
            type='text'
            className='input'
            placeholder='Phone'
            value={phone}
            name='phone'
          />
          <input type='submit' className='input-submit' value='Send' />
        </form>
        <div className='success-msg'>✔️ {t('Form.Thank2')}</div>
      </div>
    </div>
  );
};

export default Footer;
