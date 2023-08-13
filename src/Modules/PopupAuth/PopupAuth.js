import React, { useEffect } from "react";
import "./PopupAuth.scss";

import {telegram, cross_white} from "../../Assets/Icons/icons.js";
import { login } from "../../Store";
import { useThunk } from "../../Hooks/useThunk";
import TelegramLoginButton from "../../Auth/CustomTelegramLogin";

function PopupAuth() {
  const [useLogin, loginError] = useThunk(login);

  function closePopup() {
    document.getElementById("popupAuth").classList.remove("popupAuth_open")
    document.getElementById("overlay").style.display = "none"
  }
  // const handleTelegramResponse = (response) => {
  //   console.log(response);
  //   useLogin(response);
  // }

  return (
    <div className="popupAuth popup" id="popupAuth">
      <div className="popupAuth__info container">
        <img src={cross_white} alt="exit" onClick={closePopup} className="popupAuth__cross"/>
        <div className="popupAuth__header">
          <div className="popupAuth__logo">MIAR</div>
          <div className="popupAuth__title">Вітаємо на порталі НРІ*</div>
          <div className="popupAuth__subTitle">*настільно-рольових ігор</div>
        </div>

        <div className="popupAuth__body">
           {/* <div className="popupAuth__tg" onClick={useLogin}>
              <div className="popupAuth__tg_container">
                <img src={telegram} alt="icon"/>
                <span>Увійти за допомогою Telegram</span>
              </div>
            </div>  */}
          <TelegramLoginButton dataOnauth={useLogin} botName="dndLvivBot" className="popupAuth__tg" />
          <div className="popupAuth__text">
            Авторизуючись на порталі ви погоджуєтесь з &nbsp;
            <a href="#" className="popupAuth__link">
              Умовами використання
            </a>
            &nbsp;та&nbsp;
            <a href="#" className="popupAuth__link">
              Політикою конфіденційності
            </a>
          </div>
        </div>

        <div className="popupAuth__footer">
          <div className="popupAuth__text">
            Авторизація на порталі відбувається через Telegram. Це автоматично
            надасть вам доступ до нашого бота та можливості інтеграції порталу з
            ігровими чатами.
          </div>
          <a href="#" className="popupAuth__link">
            Більше про можливості Telegram бота
          </a>
        </div>
      </div>
      <div className="popupAuth__image"></div>
    </div>
  );
}
export default PopupAuth;
