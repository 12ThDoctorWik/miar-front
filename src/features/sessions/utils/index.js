import {
  differenceInCalendarDays,
  eachDayOfInterval,
  isToday,
  isBefore,
} from 'date-fns';

export const groupSessionsByDay = ({ sessions, from, to }) => {
  if (!(from && to && isBefore(from, to))) {
    return [];
  }
  const days = eachDayOfInterval({
    start: from,
    end: to,
  });
  return (sessions || []).reduce(
    (groups, session) => {
      const offset = differenceInCalendarDays(session.StartTime, from);
      if (groups[offset]) {
        groups[offset].sessions.push(session);
      }
      return groups;
    },
    new Array(days.length).fill({}).map((_, index) => ({
      date: days[index],
      isToday: isToday(days[index]),
      sessions: [],
    }))
  );
};
