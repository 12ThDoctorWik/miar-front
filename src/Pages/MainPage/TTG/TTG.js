import React from 'react';
import './TTG.scss';

import Bubble from '../../../Components/Bubble/Bubble.js';
import Button from '../../../Components/Button/Button.js';

export default function TTG() {
  function randAnim(left, top) {
    let identHalfTop = Math.floor(Math.random() * (5 - 1) + 1);
    let identHalfLeft = Math.floor(Math.random() * (5 - 1) + 1);

    let identEndTop = Math.floor(Math.random() * (5 - 1) + 1);
    let identEndLeft = Math.floor(Math.random() * (5 - 1) + 1);

    return {
      start: {
        top: top + 'vh',
        left: left + 'vw',
      },
      half: {
        top: top + identHalfTop + 'vh',
        left: left + identHalfLeft + 'vw',
      },
      end: {
        top: top + identEndTop + 'vh',
        left: left + identEndLeft + 'vw',
      },
    };
  }

  return (
    <div className="ttg container mainPage__block">
      <div className="ttg__title">Настільно Рольові Ігри </div>
      <div className="ttg__text">
        НРІ - це жанр ігор, в яких гравці приймають на себе ролі фантастичних
        або історичних персонажів. У цих іграх великий акцент приділяється
        взаємодії гравців між собою та наративному аспекту.
        <br /> <br />
        НРІ часто мають добре розроблений наратив або сюжет, який гравці
        допомагають розгортати. Ігровий майстер або ведучий гри (Game Master або
        Dungeon Master) виступає як фасилітатор, описуючи світ, створюючи
        ситуації та керуючи взаємодією між персонажами та оточуючим світом.
      </div>

      <div className="ttg__btn">
        <Button text="Дізнатись більше" type="transparent" />
      </div>

      <Bubble text="Dungeons & Dragons" myId={'dnd'} anim={randAnim(0, 0)} />
      <Bubble text="Call of Cthulhu" myId={'call'} anim={randAnim(4, 20)} />
      <Bubble text="Pathfinder" myId={'pathfinder'} anim={randAnim(40, 5)} />
      <Bubble text="Other" myId={'other'} anim={randAnim(35, 30)} />
    </div>
  );
}
