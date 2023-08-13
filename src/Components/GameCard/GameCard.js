import React from "react";
import "./GameCard.scss";

import { lock, star, date, master, location } from "../../Assets/Icons/icons.js";

export default function GameCard({ info }) {

  return (
    <>
      <a className="gameCard" href="#!">
        <div
          className="front"
          style={{ backgroundImage: "url(" + info.photo + ")" }}
        >
          <div className="gameCard__marks">
            {info.isPrivate ? (
              <img src={lock} alt="private" className="gameCard__mark" />
            ) : null}
          </div>
          <div className="gameCard__overlay">
            <div className="gameCard__title">{info.title}</div>
            <div className="gameCard__data">
              <div className="gameCard__line"><img src={master} alt="master"/> <span>{info.details.master}</span></div>
              <div className="gameCard__line"><img src={date} alt="date"/> <span>{info.details.when}</span></div>
              <div className="gameCard__line"><img src={location} alt="location"/> <span>{info.details.where}</span></div>
            </div>
          </div>
        </div>

        <div className="back">
          <div className="back__info">
            <div className="back__text">
              Клуб: <span className="back__data">{info.details.club}</span>{" "}
            </div>
            <div className="back__text">
              Майстер: <span className="back__data">{info.details.master}</span>{" "}
            </div>
            <div className="back__text">
              Що: <span className="back__data">{info.details.what}</span>{" "}
            </div>
            <div className="back__text">
              Де: <span className="back__data">{info.details.where}</span>{" "}
            </div>
            <div className="back__text">
              Коли: <span className="back__data">{info.details.when}</span>{" "}
            </div>
            <div className="back__text">
              Рівні: <span className="back__data">{info.details.levels}</span>{" "}
            </div>
            <div className="back__text">
              Доступні місця:{" "}
              <span className="back__data">{info.details.places}</span>{" "}
            </div>
            <div className="back__text">
              Ціна: <span className="back__data">{info.details.price} грн</span>
            </div>
            <div className="back__text">
              Тип партії:{" "}
              <span className="back__data">{info.details.type}</span>{" "}
            </div>
          </div>
          <div className="back__btn">Зареєструватись</div>
        </div>
      </a>
    </>
  );
}
