import React, { useEffect } from 'react';
import "./Calendar.scss";
// import Moment from 'react-moment';
import moment from 'moment';

import Filters from "../../Modules/Filters/Filters.js";
import CalendarDay from "../../Modules/CalendarDay/CalendarDay.js";
import { useThunk } from "../../Hooks/useThunk";
import { fetchSessions } from "../../Store";
import { useSelector } from "react-redux";
import CustomButton from "../../Components/CustomButton/CustomButton";

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


  useEffect(() => {
    doFetchSessions({
      "daysBefore": 1, // todo move to const current week -> nextWeek() || prevWeek()
      "daysAfter": 7
    });
  }, [doFetchSessions]);

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
    // if (sessions) {
      const format = 'DD-MM HH:mm';
      sessions.map((el) => {
        const dateMoment = moment(el.StartTime, format);
        switch (dateMoment.day()) {
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
      sessions.map((el) => {
        week[el.day].push(el);
      })
    // }
  }

  if (sessions) {
    getData()
  }

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
