import React, { useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../img/arrow.svg';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import $ from 'jquery';
import PopUpForm from '../../../pop-up-form/pop-up-form';
import ReactMarkdown from 'react-markdown'

const CatalogItemPage = (props) => {
  const { t } = useTranslation();

  const [state, setState] = useState({
    content: [],
    loaded: false,
  });

  useEffect(() => {
    getCatalogItem();
  }, []);

  const getCatalogItem = async () => {
    let res = await axios.get(`https://diagnost2k.cz/others?slug=${props.match.params.id}`);
    let data = res.data[0];
    console.log(data)
    setState({
      ...state,
      name: data.Name,
      image: data.Image,
      desc: data.Description,
      loaded: true,
    });
    console.log(state)
  };

  const popUpHandle = () => {
    $('.blur').addClass('active');
    $('.pop-up-form-container').fadeIn(100);
  };

  const setDataFromProps = (service_name) => {
    setState({ ...state, service_name: service_name });
  };

  return (
    <Fragment>
      {state.loaded ? (
        <div className='main-wrapper'>
          <div className='others-catalog-item'>
            <PopUpForm service_name={state.name} />
            <div className='catalog-item-component'>
              <div className='catalog-item-title'>
                <Link to='/other'>
                  <div className='catalog-back-trigger'>
                    <img src={arrow} alt='' />
                  </div>
                </Link>
                {state.name}
                <div
                  onClick={() => popUpHandle()}
                  className='btn-catalog-item-form'
                >
                  {t('Coding.ButtonRequest')}
                </div>
              </div>
              <div className='catalog-item-main-img'>
                {
                  <Fragment>
                    {state.loaded ? (
                      state.image.map((item) => {
                        return (
                          <img className='catalog-page-image' src={`https://diagnost2k.cz${item.url}`} alt='' />
                        )
                      })
                    ) : (
                        <Fragment></Fragment>
                      )}
                  </Fragment>
                }

              </div>
              <div className='catalog-item-main-text'>

                <ReactMarkdown>
                  {state.desc}
                </ReactMarkdown>

              </div>
            </div>
          </div>
        </div>
      ) : (
          <Fragment>
            <p className='loading-blog-page'>Loading...</p>
          </Fragment>
        )}
    </Fragment>
  );
};

export default CatalogItemPage;
