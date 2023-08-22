import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import {
  differenceInCalendarDays,
  parse,
  add,
  addWeeks,
  subWeeks,
  formatISO,
  parseISO,
  isToday,
  format,
} from 'date-fns';
import {
  Grid,
  Container,
  Box,
  CircularProgress,
  Button,
  Typography,
  SwipeableDrawer,
  IconButton,
  Dialog,
  Stack,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Filters from '../../Modules/Filters/Filters.js';
import { CalendarDay } from '../../Modules/CalendarDay/CalendarDay.js';
import { useThunk } from '../../Hooks/useThunk';
import { fetchSessions } from '../../Store';
import { GameDetails } from '../../Components/GameDetails/GameDetails';
import { useGamesContext } from '../../providers/GamesProvider';

import './Calendar.scss';

const useStyles = makeStyles(() => ({
  addSessionButton: {
    position: 'fixed',
    right: '3.75rem',
    bottom: '1rem',
    backgroundColor: 'rgba(242, 222, 161, 1)',
    padding: '1rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:active': {
      color: 'inherit',
    },
  },
}));

const Calendar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [gameFormIsOpen, setGameFormIsOpen] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [doFetchSessions, _, isLoading] = useThunk(fetchSessions);
  const { sessions } = useSelector(state => state.sessions);
  const { user } = useSelector(state => state.auth);
  const { showGameForm } = useGamesContext();
  const [currentCalendarStart, setCurrentCalendarStart] = useState(
    format(new Date(), 'yyyy-MM-dd')
  );

  const [groupedSessions, setGroupedSessions] = useState([]);

  useEffect(() => {
    doFetchSessions({
      daysBefore: 0,
      daysAfter: 7,
      calcFromDate: currentCalendarStart,
    });
  }, [currentCalendarStart, doFetchSessions]);

  useEffect(() => {
    setGroupedSessions(
      (sessions || []).reduce(
        (groups, session) => {
          const sessionDate = parse(
            session.StartTime,
            'dd-MM HH:mm',
            new Date()
          );
          const offset = differenceInCalendarDays(
            sessionDate,
            parseISO(currentCalendarStart)
          );
          if (groups[offset]) {
            groups[offset].sessions.push({
              ...session,
              StartTime: sessionDate,
            });
          }
          return groups;
        },
        new Array(7).fill({}).map((_, index) => {
          const date = add(parseISO(currentCalendarStart), { days: index });
          return {
            date,
            isToday: isToday(date),
            sessions: [],
          };
        })
      )
    );
  }, [sessions, currentCalendarStart]);

  useEffect(() => {
    const session = searchParams.get('session');
    setSelectedGameId(session);
  }, [searchParams]);

  const nextWeek = () => {
    setCurrentCalendarStart(
      format(addWeeks(parseISO(currentCalendarStart), 1), 'yyyy-MM-dd')
    );
  };
  const prevWeek = () => {
    setCurrentCalendarStart(
      format(subWeeks(parseISO(currentCalendarStart), 1), 'yyyy-MM-dd')
    );
  };
  return (
    <div className="calendar">
      {/* {isMd && <Filters />} */}
      <div className="calendar__week">
        {isMd || (
          <>
            <Box
              className="calendar__navigation"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={1}
            >
              <Typography color="white">Розклад</Typography>
              <Button
                startIcon={<FilterAltOutlinedIcon />}
                color="secondary"
                onClick={() => setDrawerIsOpen(true)}
                disabled
              >
                Фільтри
              </Button>
            </Box>
            <SwipeableDrawer
              anchor="right"
              open={drawerIsOpen}
              classes={{ paper: 'drawer' }}
              disableDiscovery
              disableSwipeToOpen
              onOpen={() => setDrawerIsOpen(true)}
              onClose={() => setDrawerIsOpen(false)}
            >
              <IconButton
                classes={{ root: 'drawer__close' }}
                onClick={() => setDrawerIsOpen(false)}
              >
                <CloseIcon />
              </IconButton>
              <Filters />
            </SwipeableDrawer>
          </>
        )}
        <Container maxWidth="xl">
          <Box py={2}>
            <Stack direction="row" spacing={2}>
              <Button onClick={prevWeek}>На тиждень назад</Button>
              <Button onClick={nextWeek}>На тиждень вперед</Button>
            </Stack>
          </Box>
          <Box py={2}>
            <Grid container spacing={2}>
              {isLoading ? (
                <Box py={5} width="100%" display="flex" justifyContent="center">
                  <CircularProgress size={36} />
                </Box>
              ) : (
                groupedSessions.map(group => (
                  <Grid item xs={12} key={group.date}>
                    <CalendarDay
                      date={group.date}
                      sessions={group.sessions}
                      isToday={group.isToday}
                    />
                  </Grid>
                ))
              )}
            </Grid>
          </Box>
        </Container>
      </div>
      {['ADMIN', 'DM'].includes(user?.role.toUpperCase()) && (
        <Link
          onClick={() => showGameForm()}
          className={classes.addSessionButton}
        >
          <AddIcon />
        </Link>
      )}
      <Dialog
        onClose={() => setSearchParams({})}
        open={!!selectedGameId}
        fullScreen
      >
        {selectedGameId && (
          <GameDetails
            sessionId={selectedGameId}
            onClose={() => setSearchParams({})}
          />
        )}
      </Dialog>
    </div>
  );
};

export default Calendar;
