import React from 'react';
import "./MainPage.scss";

import Opening from "./Opening/Opening.js";
import TTG from "./TTG/TTG.js";
import Start from "./Start/Start.js";
import Shop from "./ShopBlock/ShopBlock.js";
import ForWho from "./ForWho/ForWho.js";

export default function MainPage(){

  

  return(
    <>
      <Opening/>
      <TTG/>
      <Start/>
      <Shop/>
      <div className="mainPage__title container">
        Для кого існує цей портал
      </div>
      <ForWho/>
    </>
  )
}