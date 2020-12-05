import React, { Fragment } from 'react';

const ModelsData = (props) => {
  const options = () => {
    return props.data.map((item, index) => {
      return (
        <option key={index} className={item.mark} value={item.value}>
          {item.text}
        </option>
      );
    });
  };
  return <Fragment>{options()}</Fragment>;
};

export default ModelsData;
