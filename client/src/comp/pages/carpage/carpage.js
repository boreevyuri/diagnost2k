import React, {useState, Fragment, useEffect} from 'react';
import Footer from '../../footer/footer';
import axios from 'axios';
import arrow from './img/arrow.svg';
import {useTranslation} from 'react-i18next';
import $ from 'jquery';

const CarPage = (props) => {
  const {t, i18n} = useTranslation();


  const [state, setState] = useState({
    title: '',
    desc: '',
    imgUrl: '',
    fullDesc: '',
    chartPower: '',
    chartTorque: '',
    numbers: [],
  });

  const renderCar = async () => {
    let res = await axios.get(
      `/api/cars/${props.match.params.mark}/${props.match.params.id}`
    );
    setState({
      ...state,
      title: res.data.fullName,
      desc: res.data.desc,
      imgUrl: res.data.imgUrl,
      loaded: true,
      fullDesc: res.data.fullDesc,
      chartTorque: res.data.chartTorque,
      chartPower: res.data.chartPower,
      numbers: res.data.numbers,
    });
  };

  useEffect(() => {
    renderCar();
  }, [renderCar]);

  const numbers = () => {
    let titleIndex = 0;
    return state.numbers.map((item, index) => {
      let content = item;
      if (index % 3 === 0) {
        content = t(`carpage.table.${titleIndex}`);
        titleIndex += 1;
      }
      return <li>{content}</li>;
    });
  };

  const generateDescription = () => {
    return (
      <div className='carpage-description'>
        <div className='cool-description'>
          <div className='cool-description-item'>
            <div className='big-digits'>
              <div className='cool-digits'>{state.numbers[1]}</div>
              <img src={arrow} alt=''/>
              <div className='cool-digits'>{state.numbers[2]}</div>
            </div>
            <div className='cool-description-text'>{t('carpage.cool.0')}</div>
          </div>
          <div className='cool-description-item'>
            <div className='big-digits'>
              <div className='cool-digits'>{state.numbers[7]}</div>
              <img src={arrow} alt=''/>
              <div className='cool-digits'>{state.numbers[8]}</div>
            </div>

            <div className='cool-description-text'>{t('carpage.cool.1')}</div>
          </div>
          <div className='cool-description-item'>
            <div className='big-digits'>
              <div className='cool-digits'>{state.numbers[11]}</div>
            </div>

            <div className='cool-description-text'>{t('carpage.cool.2')}</div>
          </div>
        </div>
        <div className='boring-description'>
          {t('carpage.0')} {state.title} {t('carpage.1')} {state.numbers[1]} (
          {state.numbers[4]}) {t('carpage.2')} {state.numbers[2]} (
          {state.numbers[5]}) {t('carpage.3')} {state.numbers[7]}{' '}
          {t('carpage.4')} {state.numbers[8]}. {t('carpage.5')}{' '}
          {state.numbers[11]} {t('carpage.6')} {state.numbers[14]}
        </div>
      </div>
    );
  };

  return (
    <div className='tuning'>
      <div className='blur'>
        <div className='firstscreen-common fs-common-2'>
          <div className='mask'>
            <div className='text-container'>
              <div className='fs-title-carpage'>
                <Fragment>
                  {state.title ? (
                    <Fragment>{state.title}</Fragment>
                  ) : (
                    <Fragment></Fragment>
                  )}
                </Fragment>
              </div>
              <div className='fs-subtitle'></div>
              <div className='fs-text'></div>
            </div>
          </div>
          <div className='fader-common'></div>
        </div>
        <div className='main-wrapper'>
          <section>
            <div className='about'>
              <div className='two-row about-row'>
                <Fragment>
                  {state.title ? (
                    <Fragment>
                      {generateDescription()}
                      {/* {t(
                        `${props.match.params.mark}.${props.match.params.id}.1`
                      )}
                      <br />
                      <br />
                      {t(
                        `${props.match.params.mark}.${props.match.params.id}.2`
                      )} */}
                    </Fragment>
                  ) : (
                    <Fragment></Fragment>
                  )}
                </Fragment>
              </div>
              <div className='two-row about-row'>
                <div className='carpage-preview'>
                  <Fragment>
                    {!state.loaded ? (
                      <Fragment></Fragment>
                    ) : (
                      <Fragment>
                        {state.imgUrl ? (
                          <Fragment>
                            <img
                              src={`/server-${state.imgUrl}`}
                              alt=''
                            />
                          </Fragment>
                        ) : (
                          <Fragment></Fragment>
                        )}
                      </Fragment>
                    )}
                  </Fragment>
                </div>
              </div>
            </div>
            <div className='carpage-numbers'>
              <Fragment>
                {!state.loaded ? (
                  <Fragment></Fragment>
                ) : (
                  <Fragment>
                    {state.numbers ? (
                      <Fragment>{numbers()}</Fragment>
                    ) : (
                      <Fragment></Fragment>
                    )}
                  </Fragment>
                )}
              </Fragment>
            </div>
            <div className='charts'>
              <div className='two-row'>
                <Fragment>
                  {!state.loaded ? (
                    <Fragment></Fragment>
                  ) : (
                    <Fragment>
                      {state.chartPower ? (
                        <Fragment>
                          <img
                            src={`/server-${state.chartPower}`}
                            alt=''
                          />
                        </Fragment>
                      ) : (
                        <Fragment></Fragment>
                      )}
                    </Fragment>
                  )}
                </Fragment>
              </div>
              <div className='two-row'>
                <div className='carpage-preview'>
                  <Fragment>
                    {!state.loaded ? (
                      <Fragment></Fragment>
                    ) : (
                      <Fragment>
                        {state.chartTorque ? (
                          <Fragment>
                            <img
                              src={`/server-${state.chartTorque}`}
                              alt=''
                            />
                          </Fragment>
                        ) : (
                          <Fragment></Fragment>
                        )}
                      </Fragment>
                    )}
                  </Fragment>
                </div>
              </div>
            </div>
          </section>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default CarPage;
