import React from 'react';
import './Product.scss';

import Button from '../../../Components/Button/Button.js';

export default function Product({ image, text }) {
  return (
    <div className="mpProduct">
      <div
        className="mpProduct__image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="mpProduct__overlay">
          <div className="mpProduct__btn">
            <Button text="Замовити" type="transparent" />
          </div>
        </div>
      </div>
      <div className="mpProduct__text">{text}</div>
    </div>
  );
}
