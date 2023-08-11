import React from 'react';
import "./Calendar.scss";
import Moment from 'react-moment';
import moment from 'moment';

import Filters from "../../Modules/Filters/Filters.js";
import CalendarDay from "../../Modules/CalendarDay/CalendarDay.js";
import testGame from "../../Assets/Images/testGame.png";

let info = [
  {
    photo: testGame,
    title: "Старе (не) добре підземелля",
    isPrivate: true,
    date: '',
    day: 'Saturday'
  },
  {
    photo: testGame,
    title: "Старе (не) добре підземелля",
    isPrivate: true,
    date: '',
    day: 'Monday'
  },
  {
    photo: testGame,
    title: "Старе (не) добре підземелля",
    isPrivate: true,
    date: '',
    day: 'Sunday'
  },
  {
    photo: testGame,
    title: "Старе (не) добре підземелля",
    isPrivate: true,
    date: '',
    day: 'Monday'
  },
  {
    photo: testGame,
    title: "Старе (не) добре підземелля",
    isPrivate: true,
    date: '',
    day: 'Monday'
  },
  {
    photo: testGame,
    title: "Старе (не) добре підземелля",
    isPrivate: true,
    date: '',
    day: 'Friday'
  }
]

export default function Calendar() {

  let week = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
  }


  function sortByDay() {
    info.map((el)=>{
      week[el.day].push(el);
    })
    console.log(week)
  }

  const moment = require('moment');
  const today = moment();
  const dayOfWeek = today.day();
  const mondayDate = today.clone().subtract(dayOfWeek - 1, 'days').format('DD.MM');
  const daysInWeek = [];
  for (let i = 0; i < 7; i++) {
    const currentDate = today.clone().subtract(dayOfWeek - 1 - i, 'days').format('DD.MM');
    daysInWeek.push(currentDate);
  }
  

  sortByDay();

  const currentDate = moment();
  const daysInCurrentMonth = currentDate.daysInMonth();

  return(
    <div className="calendar">
      <Filters/>
      <div className="calendar__week">
        <CalendarDay day="Monday" date={daysInWeek[0]} games={week.Monday}/>
        <CalendarDay day="Tuesday" date={daysInWeek[1]} games={week.Tuesday}/>
        <CalendarDay day="Wednesday" date={daysInWeek[2]} games={week.Wednesday}/>
        <CalendarDay day="Thursday" date={daysInWeek[3]} games={week.Thursday}/>
        <CalendarDay day="Friday" date={daysInWeek[4]} games={week.Friday}/>
        <CalendarDay day="Saturday" date={daysInWeek[5]} games={week.Saturday}/>
        <CalendarDay day="Sunday" date={daysInWeek[6]} games={week.Sunday}/>
      </div>
    </div>
  )
}
