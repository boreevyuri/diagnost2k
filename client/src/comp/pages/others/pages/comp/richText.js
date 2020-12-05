import React from 'react';
import textRender from './textRender'

const richText = (props) => {
    let data = props.data;
    const html = () => textRender.render(data || '');
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default richText;