import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { differenceInDays, parse, add } from 'date-fns';
import {
  Grid,
  Container,
  Box,
  CircularProgress,
  Button,
  Typography,
  SwipeableDrawer,
  IconButton,
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
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
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
          if (groups[offset]) {
            groups[offset].sessions.push({
              ...session,
              StartTime: sessionDate,
            });
          }
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
      {isMd && <Filters />}
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
          </Box>
        </Container>
      </div>
      {['Admin', 'DM'].includes(user?.role) && (
        <Link to="/game_creator" className={classes.addSessionButton}>
          <AddIcon />
        </Link>
      )}
    </div>
  );
};

export default Calendar;
