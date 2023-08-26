import { React, useState } from 'react';
import './ForWho.scss';

import {
  forMasters,
  forPlayers,
  forClubs,
} from '../../../Assets/Images/MainPage/MPImages.js';

export default function ForWho() {
  return (
    <div className="forWho container mainPage__block">
      <div className="forWho__title">Для кого існує цей портал?</div>
      <div className="forWho__cards">
        <div className="forWhoCard forWhoCard_active foWho__card">
          <div
            className="forWhoCard__photo"
            style={{ backgroundImage: `url(${forMasters})` }}
          ></div>

          <div className="forWhoCard__info">
            <div className="forWhoCard__title">Для Гравців</div>
            <div className="forWhoCard__text">
              На цьому порталі ви зможете знайти для себе найцікавіщу пригоду,
              захоплююче провести час і стати частиною НРІ комʼюніті.
              <br />
              Шукате актуальні ігри на сторінці “Розклад”.
              <br />У майбутньому ви зможете замовляти ігри та готуватись до них
              за допомогою навчальних матеріалів на сторінці “Механіки гри”
            </div>
          </div>
        </div>

        <div className="forWhoCard forWho__card">
          <div
            className="forWhoCard__photo"
            style={{ backgroundImage: `url(${forPlayers})` }}
          ></div>
          <div className="forWhoCard__info">
            <div className="forWhoCard__title">Для Майстрів</div>
            <div className="forWhoCard__text">
              Майстер отримує доступ до власного органайзера-календаря з іграми,
              місце для пошуку гравців та зручній комунікації з ними, чудову
              систему для перегляду сесій, зберігання даних про героїв, а також
              доступ до інтерактивних доповнень у вигляді карти чи ведення
              окремої кампанії (останні два пункти наразі в активній розробці,
              очікуйте згодом)
            </div>
          </div>
        </div>

        <div className="forWhoCard forWho__card">
          <div
            className="forWhoCard__photo"
            style={{ backgroundImage: `url(${forClubs})` }}
          ></div>
          <div className="forWhoCard__info">
            <div className="forWhoCard__title">Для Клубів</div>
            <div className="forWhoCard__text">
              Майстер отримує доступ до власного органайзера-календаря з іграми,
              місце для пошуку гравців та зручній комунікації з ними, чудову
              систему для перегляду сесій, зберігання даних про героїв, а також
              доступ до інтерактивних доповнень у вигляді карти чи ведення
              окремої кампанії (останні два пункти наразі в активній розробці,
              очікуйте згодом)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
