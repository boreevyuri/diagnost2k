import React, { useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import axios from 'axios';

const ContentComponent = (props) => {
  const [state, setState] = useState({
    focus: null,
    redirect: false,
  });
  useEffect(() => {
    //getPosts();
  }, []);
  const getPosts = async () => {
    //let res = await axios.get(`/api/posts/`);
    //let data = res.data;
    // setState({
    //   ...state,
    //   posts: data.posts,
    // });
    //oprops.loaded = true;
  };
  const editPost = (id) => {
    let link = '/admin/editor/' + id;
    setState({ ...state, redirect: link });
  };
  const deletePost = async (id, index) => {
    await axios.delete('/api/posts/' + id);
    let posts = state.posts;
    delete posts[index];
    setState({ ...state, posts: posts });
  };
  const renderContent = (name) => {
    let content = state[name];
    if (content) {
      return content.map((item, index) => {
        return (
          <div className='table-item' key={index}>
            <div className='table-col table-col-1'>#{index}</div>
            <div className='table-col table-col-2'>{item.title}</div>
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
              onClick={() => deletePost(item.id, index)}
            >
              Delete
            </div>
          </div>
        );
      });
    }
  };
  const getContent = (name) => {
    console.log(name);
    if (name) {
      console.log('Send a request');
      // let res = axios.get(`/api/content/${name}`);
      // setState({ ...state, [name]: res.data });
    }
  };
  return <div className='content-component'>{getContent(props.focus)}</div>;
};

export default ContentComponent;
