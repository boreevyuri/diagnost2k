import React, { Fragment, useState, useEffect } from 'react';
import { Redirect, Link, Switch, Route } from 'react-router-dom';
import DashboardNav from './dashboard-nav';
import DashboardContent from './dashboard-content';
import axios from 'axios';

const Dashboard = () => {
  const [state, setState] = useState({
    focus: 'posts',
    loaded: false,
    redirect: false,
    all: '',
    coding: '',
  });

  const changeFocus = async (name) => {
    if (name) {
      console.log(`Send a request /api/content/${name}`);
      let res = await axios.get(`/api/content/${name}`);
      setState({ ...state, focus: name, [name]: res.data });
      console.log(res.data);
    }
  };

  const deleteItem = (category, index) => {
    console.log('got it');
    let obj = state[category];
    delete obj[index];
    setState({ ...state, [category]: obj });
    console.log(state);
  };

  useEffect(() => {
    changeFocus('posts');
  }, []);

  const create = () => {
    console.log(state.focus);
    if (state.focus == 'all') {
      return;
    } else if (state.focus == 'posts') {
      let link = `/post-creater/${state.focus}`;
      setState({ ...state, redirect: link });
    } else {
      let link = `/service-creater/${state.focus}`;
      setState({ ...state, redirect: link });
    }
  };

  return (
    <div className='admin-page-container'>
      <Fragment>
        {!state.redirect ? (
          <Fragment></Fragment>
        ) : (
          <Fragment>
            <Redirect to={state.redirect} />
          </Fragment>
        )}
      </Fragment>
      <DashboardNav changeFocus={changeFocus} create={create} />
      <DashboardContent
        deleteItem={deleteItem}
        focus={state.focus}
        posts={state.posts}
        all={state.all}
        coding={state.coding}
        multimedia={state.multimedia}
        display={state.display}
        navigation={state.navigation}
        parking={state.parking}
        other={state.other}
      />
    </div>
  );
};

export default Dashboard;
