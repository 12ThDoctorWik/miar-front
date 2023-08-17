import { Fragment } from 'react';
import './ShopBlock.scss';

import Product from '../../../Modules/MainPage/Product/Product.js';

import { test } from '../../../Assets/Images/MainPage/MPImages.js';
const tempData = [
  {
    img: test,
    text: 'Хороша фігурка 1!!',
  },
  {
    img: test,
    text: 'Хороша фігурка 2!!',
  },
  {
    img: test,
    text: 'Хороша фігурка 3!!',
  },
  {
    img: test,
    text: 'Хороша фігурка 4!!',
  },
  {
    img: test,
    text: 'Хороша фігурка 5!!',
  },
  {
    img: test,
    text: 'Хороша фігурка 6!!',
  },
];

export default function ShopBlock() {
  return (
    <div className="shopBlock container mainPage__block">
      <div className="shopBlock__title">Наш магазин</div>
      <div className="shopBlock__subTitle">Instagram</div>

      <div className="shopBlock__products">
        {tempData.map((el, index) => (
          <Fragment key={index}>
            {index === 3 ? (
              <>
                <div className="shopBlock__placeholder"></div>
                <div className="shopBlock__placeholder"></div>
                <Product image={el.img} text={el.text} />
              </>
            ) : (
              <Product image={el.img} text={el.text} />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
