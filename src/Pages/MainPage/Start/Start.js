import React from 'react';
import './Start.scss';

import HTS from '../../../Modules/MainPage/HowToStart/HowToStart.js';
import Button from '../../../Components/Button/Button.js';

export default function Start() {
  return (
    <div className="start container mainPage__block">
      <div className="start__title">Як почати гру</div>
      <HTS />

      <div className="start__text">Хочеш грати з друзями або новачок?</div>
      <div className="start__btn">
        <Button text="Замовити гру" type="white" />
      </div>
    </div>
  );
}
