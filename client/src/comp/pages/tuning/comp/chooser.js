import React, { useState, Suspense, Fragment } from 'react';
import $ from 'jquery';
import { useTranslation } from 'react-i18next';
import arrow from '../img/arrow.svg';
import axios from 'axios';
import ModelsData from './models/models-data';
import EnginesData from './engines/engines-data';

const Chooser = (props) => {
  const { t } = useTranslation();

  const [state, setState] = useState({
    mark: '',
    model: '',
    engine: '',
    modelsData: [],
    enginesData: [],
  });

  const handleChangeMark = async (e) => {
    try {
      state.mark = e.target.value;
      let res = await axios.get(`/api/models/${e.target.value}`);
      setState({
        ...state,
        modelsData: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeModel = async (e) => {
    try {
      state.model = e.target.value;
      let mark = state.mark.toLowerCase();
      let link = `/api/engines/${mark}/${e.target.value}`;
      let res = await axios.get(link);
      console.log(res.data);
      setState({ ...state, enginesData: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeEngine = async (e) => {
    try {
      setState({ ...state, engine: e.target.value });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSend = () => {
    if (state.engine === '' || state.model === '' || state.mark === '') {
      $('.chooser-error-alert').fadeIn(300);
      setTimeout(() => {
        $('.chooser-error-alert').fadeOut(300);
      }, 2000);
      return;
    }
    let link = `/carpage/${state.mark}/${state.model}${state.engine}`;
    link = link.toLowerCase();
    console.log(link);
    props.redirect(link);
  };

  return (
    <div className='chooser-container'>
      <div className='chooser-input-container'>
        <div className='chooser-input'>
          <label for='mark'>{t('Chooser.Label.1')}</label>
          <br />
          <br />
          <select id='mark' name='mark' onChange={(e) => handleChangeMark(e)}>
            <option className='placeholder-option'>
              {t('Chooser.Placeholder.1')}
            </option>
            <option value='bmw'>BMW</option>
            <option value='audi'>Audi</option>
            <option value='skoda'>Skoda</option>
            <option value='seat'>Seat</option>
            <option value='mercedes-benz'>Mercedes-Benz</option>
            <option value='volkswagen'>Volkswagen</option>
            <option value='alfa_romeo'>Alfa Romeo</option>
            <option value='aston_martin'>Aston Martin</option>
            <option value='bentley'>Bentley</option>
            <option value='cadillac'>Cadillac</option>
            <option value='chevrolet'>Chevrolet</option>
            <option value='chrysler'>Chrysler</option>
            <option value='citroen'>Citroen</option>
            <option value='cupra'>Cupra</option>
            <option value='dacia'>Dacia</option>
            <option value='daewoo'>Daewoo</option>
            <option value='daihatsu'>Daihatsu</option>
            <option value='dodge'>Dodge</option>
            <option value='ferrari'>Ferrari</option>
            <option value='fiat'>Fiat</option>
            <option value='fisker'>Fisker</option>
            <option value='ford'>Ford</option>
            <option value='honda'>Honda</option>
            <option value='hyundai'>Hyundai</option>
            <option value='infiniti'>Infiniti</option>
            <option value='isuzu'>Isuzu</option>
            <option value='jaquar'>Jaquar</option>
            <option value='jeep'>Jeep</option>
            <option value='kia'>Kia</option>
            <option value='ktm'>Ktm</option>
            <option value='lada'>Lada</option>
            <option value='lamborghini'>Lamborghini</option>
            <option value='lancia'>Lancia</option>
            <option value='land_rover'>Land Rover</option>
            <option value='lexus'>Lexus</option>
            <option value='lotus'>Lotus</option>
            <option value='maserati'>Maserati</option>
            <option value='mazda'>Mazda</option>
            <option value='mg'>Mg</option>
            <option value='mini'>Mini</option>
            <option value='mitsubishi'>Mitsubishi</option>
            <option value='nissan'>Nissan</option>
            <option value='opel'>Opel</option>
            <option value='peugeot'>Peugeot</option>
            <option value='porsche'>Porsche</option>
            <option value='primo'>Primo</option>
            <option value='renault'>Renault</option>
            <option value='rolls_royce'>Rolls Royce</option>
            <option value='rover'>Rover</option>
            <option value='saab'>Saab</option>
            <option value='smart'>Smart</option>
            <option value='ssangyong'>Ssangyong</option>
            <option value='subaru'>Subaru</option>
            <option value='suzuki'>Suzuki</option>
            <option value='toyota'>Toyota</option>
            <option value='vinfast'>Vinfast</option>
            <option value='volvo'>Volvo</option>
          </select>
        </div>
        <div className='chooser-input'>
          <label for='model'>{t('Chooser.Label.2')}</label>
          <br />
          <br />
          <select
            id='model'
            name='model'
            onChange={(e) => handleChangeModel(e)}
          >
            <option className='placeholder-option'>
              {t('Chooser.Placeholder.2')}
            </option>
            <ModelsData data={state.modelsData} />
          </select>
        </div>
        <div className='chooser-input'>
          <label for='engine'>{t('Chooser.Label.3')}</label>
          <br />
          <br />
          <select
            id='engine'
            name='engine'
            onChange={(e) => handleChangeEngine(e)}
          >
            <option className='placeholder-option'>
              {t('Chooser.Placeholder.3')}
            </option>
            <EnginesData data={state.enginesData} />
          </select>
        </div>
        <div className='chooser-error-alert'>{t('Chooser.Alert')}</div>
        <div onClick={() => handleSend()} className='chooser-input-btn'>
          <img src={arrow} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Chooser;
