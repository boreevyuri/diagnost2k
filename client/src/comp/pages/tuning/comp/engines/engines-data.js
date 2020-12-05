import React, { Fragment } from 'react';

const EnginesData = (props) => {
  const options = () => {
    return props.data.map((item, index) => {
      return (
        <option key={index} className={item.model} value={item.value}>
          {item.text}
        </option>
      );
    });
  };
  return <Fragment>{options()}</Fragment>;
};

export default EnginesData;
