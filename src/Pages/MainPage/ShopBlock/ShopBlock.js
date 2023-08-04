import React from 'react';
import "./ShopBlock.scss";

import Product from "../../../Modules/MainPage/Product/Product.js";

import {test} from "../../../Assets/Images/MainPage/MPImages.js";
const tempData = [
  {
  img: test,
  text: "Хороша фігурка 1!!"
  },
  {
  img: test,
  text: "Хороша фігурка 2!!"
  },
  {
  img: test,
  text: "Хороша фігурка 3!!"
  },
  {
  img: test,
  text: "Хороша фігурка 4!!"
  },
  {
  img: test,
  text: "Хороша фігурка 5!!"
  },
  {
  img: test,
  text: "Хороша фігурка 6!!"
  },
]

export default function ShopBlock() {
  return(
    <div className="shopBlock container mainPage__block">
      <div className="shopBlock__title">Наш магазин</div>
      <div className="shopBlock__subTitle">Instagram</div>

      <div className="shopBlock__products">
        {tempData.map((el, index)=>{
          if(index === 3){
            return(
              <>
                <div className="shopBlock__placeholder"></div>
                <div className="shopBlock__placeholder"></div>
                <Product key={index} image={el.img} text={el.text}/>
              </>
            )
          }
          return(
            <Product key={index} image={el.img} text={el.text}/>
          )
        })}
      </div>
    </div>
  )
}