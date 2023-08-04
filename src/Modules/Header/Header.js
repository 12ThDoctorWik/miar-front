import React from 'react';
import "./Header.scss";

import PopupAuth from "../PopupAuth/PopupAuth.js";

export default function Header() {

  function showAuth() {
    document.getElementById("popupAuth").classList.add("popupAuth_open")
    document.getElementById("overlay").style.display = "block"
  }

  return(
    <nav className="header container">
      <div className="header__logo">MIAR</div>
      <div className="header__nav">
        <div className="header__link header__link_active">Головна</div>
        <div className="header__link">Розклад</div>
        <div className="header__link">Магазин</div>
        <div className="header__link">Механіки гри</div>
        <div className="header__link">Клуб і Майстри</div>
      </div>
      <div className="header__user" onClick={showAuth}>Увійти</div>
      <PopupAuth/>
    </nav>
  )
}