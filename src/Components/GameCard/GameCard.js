import React from 'react';
import './GameCard.scss';
import { Link } from 'react-router-dom';

import {
  lock,
  star,
  date,
  master,
  location,
} from '../../Assets/Icons/icons.js';

export default function GameCard({ info }) {
  let image = info.ImageURL;
  if (image == '' || image == 'string') {
    image = 'https://i.redd.it/nwpa93o6r8k31.jpg';
  }

  return (
    <>
      <Link className="gameCard" to={'/game/' + info.Id}>
        <div
          className="front"
          style={{ backgroundImage: 'url(' + image + ')' }}
        >
          <div className="gameCard__marks">
            {info.isPrivate ? (
              <img src={lock} alt="private" className="gameCard__mark" />
            ) : null}
          </div>
          <div className="gameCard__overlay">
            <div className="gameCard__title">{info.Name}</div>
            <div className="gameCard__data">
              <div className="gameCard__line">
                <img src={master} alt="master" /> <span>{info.MasterName}</span>
              </div>
              <div className="gameCard__line">
                <img src={date} alt="date" /> <span>{info.StartTime}</span>
              </div>
              <div className="gameCard__line">
                <img src={location} alt="location" />{' '}
                <span>{info.Location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="back">
          <div className="back__info">
            <div className="back__text">
              Клуб: <span className="back__data">Club</span>{' '}
            </div>
            <div className="back__text">
              Майстер: <span className="back__data">{info.MasterName}</span>{' '}
            </div>
            <div className="back__text">
              Що: <span className="back__data">DND</span>{' '}
            </div>
            <div className="back__text">
              Де: <span className="back__data">{info.Location}</span>{' '}
            </div>
            <div className="back__text">
              Коли: <span className="back__data">{info.StartTime}</span>{' '}
            </div>
            <div className="back__text">
              Рівні:{' '}
              <span className="back__data">
                {info.MinLevel} {' - '} {info.MaxLevel}
              </span>{' '}
            </div>
            <div className="back__text">
              Доступні місця:{' '}
              <span className="back__data">
                {info.MaxPlayer - info.CurrentPlayers}
              </span>{' '}
            </div>
            <div className="back__text">
              Ціна:{' '}
              <span className="back__data">{info.PricePerPlayer} грн</span>
            </div>
            <div className="back__text">
              Тип партії: <span className="back__data">Ofline</span>{' '}
            </div>
          </div>
          <div className="back__btn">Зареєструватись</div>
        </div>
      </Link>
    </>
  );
}
