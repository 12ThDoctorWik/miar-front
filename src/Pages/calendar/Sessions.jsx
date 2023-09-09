import { useState, useEffect, useLayoutEffect } from 'react';
import { addDays, parseISO, format } from 'date-fns';
import {
  Container,
  Box,
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
import { useSessionsContext } from '@features/sessions/providers/SessionsProvider';
import { useAuthContext } from '@providers/AuthProvider';
import { SessionList } from '@features/sessions/components/SessionList';
import { useCustomSearchParams } from '@hooks/use-custom-search-params';

const useStyles = makeStyles(theme => {
  return {
    wrapper: {
      background: 'rgba(18, 19, 22, 255)',
      [theme.breakpoints.up('md')]: {
        display: 'grid',
        // grid-template-columns: 15vw auto;
        gridTemplateColumns: 'auto',
      },
    },
    week: {
      display: 'flex',
      flexDirection: 'column',
      columnGap: '90px',
      minHeight: 'calc(100vh - 72px)',
    },
    addSessionButton: {
      position: 'fixed',
      right: '1.5rem',
      bottom: '1.5rem',
      backgroundColor: 'rgba(242, 222, 161, 1)',
      padding: '1rem',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#121316',
      '&:active': {
        color: 'inherit',
      },
      '&:hover': {
        backgroundColor: 'rgba(242, 222, 161, 1)',
      },
    },
  };
});

const Sessions = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const { currentUser } = useAuthContext();
  const { showSessionForm, timeRange, setTimeRange } = useSessionsContext();
  const [searchParams, setSearchParams] = useCustomSearchParams({});

  // TODO: set time range to search params & localStorage
  // useEffect(() => {
  //   localStorage.setItem('calendar-filters', JSON.stringify(searchParams));
  // }, [searchParams]);

  // useEffect(() => {
  //   setSearchParams({
  //     from: format(timeRange.from, 'yyyy-MM-dd'),
  //     to: format(timeRange.to, 'yyyy-MM-dd'),
  //   });
  // }, [timeRange, setSearchParams]);

  useEffect(() => {
    setTimeRange({
      from: searchParams.from ? parseISO(searchParams.from) : new Date(),
      to: searchParams.to ? parseISO(searchParams.to) : addDays(new Date(), 6),
    });
  }, []);

  return (
    <div className={classes.wrapper}>
      {/* {isMd && <Filters />} */}
      <div className={classes.week}>
        {isMd || (
          <>
            <Box
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
          <SessionList />
        </Container>
      </div>
      {['ADMIN', 'DM'].includes(currentUser?.Role.toUpperCase()) && (
        <IconButton
          onClick={() => showSessionForm()}
          className={classes.addSessionButton}
        >
          <AddIcon />
        </IconButton>
      )}
    </div>
  );
};

export default Sessions;
