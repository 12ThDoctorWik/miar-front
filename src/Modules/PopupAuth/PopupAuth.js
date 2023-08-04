import React from "react";
import "./PopupAuth.scss";

import {telegram, cross_white} from "../../Assets/Icons/icons.js";

export default function PopupAuth() {
  return (
    <div className="popupAuth">
      <div className="popupAuth__info container">
        <img src={cross_white} alt="exit" className="popupAuth__cross"/>
        <div className="popupAuth__header">
          <div className="popupAuth__logo">MIAR</div>
          <div className="popupAuth__title">Вітаємо на порталі НРІ*</div>
          <div className="popupAuth__subTitle">*настільно-рольових ігор</div>
        </div>

        <div className="popupAuth__body">
          <div className="popupAuth__tg">
            <div className="popupAuth__tg_container">
              <img src={telegram} alt="icon"/>
              <span>Увійти за допомогою Telegram</span>
            </div>
          </div>
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
