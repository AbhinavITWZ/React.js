import React from 'react';
import appleImage from '../Assets/appleimage.webp'; // Add your own apple image

const Basket = ({ appleCount, title }) => {
  return (
    <div className="basket">
      <h3>{title}</h3>
      <div className="apple-container">
        {Array.from({ length: appleCount }, (_, i) => (
          <img key={i} src={appleImage} alt="Apple" className="apple" />
        ))}
      </div>
      {/* <p>Apples: {appleCount}</p> */}
    </div>
  );
};

export default Basket;
