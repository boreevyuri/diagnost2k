import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import $ from 'jquery';
import arrow from '../img/arrow.svg';

const ServiceCreater = (props) => {
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
      let body = {
        cz: state.cz,
        en: state.en,
        ru: state.ru,
        preview: state.preview,
      };
      let res = await axios.post(
        `/api/content/${props.match.params.focus}`,
        body
      );
      if (res.data == 'OK') setState({ ...state, redirect: true });
    } else {
      $('.input-alert').fadeIn(100);
      setTimeout(() => {
        $('.input-alert').fadeOut(100);
      }, 3500);
    }
  };

  useEffect(() => {
    start();
    //prodaction();
  }, []);

  const prodaction = async () => {
    let testCz = [
      {
        type: 'mainTitle',
        value: 'Car Washington',
      },
      {
        type: 'title',
        value: 'placeholder',
      },
    ];
    let testEn = [
      {
        type: 'mainTitle',
        value: 'Car Washington',
      },
      {
        type: 'title',
        value: 'placeholder',
      },
    ];
    let testRu = [
      {
        type: 'mainTitle',
        value: 'Car Washington',
      },
      {
        type: 'title',
        value: 'placeholder',
      },
    ];
    let testPreview = '/uploads/ag_03.jpg';
    let body = {
      cz: testCz,
      en: testEn,
      ru: testRu,
      preview: testPreview,
    };
    console.log(body);
    await axios.post(`/api/content/${props.match.params.focus}`, body);
  };

  const start = () => {
    let objRu = {};
    objRu.type = 'mainTitle';
    objRu.value = '';
    let objCz = {};
    objCz.type = 'mainTitle';
    objCz.value = '';
    let objEn = {};
    objEn.type = 'mainTitle';
    objEn.value = '';
    let czCont = state['cz'];
    let ruCont = state['ru'];
    let enCont = state['en'];
    czCont.push(objCz);
    ruCont.push(objRu);
    enCont.push(objEn);
    setState({ ...state, cz: czCont, ru: ruCont, en: enCont, loaded: true });
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
              <Redirect to='/admin' />
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
                  <img id='preview' alt='' />
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

export default ServiceCreater;
