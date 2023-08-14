import React, { useEffect } from 'react';
import "./Calendar.scss";
// import Moment from 'react-moment';
import moment from 'moment';

import Filters from "../../Modules/Filters/Filters.js";
import CalendarDay from "../../Modules/CalendarDay/CalendarDay.js";
import testGame from "../../Assets/Images/testGame.png";
import { useThunk } from "../../Hooks/useThunk";
import { fetchSessions } from "../../Store";
import { useSelector } from "react-redux";
import CustomButton from "../../Components/CustomButton/CustomButton";

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
  const [doFetchSessions, fetchSessionsError] = useThunk(fetchSessions);
  const { sessions } = useSelector((state) => state.sessions);
  const { user } = useSelector((state) => state.auth);

  // get days dates
  const myMoment = require('moment');
  const today = myMoment();
  const daysInWeek = [];
  daysInWeek.push(today.format('DD.MM'));
  for (let i = 1; i <= 6; i++) {
    const nextDay = today.clone().add(i, 'days');
    daysInWeek.push(nextDay.format('DD.MM'));
  }

  // get days names
  const moment = require('moment');
  const daysOfWeekNames = moment.weekdays(); // Масив назв англійських днів тижня

  let weekDays = [];
  const todayIndex = today.day(); 
  for (let i = todayIndex; i <= 6; i++) {
    weekDays.push(daysOfWeekNames[i]);
  }
  for (let i = 0; i < todayIndex; i++) {
    weekDays.push(daysOfWeekNames[i]);
  }
  const translationMap = {
    'понеділок': 'Monday',
    'вівторок': 'Tuesday',
    'середа': 'Wednesday',
    'четвер': 'Thursday',
    'п’ятниця': 'Friday',
    'субота': 'Saturday',
    'неділя': 'Sunday'
  };
  weekDays = weekDays.map(dayUkr => translationMap[dayUkr]);
  console.log(weekDays)


  useEffect(() => {
    doFetchSessions({
      "daysBefore": 1, // todo move to const current week -> nextWeek() || prevWeek()
      "daysAfter": 7
    });
  }, [doFetchSessions]);

  // console.log('sessions in calendar', sessions);

  let week = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
  }
  let test = [
    {
      "Id": 3,
      "Name": "Test Session",
      "Description": "Dalekwik`s Test session",
      "ImageURL": "string",
      "StartTime": "16-08 07:42",
      "MaxPlayer": 5,
      "MinLevel": 1,
      "MaxLevel": 5,
      "Visible": 1,
      "PricePerPlayer": 150,
      "LocationType": 1,
      "Location": "Re:Bro",
      "Tags": [
          "DnD",
          "NewBie"
      ],
      "Day": 5,
      "MasterName": "",
      "Difficult": 0,
      "CurrentPlayers": 0
    },
    {
      "Id": 3,
      "Name": "Test Session",
      "Description": "Dalekwik`s Test session",
      "ImageURL": "string",
      "StartTime": "15-08 07:42",
      "MaxPlayer": 5,
      "MinLevel": 1,
      "MaxLevel": 5,
      "Visible": 1,
      "PricePerPlayer": 150,
      "LocationType": 1,
      "Location": "Re:Bro",
      "Tags": [
          "DnD",
          "NewBie"
      ],
      "Day": 5,
      "MasterName": "",
      "Difficult": 0,
      "CurrentPlayers": 0
    },
    {
      "Id": 3,
      "Name": "Test Session",
      "Description": "Dalekwik`s Test session",
      "ImageURL": "string",
      "StartTime": "18-08 07:42",
      "MaxPlayer": 5,
      "MinLevel": 1,
      "MaxLevel": 5,
      "Visible": 1,
      "PricePerPlayer": 150,
      "LocationType": 1,
      "Location": "Re:Bro",
      "Tags": [
          "DnD",
          "NewBie"
      ],
      "Day": 5,
      "MasterName": "",
      "Difficult": 0,
      "CurrentPlayers": 0
    },
  ]
  function getData() {
    const format = 'DD-MM HH:mm';
    test.map((el)=>{
      const dateMoment = moment(el.StartTime, format);
      switch(dateMoment.day()){
        case 0:
          el.day = "Sunday";
          break;
        case 1:
          el.day = "Monday";
          break;
        case 2:
          el.day = "Tuesday";
          break;
        case 3:
          el.day = "Wednesday";
          break;
        case 4:
          el.day = "Thursday";
          break;
        case 5:
          el.day = "Friday";
          break;
        case 6:
          el.day = "Saturday";
          break;
        default:
          el.day = "Invalid day";
          break;
      }
    })
    sortByDay()
  }
  function sortByDay() {
    test.map((el) => {
      week[el.day].push(el);
    })
  }

  getData()

  return (
      <div className="calendar">
        <Filters/>
        <div className="calendar__week">
          <div className="calendar__navigation"></div>
          <CalendarDay day={weekDays[0]} date={daysInWeek[0]} games={week.Monday}/>
          <CalendarDay day={weekDays[1]} date={daysInWeek[1]} games={week.Tuesday}/>
          <CalendarDay day={weekDays[2]} date={daysInWeek[2]} games={week.Wednesday}/>
          <CalendarDay day={weekDays[3]} date={daysInWeek[3]} games={week.Thursday}/>
          <CalendarDay day={weekDays[4]} date={daysInWeek[4]} games={week.Friday}/>
          <CalendarDay day={weekDays[5]} date={daysInWeek[5]} games={week.Saturday}/>
          <CalendarDay day={weekDays[6]} date={daysInWeek[6]} games={week.Sunday}/>
        </div>
        {
          (user && (user.role === "Admin" || user.role === "DM")) ? <CustomButton type={'_gold_rightCorner'} to={'/game_creator'}/> : null
        }
      </div>
  )
}
