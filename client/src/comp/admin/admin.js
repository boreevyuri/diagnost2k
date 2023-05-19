import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './comp/dashboard';
import PostCreater from './comp/post-creater';
import ServiceCreater from './comp/service-creater';
import Editor from './comp/editor';

const Admin = () => {
  return (
    <div className='admin-container'>
      <div className='main-wrapper'>
        <Routes>
          <Route exact path='/admin' element={Dashboard} />
          <Route path='/admin/post-creater' element={PostCreater} />
          <Route path='/admin/service-creater' element={ServiceCreater} />
          <Route path='/admin/editor/:id' element={Editor} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
