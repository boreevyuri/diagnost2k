import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import $ from 'jquery';
import { useTranslation } from 'react-i18next';
import arrow from '../img/arrow.svg';

const Editor = (props) => {
  const [state, setState] = useState({
    lang: 'ru',
    cz: [],
    en: [],
    ru: [],
    preview: '',
    redirect: false,
    loaded: false,
  });

  const savePost = async () => {
    if (state.preview) {
      setState({ ...state, redirect: true });
      let body = {
        cz: state.cz,
        en: state.en,
        ru: state.ru,
        preview: state.preview,
      };
      await axios.put(`/api/content/${props.match.params.id}`, body);
    } else {
      $('.input-alert').fadeIn(100);
      setTimeout(() => {
        $('.input-alert').fadeOut(100);
      }, 3500);
    }
  };

  const { t } = useTranslation();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await axios.get(`/api/content/edit/${props.match.params.id}`);
    let { id, title, preview, content } = res.data[0];
    let czContent = [];
    for (let i = 0; i < content.length; i++) {
      let elem = content[i];
      if (!czContent[i]) {
        czContent[i] = {};
      }
      czContent[i].value = t(`${elem.value}`, { lng: 'cz' });
      czContent[i].type = elem.type;
    }
    let enContent = [];
    for (let i = 0; i < content.length; i++) {
      let elem = content[i];
      if (!enContent[i]) {
        enContent[i] = {};
      }
      enContent[i].value = t(`${elem.value}`, { lng: 'en' });
      enContent[i].type = elem.type;
    }
    let ruContent = [];
    for (let i = 0; i < content.length; i++) {
      let elem = content[i];
      if (!ruContent[i]) {
        ruContent[i] = {};
      }
      ruContent[i].value = t(`${elem.value}`, { lng: 'ru' });
      ruContent[i].type = elem.type;
    }
    setState({
      ...state,
      id: id,
      title: title,
      preview: preview,
      cz: czContent,
      ru: ruContent,
      en: enContent,
      loaded: true,
    });
  };

  const inputManager = (input) => {
    try {
      let obj = {};
      let content = state[state.lang];
      if (input == 1) {
        obj.type = 'title';
        obj.value = '';
      }
      if (input == 2) {
        obj.type = 'textarea';
        obj.value = '';
      }
      if (input == 3) {
        obj.type = 'list';
        obj.value = '';
      }
      if (input == 4) {
        obj.type = 'img';
        obj.value = '';
      }
      content.push(obj);
      setState({ ...state, [state.lang]: content });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteInput = (index) => {
    let languageCont = state[state.lang];
    delete languageCont[index];
    setState({ ...state, [state.lang]: languageCont });
  };

  const onChange = async (e, index) => {
    let languageCont = state[state.lang];
    languageCont[index].value = e.target.value;
    setState({ ...state, [state.lang]: languageCont });
  };

  const onChangePreview = async (e) => {
    try {
      let file = e.target.files[0];
      let name = e.target.name;
      var reader = new FileReader();
      var output = document.getElementById(name);
      reader.onload = () => {
        var dataURL = reader.result;
        output.src = dataURL;
      };
      reader.readAsDataURL(file);
      let formData = new FormData();
      formData.append('file', file);
      let res = await axios.post('/api/upload/', formData);
      setState({ ...state, preview: res.data });
    } catch (err) {
      console.log(err);
    }
  };
  const onChangeFiles = async (e, index) => {
    try {
      let file = e.target.files[0];
      let name = e.target.name;
      var reader = new FileReader();
      var output = document.getElementById(name);
      reader.onload = () => {
        var dataURL = reader.result;
        output.src = dataURL;
      };
      reader.readAsDataURL(file);
      let formData = new FormData();
      formData.append('file', file);
      let res = await axios.post('/api/upload/', formData);
      let languageCont = state[state.lang];
      languageCont[index].value = res.data;
      setState({ ...state, [state.lang]: languageCont });
    } catch (err) {
      console.log(err);
    }
  };

  const langControl = (lang, num) => {
    $('.lang-control').removeClass('act');
    $('.lang-' + num).addClass('act');
    setState({ ...state, lang: lang });
  };

  const onChangeName = async (e) => {
    console.log(state[state.lang]);
    let languageCont = state[state.lang];
    languageCont[0].value = e.target.value;
    setState({ ...state, [state.lang]: languageCont });
    console.log(state);
  };

  const renderInputManager = () => {
    if (state[state.lang]) {
      return state[state.lang].map((item, index) => {
        return (
          <div key={index}>
            <Fragment>
              {item.type == 'title' ? (
                <Fragment>
                  <div className='creator-input-container'>
                    <input
                      type='text'
                      placeholder='Новый заголовок'
                      onChange={(e) => onChange(e, index)}
                      value={item.value}
                    />
                    <div
                      onClick={() => deleteInput(index)}
                      className='delete-input'
                    >
                      X
                    </div>
                  </div>
                </Fragment>
              ) : (
                <Fragment></Fragment>
              )}
            </Fragment>
            <Fragment>
              {item.type == 'img' ? (
                <Fragment>
                  <div className='creator-input-container'>
                    <img id={`img${index}`} alt='' />
                    <div className='creator-input-label'>Новая картинка:</div>
                    <input
                      onChange={(e) => onChangeFiles(e, index)}
                      className='file-upload'
                      type='file'
                      name={`img${index}`}
                    />
                    <div
                      onClick={() => deleteInput(index)}
                      className='delete-input'
                    >
                      X
                    </div>
                  </div>
                </Fragment>
              ) : (
                <Fragment></Fragment>
              )}
            </Fragment>
            <Fragment>
              {item.type == 'textarea' ? (
                <Fragment>
                  <div className='creator-input-container'>
                    <textarea
                      onChange={(e) => onChange(e, index)}
                      value={item.value}
                      cols='30'
                      rows='10'
                      placeholder='Новый текст'
                    >
                      {item.value}
                    </textarea>
                    <div
                      onClick={() => deleteInput(index)}
                      className='delete-input'
                    >
                      X
                    </div>
                  </div>
                </Fragment>
              ) : (
                <Fragment></Fragment>
              )}
            </Fragment>
            <Fragment>
              {item.type == 'list' ? (
                <Fragment>
                  <div className='creator-input-container'>
                    <li>
                      {' '}
                      <input
                        type='text'
                        placeholder='Список'
                        onChange={(e) => onChange(e, index)}
                        value={item.value}
                      />
                    </li>
                    <div
                      onClick={() => deleteInput(index)}
                      className='delete-input'
                    >
                      X
                    </div>
                  </div>
                </Fragment>
              ) : (
                <Fragment></Fragment>
              )}
            </Fragment>
          </div>
        );
      });
    }
  };
  return (
    <div className='admin-page-container'>
      {
        <Fragment>
          {state.redirect ? (
            <Fragment>
              <Navigate to='/admin' replace />
            </Fragment>
          ) : (
            <Fragment></Fragment>
          )}
        </Fragment>
      }
      <Fragment>
        {state.loaded ? (
          <Fragment>
            <div className='creator-form-container'>
              <div className='creator-tools'>
                <div className='back-arrow'>
                  <Link to='/admin'>
                    <img src={arrow} alt='' />
                  </Link>
                </div>
                <div className='language-controller'>
                  <div
                    onClick={() => langControl('ru', 1)}
                    className='lang-control lang-1 act'
                  >
                    RU
                  </div>
                  <div
                    onClick={() => langControl('cz', 2)}
                    className='lang-control lang-2'
                  >
                    CZ
                  </div>
                  <div
                    onClick={() => langControl('en', 3)}
                    className='lang-control lang-3'
                  >
                    EN
                  </div>
                </div>
              </div>

              <form className='creator-form'>
                <input
                  onChange={(e) => onChangeName(e)}
                  name='mainTitle'
                  value={state[state.lang][0].value}
                  type='text'
                  placeholder='Название услуги'
                />
                <br />
                <div className='preview-container'>
                  <img
                    id='preview'
                    src={`https://diagnost2k.cz/${state.preview}`}
                    alt=''
                  />
                </div>

                <div className='creator-input-container'>
                  <div className='creator-input-label'>Превьею:</div>
                  <input
                    name='preview'
                    className='file-upload'
                    onChange={(e) => onChangePreview(e)}
                    type='file'
                  />
                </div>
                {renderInputManager()}
              </form>
              <div className='input-manager'>
                <div onClick={() => inputManager(1)} className='manager-btn'>
                  Заголовок
                </div>
                <div onClick={() => inputManager(2)} className='manager-btn'>
                  Текст
                </div>
                <div onClick={() => inputManager(3)} className='manager-btn'>
                  Список
                </div>
                <div onClick={() => inputManager(4)} className='manager-btn'>
                  Изображение
                </div>
              </div>
              <div onClick={() => savePost()} className='btn-creator'>
                Сохранить
              </div>
              <div className='input-alert'>
                Для сохранения поста нужно ПРЕВЬЕЮ
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment></Fragment>
        )}
      </Fragment>
    </div>
  );
};

export default Editor;
