import React from 'react';
import "./Header.scss";
import { Link } from "react-router-dom";

import PopupAuth from "../PopupAuth/PopupAuth.js";

export default function Header() {

  function showAuth() {
    document.getElementById("popupAuth").classList.add("popupAuth_open")
    document.getElementById("overlay").style.display = "block"
  }

  function changeRoute(event) {
    [...document.getElementsByClassName("header__link")].map((el)=>{
      el.classList.remove("header__link_active")
    })
    event.target.classList.add("header__link_active")
  }

  return(
    <nav className="header container">
      <div className="header__logo">MIAR</div>
      <div className="header__nav">
        <Link to="/" onClick={changeRoute} className="header__link">Головна</Link>
        <Link to="/calendar" onClick={changeRoute} className="header__link">Розклад</Link>
        <div className="header__link">Магазин</div>
        <div className="header__link">Механіки гри</div>
        <div className="header__link">Клуб і Майстри</div>
      </div>
      <div className="header__user" onClick={showAuth}>Увійти</div>
      <PopupAuth/>
    </nav>
  )
}