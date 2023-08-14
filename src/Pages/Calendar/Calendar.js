import React, { useEffect } from 'react';
import "./Calendar.scss";
// import Moment from 'react-moment';
// import moment from 'moment';

import Filters from "../../Modules/Filters/Filters.js";
import CalendarDay from "../../Modules/CalendarDay/CalendarDay.js";
import testGame from "../../Assets/Images/testGame.png";
import { useThunk } from "../../Hooks/useThunk";
import { session } from "../../Store";
import { useSelector } from "react-redux";
import CreateGameButton from "../../Components/CreateGameButton/CreateGameButton";

let info = [
  {
    photo: testGame,
    title: "Старе (не) добре підземелля",
    isPrivate: true,
    date: '',
    day: 'Saturday',
    details: {
      club: "Майстерня Рольовика",
      master: "NikkiN",
      what: "DND",
      where: "онлайн",
      when: "7 серпня 18:00",
      levels: "5 - 10",
      places: "2 з 5",
      price: "150",
      type: "Приватна"
    },
    players: [
      {
        name: "John",
        photo: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        username: "@john123"
      },
      {
        name: "Kate",
        photo: "",
        username: "noth_str_"
      },
      {
        name: "Bob",
        photo: "",
        usename: "bobo2bo3"
      }
    ]
  },
  {
    photo: testGame,
    title: "Старе (не) добре підземелля",
    isPrivate: false,
    date: '',
    day: 'Monday',
    details: {
      club: "Майстерня Рольовика",
      master: "NikkiN",
      what: "DND",
      where: "онлайн",
      when: "7 серпня 18:00",
      levels: "5 - 10",
      places: "2 з 5",
      price: "150",
      type: "Приватна"
    },
    players: [
      {
        name: "John",
        photo: "",
        username: "@john123"
      },
      {
        name: "Kate",
        photo: "",
        username: "noth_str_"
      },
      {
        name: "Bob",
        photo: "",
        usename: "bobo2bo3"
      }
    ]
  },
  {
    photo: testGame,
    title: "Старе (не) добре підземелля",
    isPrivate: true,
    date: '',
    day: 'Sunday',
    details: {
      club: "Майстерня Рольовика",
      master: "NikkiN",
      what: "DND",
      where: "онлайн",
      when: "7 серпня 18:00",
      levels: "5 - 10",
      places: "2 з 5",
      price: "150",
      type: "Приватна"
    },
    players: [
      {
        name: "John",
        photo: "",
        username: "@john123"
      },
      {
        name: "Kate",
        photo: "",
        username: "noth_str_"
      },
      {
        name: "Bob",
        photo: "",
        usename: "bobo2bo3"
      }
    ]
  },
  {
    photo: testGame,
    title: "Старе (не) добре підземелля",
    isPrivate: true,
    date: '',
    day: 'Monday',
    details: {
      club: "Майстерня Рольовика",
      master: "NikkiN",
      what: "DND",
      where: "онлайн",
      when: "7 серпня 18:00",
      levels: "5 - 10",
      places: "2 з 5",
      price: "150",
      type: "Приватна"
    },
    players: [
      {
        name: "John",
        photo: "",
        username: "@john123"
      },
      {
        name: "Kate",
        photo: "",
        username: "noth_str_"
      },
      {
        name: "Bob",
        photo: "",
        usename: "bobo2bo3"
      }
    ]
  },
  {
    photo: testGame,
    title: "Старе (не) добре підземелля",
    isPrivate: true,
    date: '',
    day: 'Monday',
    details: {
      club: "Майстерня Рольовика",
      master: "NikkiN",
      what: "DND",
      where: "онлайн",
      when: "7 серпня 18:00",
      levels: "5 - 10",
      places: "2 з 5",
      price: "150",
      type: "Приватна"
    },
    players: [
      {
        name: "John",
        photo: "",
        username: "@john123"
      },
      {
        name: "Kate",
        photo: "",
        username: "noth_str_"
      },
      {
        name: "Bob",
        photo: "",
        usename: "bobo2bo3"
      }
    ]
  },
  {
    photo: testGame,
    title: "Старе (не) добре підземелля",
    isPrivate: true,
    date: '',
    day: 'Friday',
    details: {
      club: "Майстерня Рольовика",
      master: "NikkiN",
      what: "DND",
      where: "онлайн",
      when: "7 серпня 18:00",
      levels: "5 - 10",
      places: "2 з 5",
      price: "150",
      type: "Приватна"
    },
    players: [
      {
        name: "John",
        photo: "",
        username: "@john123"
      },
      {
        name: "Kate",
        photo: "",
        username: "noth_str_"
      },
      {
        name: "Bob",
        photo: "",
        usename: "bobo2bo3"
      }
    ]
  }
]

export default function Calendar() {
  const [fetchSessions, fetchSessionsError] = useThunk(session);
  const { sessions } = useSelector((state) => state.sessions);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    fetchSessions({
      "daysBefore": 1, // todo move to const current week -> nextWeek() || prevWeek()
      "daysAfter": 7
    });
  }, [fetchSessions]);

  console.log('sessions in calendar', sessions);

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
    info.map((el) => {
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

  return (
      <div className="calendar">
        <Filters/>
        <div className="calendar__week">
          <div className="calendar__navigation"></div>
          <CalendarDay day="Monday" date={daysInWeek[0]} games={week.Monday}/>
          <CalendarDay day="Tuesday" date={daysInWeek[1]} games={week.Tuesday}/>
          <CalendarDay day="Wednesday" date={daysInWeek[2]} games={week.Wednesday}/>
          <CalendarDay day="Thursday" date={daysInWeek[3]} games={week.Thursday}/>
          <CalendarDay day="Friday" date={daysInWeek[4]} games={week.Friday}/>
          <CalendarDay day="Saturday" date={daysInWeek[5]} games={week.Saturday}/>
          <CalendarDay day="Sunday" date={daysInWeek[6]} games={week.Sunday}/>
        </div>
        {
          (user && (user.role === "Admin" || user.role === "DM")) ? <CreateGameButton text="+" type="gold_rightCorner" to="/game_creator"/> : null
        }
      </div>
  )
}
