import React, { useState, Fragment, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import axios from 'axios';
import arrow from './img/arrow.svg';
import ReactMarkdown from 'react-markdown'

const Post = (props) => {
  const { t } = useTranslation();

  const [state, setState] = useState({
    title: '',
    preview: '',
    content: [],
    loaded: false,
  });

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    let res = await axios.get(`https://diagnost2k.cz/posts?slug=${props.match.params.id}`);
    let data = res.data[0];
    console.log(data);
    setState({
      ...state,
      title: data.Name,
      preview: data.Preview,
      content: data.Content,
      loaded: true,
    });
  };


  return (
    <div className='blog-page'>
      <div className='main-wrapper'>
        <Fragment>
          {state.loaded ? (
            <Fragment>
              <Fragment>
                <div className='blog-page-container'>
                  <div className='back-arrow'>
                    <Link to='/blog'>
                      <img src={arrow} alt='' />
                    </Link>
                  </div>
                  <div className='blog-page-title'>{t(state.title)}</div>
                  <div className='blog-page-preview'>
                    <img
                      src={`https://diagnost2k.cz${state.preview.url}`}
                      alt=''
                    />
                  </div>
                  <div className='blog-page-content'>
                    <ReactMarkdown>
                      {state.content}
                    </ReactMarkdown>

                  </div>
                </div>
              </Fragment>
            </Fragment>
          ) : (
              <Fragment>
                <p className='loading-blog-page'>Loading...</p>
              </Fragment>
            )}
        </Fragment>
      </div>
    </div>
  );
};

export default Post;
