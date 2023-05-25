import React, { useState, Fragment } from 'react';
import axios from 'axios';
import $ from 'jquery';
import { useTranslation } from 'react-i18next';

const PopUpForm = (props) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    text: '',
    com_method: '',
  });

  const { name, phone, text, com_method } = formData;

  const closePopUp = () => {
    $('.blur').removeClass('active');
    $('.pop-up-form-container').fadeOut(300);
  };
  const inputItemHandle = (num, item) => {
    $('.input-item').removeClass('active');
    $('.input-item-' + num).addClass('active');
    setFormData({ ...formData, com_method: item });
  };

  const onChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const continueHandle = () => {
    if (
      formData.name.length < 2 ||
      formData.phone.length < 7 ||
      formData.com_method.length < 3
    ) {
      $('.error-alert').fadeIn(100);
      setTimeout(() => {
        $('.error-alert').fadeOut(100);
      }, 2000);
    } else {
      $('.puf-1').fadeOut(100);
      $('.puf-2').fadeIn(400);
    }
  };

  const sendHandle = async () => {
    $('.puf-2').fadeOut(100);
    $('.puf-3').fadeIn(400);
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      let service = props.service_name;
      const body = await JSON.stringify({
        name,
        phone,
        text,
        com_method,
        service,
      });
      console.log('Заявка: ', body)
      await axios.post('/api/email', body, config);

      setFormData({
        ...formData,
        name: '',
        phone: '',
        text: '',
        com_method: '',
      });
    } catch (err) {
      console.log(err);
    }
    setTimeout(() => {
      $('.pop-up-form-container').fadeOut(300);
      $('.input-item').removeClass('active');
      $('.blur').removeClass('active');
    }, 2500);
  };

  return (
    <div className='pop-up-form-container'>
      <div onClick={() => closePopUp()} className='close-background'></div>
      <div className='pop-up-form-content'>
        <div className='pop-up-form puf-1'>
          <div className='choose-input'>
            <div className='choose-input-title'>{t('Form.Choose')}</div>
            <div
              onClick={() => inputItemHandle(1, 'Whatsapp')}
              className='input-item input-item-1'
            >
              Whatsapp
            </div>
            <div
              onClick={() => inputItemHandle(2, 'Viber')}
              className='input-item input-item-2'
            >
              Viber
            </div>
            <div
              onClick={() => inputItemHandle(3, 'Telegram')}
              className='input-item input-item-3'
            >
              Telegram
            </div>
          </div>
          <div className='input-common-container'>
            <div className='input-container'>
              <div className='label'>{t('Form.Name')}</div>
              <input
                onChange={(e) => onChange(e)}
                name='name'
                type='text'
                value={name}
                autoComplete='off'
              />
            </div>
            <div className='input-container'>
              <div className='label'>{t('Form.Phone')}</div>
              <input
                onChange={(e) => onChange(e)}
                name='phone'
                type='text'
                value={phone}
                autoComplete='off'
              />
            </div>
          </div>

          <div className='btn-form-container'>
            <div onClick={() => continueHandle()} className='btn-form'>
              {t('Form.Continue')}
            </div>
          </div>
          <div className='error-alert'>{t('Form.Error')}</div>
          <Fragment>
            {!props.service_name ? (
              <Fragment></Fragment>
            ) : (
                <Fragment>
                  <div className='form-service-name'>
                    {t('Form.Service')} {props.service_name}
                  </div>
                </Fragment>
              )}
          </Fragment>
        </div>
        <div className='pop-up-form puf-2'>
          <div className='input-container'>
            <div className='label'>{t('Form.Question')}</div>
            <textarea
              onChange={(e) => onChange(e)}
              value={text}
              name='text'
              cols='30'
              rows='20'
            ></textarea>
          </div>
          <div className='btn-form-container'>
            <div onClick={() => sendHandle()} className='btn-form'>
              {t('Form.Send')}
            </div>
          </div>
        </div>
        <div className='pop-up-form puf-3'>
          <div className='final-check'>
            <svg
              className='checkmark'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 52 52'
            >
              <circle
                className='checkmark__circle'
                cx='26'
                cy='26'
                r='25'
                fill='none'
              />
              <path
                className='checkmark__check'
                fill='none'
                d='M14.1 27.2l7.1 7.2 16.7-16.8'
              />
            </svg>
          </div>
          <div className='thanks'>
            <div className='thanks-title'>{t('Form.Thank')}</div>
            {t('Form.Thank2')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpForm;
