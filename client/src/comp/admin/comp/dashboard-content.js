import React, { useState, Fragment, useEffect } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import Moment from 'react-moment';
import { useTranslation } from 'react-i18next';

const DashboardContent = (props) => {
  const [state, setState] = useState({
    redirect: false,
  });
  const { t } = useTranslation();
  let data = props[props.focus];
  const editPost = (id) => {
    let link = '/admin/editor/' + id;
    setState({ ...state, redirect: link });
  };
  const deletePost = async (category, id, index) => {
    console.log('/api/content/' + id);
    await axios.delete(`/api/content/${id}`);
    console.log('dea');
    props.deleteItem(category, index);
  };

  const renderContent = () => {
    if (data) {
      console.log(data);
      return data.map((item, index) => {
        return (
          <div className='table-item' key={index}>
            <div className='table-col table-col-1'></div>
            <div className='table-col table-col-2'>{t(`${item.title}`)}</div>
            <div className='table-col table-col-3'>
              <Moment format='DD.MM.YY '>{item.created_at}</Moment>
            </div>
            <div
              className='btn table-btn download-btn'
              onClick={() => editPost(item.id)}
            >
              Edit
            </div>
            <div
              className='btn table-btn delete-btn'
              onClick={() => deletePost(props.focus, item.id, index)}
            >
              Delete
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className='dashboard-content'>
      <Fragment>
        {!state.redirect ? (
          <Fragment></Fragment>
        ) : (
          <Fragment>
            <Redirect to={state.redirect} />
          </Fragment>
        )}
      </Fragment>
      {renderContent()}
    </div>
  );
};

export default DashboardContent;
