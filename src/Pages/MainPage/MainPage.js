import React from 'react';
import "./MainPage.scss";

import Opening from "./Opening/Opening.js";
import TTG from "./TTG/TTG.js";
import Start from "./Start/Start.js";

export default function MainPage(){

  

  return(
    <>
      <Opening/>
      <TTG/>
      <Start/>
    </>
  )
}