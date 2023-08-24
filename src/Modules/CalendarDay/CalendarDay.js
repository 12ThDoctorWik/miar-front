import { useMemo } from 'react';
import { format, isWithinInterval, parseISO } from 'date-fns';
import { Grid, Box, Divider } from '@mui/material';
import { GameCard } from '../../Components/GameCard/GameCard.js';
import './CalendarDay.scss';
import SoonGameCard from '../../Components/SoonGameCard/SoonGameCard.js';
import diceconlong from '@/Assets/Images/diceconlong.png';

export const CalendarDay = ({ date, sessions, isToday }) => {
  const isDiceConDay = useMemo(
    () =>
      isWithinInterval(date, {
        start: parseISO('2023-09-01'),
        end: parseISO('2023-09-03'),
      }),
    [date]
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div className="calendarDay__title">
          {isToday && 'Сьогодні • '}
          {format(date, 'eeee, d MMMM')}
        </div>
      </Grid>
      {isDiceConDay && (
        <Grid item xs={12} borderRadius={2} position="relative" mb={3}>
          <Divider
            variant="middle"
            sx={{ borderColor: 'rgba(242, 222, 161, 1)' }}
          />
          <Box
            sx={{
              backgroundColor: 'rgba(242, 222, 161, 1)',
              position: 'absolute',
              top: 'calc(50% + 8px)',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              borderRadius: 2,
            }}
          >
            <img height={42} alt="DiceCon" src={diceconlong} />
          </Box>
        </Grid>
      )}
      <Grid item xs={12} container spacing={2}>
        {sessions.length > 0 ? (
          sessions.map(session => (
            <Grid key={session.Id} item xs={12} sm={6} md={4} lg={3} xl={2}>
              <GameCard session={session} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12} sm={12} md={7} lg={6} xl={5}>
            <Box py={4} px={1} className="calendarDay__warning">
              <SoonGameCard />
            </Box>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
