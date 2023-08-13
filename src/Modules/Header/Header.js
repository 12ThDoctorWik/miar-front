import React, { useEffect, useState } from 'react';
import "./Header.scss";
import { Link } from "react-router-dom";

import PopupAuth from "../PopupAuth/PopupAuth.js";
import { useSelector } from "react-redux";
import { checkUserLoggedIn } from "../../Store";
import { useThunk } from "../../Hooks/useThunk";

export default function Header() {
  const [checkUser, checkUserError] = useThunk(checkUserLoggedIn);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    checkUser();
  }, [checkUser]);

  function showAuth() {
    document.getElementById("popupAuth").classList.add("popupAuth_open")
    document.getElementById("overlay").style.display = "block"
  }

  function changeRoute(event) {
    [...document.getElementsByClassName("header__link")].map((el) => {
      el.classList.remove("header__link_active")
    })
    event.target.classList.add("header__link_active")
  }

  return (
      <nav className="header container">
        <div className="header__logo">MIAR</div>
        <div className="header__nav">
          <Link to="/" onClick={changeRoute} className="header__link">Головна</Link>
          <Link to="/calendar" onClick={changeRoute} className="header__link">Розклад</Link>
          <div className="header__link">Магазин</div>
          <div className="header__link">Механіки гри</div>
          <div className="header__link">Клуб і Майстри</div>
        </div>
        {
            !user && <div className="header__user" onClick={showAuth}>Увійти</div>
        }
        {
            user && <img src={user.avatar} className="header__avatar"/>
        }
        <PopupAuth/>
      </nav>
  )
}