import React, { useState, Fragment } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import $ from 'jquery';
import arrow from '../img/arrow.svg';

const ServiceCreater = () => {
  const [state, setState] = useState({
    title: '',
    preview: '',
    content: [],
    redirect: false,
  });

  const savePost = async () => {
    if (state.title.length > 5 && state.preview) {
      setState({ ...state, redirect: true });
      await axios.post('/api/others/', state);
      console.log(state);
    } else {
      $('.input-alert').fadeIn(100);
      setTimeout(() => {
        $('.input-alert').fadeOut(100);
      }, 3500);
    }
  };

  const inputManager = (input) => {
    try {
      let obj = {};
      let content = state.content;
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
      content.push(obj);
      setState({ ...state, content: content });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteInput = (index) => {
    let content = state.content;
    delete content[index];
    setState({ ...state, content: content });
  };

  const onChange = async (e, index) => {
    let content = state.content;
    content[index].value = e.target.value;
    setState({ ...state, content: content });
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

  const onChangeName = async (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const renderInputManager = () => {
    return state.content.map((item, index) => {
      return (
        <div key={index}>
          <Fragment>
            {item.type == 'title' ? (
              <Fragment>
                <div className='creater-input-container'>
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
            {item.type == 'textarea' ? (
              <Fragment>
                <div className='creater-input-container'>
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
                <div className='creater-input-container'>
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
  };

  return (
    <div className='admin-page-container'>
      {
        <Fragment>
          {state.redirect ? (
            <Fragment>
              <Redirect to='/others' />
            </Fragment>
          ) : (
            <Fragment></Fragment>
          )}
        </Fragment>
      }
      <div className='admin-title'>
        <div className='back-arrow'>
          <Link to='/others'>
            <img src={arrow} alt='' />
          </Link>
        </div>
      </div>
      <div className='creater-form-container'>
        <form className='creater-form'>
          <input
            onChange={(e) => onChangeName(e)}
            name='title'
            value={state.name}
            type='text'
            placeholder='Название статьи'
          />
          <br />
          <div className='preview-container'>
            <img id='preview' alt='' />
          </div>

          <div className='creater-input-container'>
            <div className='creater-input-label'>Превьею:</div>
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
        </div>
        <div onClick={() => savePost()} className='btn-creater'>
          Сохранить
        </div>
        <div className='input-alert'>
          Для сохранения поста нужно НАЗВАНИЕ и ПРЕВЬЕЮ
        </div>
      </div>
    </div>
  );
};

export default ServiceCreater;
