import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { differenceInDays, parse, add } from 'date-fns';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Filters from '../../Modules/Filters/Filters.js';
import { CalendarDay } from '../../Modules/CalendarDay/CalendarDay.js';
import { useThunk } from '../../Hooks/useThunk';
import { fetchSessions } from '../../Store';
import CustomButton from '../../Components/CustomButton/CustomButton';

import './Calendar.scss';

const Calendar = () => {
  const [doFetchSessions, _, isLoading] = useThunk(fetchSessions);
  const { sessions } = useSelector(state => state.sessions);
  const { user } = useSelector(state => state.auth);

  const groupedSessions = useMemo(
    () =>
      (sessions || []).reduce(
        (groups, session) => {
          const sessionDate = parse(
            session.StartTime,
            'dd-MM HH:mm',
            new Date()
          );
          const offset = differenceInDays(sessionDate, new Date());
          groups[offset].sessions.push({
            ...session,
            StartTime: sessionDate,
          });
          return groups;
        },
        new Array(7).fill({}).map((_, index) => ({
          date: add(new Date(), { days: index }),
          sessions: [],
        }))
      ),
    [sessions]
  );

  useEffect(() => {
    doFetchSessions({
      daysBefore: 1, // todo move to const current week -> nextWeek() || prevWeek()
      daysAfter: 7,
    });
  }, [doFetchSessions]);

  return (
    <div className="calendar">
      <Filters />
      <div className="calendar__week">
        <div className="calendar__navigation"></div>
        <Container px={5} py={1} maxWidth="xl">
          <Grid container spacing={2}>
            {isLoading ? (
              <Box py={5} width="100%" display="flex" justifyContent="center">
                <CircularProgress size={36} />
              </Box>
            ) : (
              groupedSessions.map((group, index) => (
                <Grid item xs={12} key={group.date}>
                  <CalendarDay
                    date={group.date}
                    sessions={group.sessions}
                    isToday={index === 0}
                  />
                </Grid>
              ))
            )}
          </Grid>
        </Container>
      </div>
      {user && (user.role === 'Admin' || user.role === 'DM') ? (
        <CustomButton type={'_gold_rightCorner'} to={'/game_creator'} />
      ) : null}
    </div>
  );
};

export default Calendar;
