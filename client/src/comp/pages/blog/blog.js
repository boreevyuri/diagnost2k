import React, { useState, Fragment, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes, Link } from 'react-router-dom';
import arrow from './img/arrow.svg';
import axios from 'axios';

const Blog = () => {
  const { t } = useTranslation();

  const [state, setState] = useState({
    posts: [],
    loaded: false,
  });

  const page = 'blog';

  const getPosts = async () => {
    let res = await axios.get(`/posts`);
    if (res.data.length > 0) {
      setState({
        ...state,
        posts: res.data,
        loaded: true,
      });
    }
  };

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const renderPosts = () => {

    return state.posts.map((item, index) => {
      let containerName = 'blog-col-1';
      if (index % 5 === 0) {
        containerName = 'blog-col-2';
      }
      console.log(state.posts);
      return (
        <div key={index} className={containerName}>
          <div className='article'>
            <Link to={`/post/${item.slug}`}>
              <div className='article-container'>
                <img src={`${item.Preview.url}`} alt='' />
                <div className='article-title'>{item.Name}</div>
                <div className='fader-common blog-fader'></div>
              </div>
            </Link>
          </div>
        </div>
      );
    });
  };


  const firstscreenRender = () => {
    let fsName = 'firstscreen-common fs-common-' + page;
    return (
      <div className={fsName}>
        <div className='mask'>
          <div className='text-container'>
            <Routes>
              <Route exact path={`/blog`} element={
                <div className='cool-fs-title'>
                  <Link to={`/`}>
                    <div className='catalog-back-trigger common-back'>
                      <img src={arrow} alt='' />
                    </div>
                  </Link>
                  {t(`Navbar.2`)}
                </div>
              } />
            </Routes>
          </div>
        </div>
        <div className='fader-common'></div>
      </div>
    );
  };

  return (
    <div className='blog'>
      {firstscreenRender()}
      <div className='main-wrapper'>
        <div className='blog-container'>
          <Fragment>
            {state.loaded ? (
              <Fragment>
                <Fragment>{renderPosts()}</Fragment>
              </Fragment>
            ) : (
                <Fragment>
                  <p>Loading...</p>
                </Fragment>
              )}
          </Fragment>
        </div>
      </div>
    </div>
  );
};

export default Blog;
