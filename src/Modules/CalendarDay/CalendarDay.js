import React from 'react';
import './CalendarDay.scss';
import GameCard from '../../Components/GameCard/GameCard.js';
import moment from 'moment';

export default function CalendarDay({ day, date, games }) {
  let ukrDay = '';
  if (moment().format('DD.MM') == date) ukrDay = 'Сьогодні • ';

  switch (day) {
    case 'Monday':
      ukrDay += 'Понеділок';
      break;
    case 'Tuesday':
      ukrDay += 'Вівторок';
      break;
    case 'Wednesday':
      ukrDay += 'Середа';
      break;
    case 'Thursday':
      ukrDay += 'Четвер';
      break;
    case 'Friday':
      ukrDay += "П'ятниця";
      break;
    case 'Saturday':
      ukrDay += 'Субота';
      break;
    case 'Sunday':
      ukrDay += 'Неділя';
      break;
    default:
      ukrDay = 'Невідомий день';
      break;
  }

  return (
    <div className="calendarDay">
      <div className="calendarDay__title">
        {ukrDay}, {date}
      </div>
      <div className="calendarDay__games">
        {games.length > 0 ? (
          games.map(el => {
            return <GameCard info={el} />;
          })
        ) : (
          <div className="calendarDay__warning">Готуємо анонси...</div>
        )}
      </div>
    </div>
  );
}
