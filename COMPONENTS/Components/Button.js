import React from 'react';

const Button = ({ onClick, imgUrl }) => {
  return (
    <button className="arrow-button" onClick={onClick}>
      <img src={imgUrl} alt="Arrow" />
    </button>
  );
};

export default Button;
