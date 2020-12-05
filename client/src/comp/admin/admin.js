import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './comp/dashboard';
import PostCreater from './comp/post-creater';
import ServiceCreater from './comp/service-creater';
import Editor from './comp/editor';

const Admin = () => {
  return (
    <div className='admin-container'>
      <div className='main-wrapper'>
        <Switch>
          <Route exact path='/admin' component={Dashboard} />
          <Route path='/admin/post-creater' component={PostCreater} />
          <Route path='/admin/service-creater' component={ServiceCreater} />
          <Route path='/admin/editor/:id' component={Editor} />
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
