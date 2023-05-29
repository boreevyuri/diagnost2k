import React, { Fragment, useState, useEffect } from 'react';
import arrow from './img/arrow.svg';
import axios from 'axios';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PopUpForm from '../../pop-up-form/pop-up-form';
import FirstScreenRenderer from "../../elements/first-screen-renderer";
import Footer from "../../footer/footer";

const ServicePage = (props) => {
  const [state, setState] = useState({
    loaded: false,
    service_name: '',
    data: [],
  });
  const { t } = useTranslation();
  const page = props.match.params.name;
  const backArrowTitle = 'ServicePage.Title';

  const popUpHandle = (name) => {
    $('.blur').addClass('active');
    $('.pop-up-form-container').fadeIn(100);
    setState({ ...state, service_name: name });
  };

  // const renderList = (data) => {
  //   console.log(data);
  //   // return props.list.map((item, index) => {
  //   //   return <li key={index}>{item}</li>;
  //   // });
  // };
  //
  // const renderDescList = (data) => {
  //   console.log(data);
  //   // return props.descList.map((item, index) => {
  //   //   return <li key={index}>{item}</li>;
  //   // });
  // };

  useEffect(() => {
    const getServicePage = async (id) => {
      let res = await axios.get(`/api/content/edit/${id}`);
      setState({
        ...state,
        data: res.data[0],
        loaded: true,
        title: res.data[0].content[0].value,
      });
    };
    getServicePage(props.match.params.id);
  }, [state, props.match.params.id]);

  const renderTextArea = (content) => {
    if (content.length > 1000) {
      return content.split('*').map((item) => {
        console.log(item);
        if (item) {
          return <li>{item}</li>;
        }
      });
    }
    return content;
  };

  const renderContent = () => {
    console.log(state.data);
    return state.data.content.map((item, index) => {
      return (
        <div className='item-text-row'>
          <div className='item-text-row'>
            <Fragment>
              {item.type === 'title' ? (
                <Fragment>
                  <div className='title-list'>{t(item.value)}</div>
                </Fragment>
              ) : (
                <Fragment></Fragment>
              )}
            </Fragment>
          </div>
          <div className='item-text-row'>
            <Fragment>
              {item.type === 'textarea' ? (
                <Fragment>
                  <div className='catalog-item-list'>
                    {renderTextArea(t(item.value))}
                  </div>
                </Fragment>
              ) : (
                <Fragment></Fragment>
              )}
            </Fragment>
          </div>
          <div className='item-text-row'>
            <Fragment>
              {item.type === 'list' ? (
                <Fragment>
                  <div className='catalog-item-list'>
                    <li>{t(item.value)}</li>
                  </div>
                </Fragment>
              ) : (
                <Fragment></Fragment>
              )}
            </Fragment>
          </div>
          <div className='item-text-row'>
            <Fragment>
              {item.type === 'desc-list' ? (
                <Fragment></Fragment>
              ) : (
                <Fragment>
                  <div className='big-text-container'>
                    {/* {renderDescList(item.value)} */}
                  </div>
                </Fragment>
              )}
            </Fragment>
          </div>
        </div>
      );
    });
  };

  const renderImg = () => {
    return state.data.content.map((item, index) => {
      return (
        <Fragment>
          {item.type === 'img' ? (
            <Fragment>
              <img src={`/${item.value}`} alt='' />
            </Fragment>
          ) : (
            <Fragment></Fragment>
          )}
        </Fragment>
      );
    });
  };

  return (
    <div className='service-page'>
      <PopUpForm service_name={state.service_name} />
      <FirstScreenRenderer page={page} title={backArrowTitle} />
      <div className='main-wrapper service-page'>
        <div className='catalog-item-component'>
          <Fragment>
            {state.loaded ? (
              <Fragment>
                <div className='catalog-item-title'>
                  <Link to={`/${props.match.params.name}`}>
                    <div className='catalog-back-trigger'>
                      <img src={arrow} alt='' />
                    </div>
                  </Link>
                  {t(state.title)}
                  <div
                    onClick={() => popUpHandle(t(state.title))}
                    className='btn-catalog-item-form'
                  >
                    {t(`Coding.ButtonRequest`)}
                  </div>
                </div>
                <div className='catalog-item-main-img'>
                  <Fragment>
                    {state.preview ? (
                      <Fragment></Fragment>
                    ) : (
                      <Fragment>
                        <img
                          src={`/${state.data.preview}`}
                          alt=''
                        />
                        {renderImg()}
                      </Fragment>
                    )}
                  </Fragment>
                </div>
                <div className='catalog-item-main-text'>
                  {renderContent()}
                  <div
                    onClick={() => popUpHandle(t(state.title))}
                    className='btn-catalog-item-form-mobile'
                  >
                    {t(`Coding.ButtonRequest`)}
                  </div>
                </div>
              </Fragment>
            ) : (
              <Fragment></Fragment>
            )}
          </Fragment>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ServicePage;
