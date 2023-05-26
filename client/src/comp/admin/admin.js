import React from 'react';
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
          <Route path='/' element={<Dashboard/>} />
          <Route path='/post-creater' element={<PostCreater/>} />
          <Route path='/service-creater' element={<ServiceCreater/>} />
          <Route path='/editor/:id' element={Editor} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
