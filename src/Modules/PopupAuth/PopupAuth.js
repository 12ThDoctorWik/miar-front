import React, { useEffect } from 'react';
import './PopupAuth.scss';

import { telegram, cross_white } from '../../Assets/Icons/icons.js';
import TelegramLoginButton from '../../Auth/CustomTelegramLogin';
import { useDispatch } from 'react-redux';
import { TOAST_LEVEL, toastSlice } from '../../Store/Slices/ToastSlice';
import { useAuthContext } from '@providers/AuthProvider';

function PopupAuth({ onClose }) {
  const dispatch = useDispatch();
  const { login } = useAuthContext();

  const handleLogin = async data => {
    await login(data);
    dispatch(
      toastSlice.actions.showMessage(
        'Вхід виконано. Вдалого пошуку скарбів',
        TOAST_LEVEL.RED
      )
    );
  };

  return (
    <div className="popupAuth popup" id="popupAuth">
      <div className="popupAuth__info container">
        <img
          src={cross_white}
          alt="exit"
          onClick={onClose}
          className="popupAuth__cross"
        />
        <div className="popupAuth__header">
          <div className="popupAuth__logo">MIAR</div>
          <div className="popupAuth__title">Вітаємо на порталі НРІ*</div>
          <div className="popupAuth__subTitle">*настільно-рольових ігор</div>
        </div>

        <div className="popupAuth__body">
          <div className="popupAuth__tg">
            <TelegramLoginButton
              dataOnauth={handleLogin}
              botName={process.env.REACT_APP_TELEGRAM_BOT_NAME}
            />
          </div>

          {/*<div className="popupAuth__tg" onClick={useFakeLogin}>*/}
          {/*  <div className="popupAuth__tg_container">*/}
          {/*    <img src={telegram} alt="icon" />*/}
          {/*    <span>TEST LOGIN</span>*/}
          {/*  </div>*/}
          {/*</div>*/}

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
