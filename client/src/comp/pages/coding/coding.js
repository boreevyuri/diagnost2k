import React, {Fragment, useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Footer from '../../footer/footer';
import PopUpForm from '../../pop-up-form/pop-up-form';
import FirstScreenRenderer from "../../elements/first-screen-renderer";

const Coding = () => {
  const [state, setState] = useState({
    service_name: '',
    loaded: false,
  });

  const {t} = useTranslation();

  const page = 'coding';
  const backArrowTitle = 'Coding.Title';

  useEffect(() => {
    const getContent = async (category) => {
      let res = await axios.get(`/api/content/${category}`);
      setState({...state, data: res.data, loaded: true});
    };

    getContent(page);
  }, []);

  const renderContent = () => {
    return state.data.map((item, index) => {
      console.log(state);
      return (
        <Fragment key={index}>
          <Link to={`/service/${page}/${item.id}`}>
            <div className='cool-catalog-item'>
              <div className='cool-catalog-container'>
                <div className='catalog-item-img'>
                  <img
                    src={`/${state.data[index].preview}`}
                    alt=''
                  />
                </div>
                <div className='catalog-item-text'>
                  {t(`${page}.${item.id}.0`)}
                </div>
              </div>
            </div>
          </Link>
        </Fragment>
      );
    });
  };

  // const setDataFromProps = (service_name) => {
  //   setState({...state, service_name: service_name});
  // };

  return (
    <div className='coding'>
      <PopUpForm service_name={state.service_name}/>
      <div className='blur'>
        <FirstScreenRenderer page={page} title={backArrowTitle} />
        <div className='main-wrapper'>
          <section>
            <Fragment>
              {state.loaded ? (
                <Fragment>{renderContent()}</Fragment>
              ) : (
                <Fragment></Fragment>
              )}
            </Fragment>
          </section>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Coding;
