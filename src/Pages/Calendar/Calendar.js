import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  differenceInCalendarDays,
  eachDayOfInterval,
  parse,
  addWeeks,
  subWeeks,
  parseISO,
  isToday,
  format,
  isBefore,
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
import { useGamesContext } from '@providers/GamesProvider';
import { useAuthContext } from '@providers/AuthProvider';
import { useSessionsStore } from '@features/sessions/hooks';
import { useLocalStorage } from '@hooks/use-local-storage';

import './Calendar.scss';

const useStyles = makeStyles(() => {
  return {
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
  };
});

const Calendar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const { currentUser } = useAuthContext();
  const { showGameForm } = useGamesContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [savedFilters, setSavedFilters] = useLocalStorage('calendar-filters', {
    from: '2023-09-03',
    to: '2023-09-09',
  });
  const filters = useMemo(() => {
    const from = searchParams.get('from') || '2023-09-03';
    const to = searchParams.get('to') || '2023-09-09';

    if (isBefore(parseISO(to), parseISO(from))) return null;

    return {
      from,
      to,
    };
  }, [searchParams]);
  const { sessions, isLoading } = useSessionsStore({
    fromDate: filters?.from,
    toDate: filters?.to,
    skip: !filters,
  });

  const groupedSessions = useMemo(() => {
    const days = eachDayOfInterval({
      start: parseISO(filters.from),
      end: parseISO(filters.to),
    });
    return (sessions || []).reduce(
      (groups, session) => {
        const sessionDate = parse(session.StartTime, 'dd-MM HH:mm', new Date());
        const offset = differenceInCalendarDays(
          sessionDate,
          parseISO(filters.from)
        );
        if (groups[offset]) {
          groups[offset].sessions.push({
            ...session,
            StartTime: sessionDate,
          });
        }
        return groups;
      },
      new Array(days.length).fill({}).map((_, index) => ({
        date: days[index],
        isToday: isToday(days[index]),
        sessions: [],
      }))
    );
  }, [sessions, filters]);

  const nextWeek = () => {
    const data = {
      from: format(addWeeks(parseISO(filters.from), 1), 'yyyy-MM-dd'),
      to: format(addWeeks(parseISO(filters.to), 1), 'yyyy-MM-dd'),
    };
    setSearchParams(data);
    setSavedFilters(data);
  };
  const prevWeek = () => {
    const data = {
      from: format(subWeeks(parseISO(filters.from), 1), 'yyyy-MM-dd'),
      to: format(subWeeks(parseISO(filters.to), 1), 'yyyy-MM-dd'),
    };
    setSearchParams(data);
    setSavedFilters(data);
  };

  // useLayoutEffect(() => {
  //   if (!(searchParams.has('from') && searchParams.has('to'))) {
  //     setSearchParams(savedFilters);
  //   }
  // });

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
      {['ADMIN', 'DM'].includes(currentUser?.Role.toUpperCase()) && (
        <Link
          onClick={() => showGameForm()}
          className={classes.addSessionButton}
        >
          <AddIcon />
        </Link>
      )}
    </div>
  );
};

export default Calendar;
