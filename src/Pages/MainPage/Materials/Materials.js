import React from "react";
import "./Materials.scss";

import Button from "../../../Components/Button/Button.js";

export default function Materials() {
  return (
    <div className="materials container mainPage__block">
      <div className="materials__title">Навчальні матеріали</div>
      <div className="materials__text">
        Навчальні матеріали з Dungeons & Dragons (D&D) можна знайти в різних
        джерелах, що допоможуть новачкам і досвідченим гравцям зрозуміти гру
        краще. Один із основних джерел - це офіційні книги, такі як Player's
        Handbook, Dungeon Master's Guide і Monster Manual, вони містять правила,
        приклади і поради. 
        <br/> <br/>
        Існують також відеоуроки на YouTube від досвідчених
        гравців і гейм-мастерів, які детально пояснюють правила і стратегії гри.
        Багато ігрових платформ, таких як Roll20 або Fantasy Grounds, пропонують
        роздруковані матеріали та онлайн-підтримку для гравців. На форумах і
        соціальних мережах, таких як Reddit або Facebook, є активні спільноти
        гравців D&D, які діляться своїм досвідом, питаннями та ресурсами. Для
        глибшого розуміння гри можна звертатись до блогів та подкастів, де
        експерти і художники D&D обговорюють креативні ігрові підходи та світ
        гри. 
        <br/> <br/>
        Нарешті, офіційний вебсайт D&D має багато безкоштовних матеріалів,
        які допоможуть розпочати пригоду в цьому захоплюючому світі настільних
        рольових ігор.
      </div>

      <div className="materials__btn">
        <Button text="Дізнатись більше" type="white"/>
      </div>
    </div>
  );
}
