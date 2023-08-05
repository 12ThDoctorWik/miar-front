import React from "react";
import "./GameCard.scss";

import { lock, star } from "../../Assets/Icons/icons.js";

export default function GameCard({ info }) {

  return (
    <>
      <a class="gameCard" href="#!">
        <div
          class="front"
          style={{ backgroundImage: "url(" + info.photo + ")" }}
        >
          <div className="gameCard__marks">
            {info.isPrivate ? (
              <img src={lock} alt="private" className="gameCard__mark" />
            ) : null}
            <img src={star} alt="star" className="gameCard__mark" />
          </div>
          <div className="gameCard__overlay">
            <div className="gameCard__title">{info.title}</div>
          </div>
        </div>

        <div class="back">
          <div>SOME INFORMATION</div>
        </div>
      </a>
    </>
  );
}
