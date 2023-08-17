import React from 'react';
import './MPBlock.scss';
import Button from '../../../Components/Button/Button.js';

export default function MPBlock() {
  return (
    <div className="mpBlock">
      <div className="mpBlock__title">Master Is Always Right</div>
      <div className="mpBlock__text">
        “Відчиніть важкі двері й крокніть у світ, де немає меж фантазії. Тут,
        серед затаєних таємниць і переповнених небезпеками, ваші персонажі
        почнуть свою епічну подорож.”
      </div>
      <div className="mpBlock__btns">
        <Button text="Календар ігор" />
        <Button text="Замовити гру" type="goldTransparent" />
      </div>
    </div>
  );
}
