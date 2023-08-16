import React from 'react';
import './HowToStart.scss';

import { lines } from '../../../Assets/Icons/icons.js';

export default function HowToStart() {
  return (
    <div className="hts">
      <div className="hts__block">
        <div className="hts__circle"></div>
        <div className="hts__text">Зареєструватись ...</div>
      </div>

      <img src={lines} alt="line" className="hts__line" />

      <div className="hts__block">
        <div className="hts__circle"></div>
        <div className="hts__text">Ще щось зробити ...</div>
      </div>

      <img src={lines} alt="line" className="hts__line" />

      <div className="hts__block">
        <div className="hts__circle"></div>
        <div className="hts__text">
          Тут дуже багато тексту для того аби перевірити як добре він тут буде
          влазити ...
        </div>
      </div>
    </div>
  );
}
