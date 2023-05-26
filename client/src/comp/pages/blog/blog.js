import React, { useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FirstScreenRenderer from "../../elements/first-screen-renderer";

const Blog = () => {

  const [state, setState] = useState({
    posts: [],
    loaded: false,
  });

  const page = 'blog';
  const backArrowTitle = 'Navbar.2'


  useEffect(() => {
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
    getPosts();
  }, []);

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

  return (
    <div className='blog'>
      <FirstScreenRenderer page={page} title={backArrowTitle} />
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
