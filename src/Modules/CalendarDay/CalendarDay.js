import { format } from 'date-fns';
import { Grid, Box, Divider } from '@mui/material';
import { GameCard } from '../../Components/GameCard/GameCard.js';
import './CalendarDay.scss';
import SoonGameCard from '../../Components/SoonGameCard/SoonGameCard.js';

export const CalendarDay = ({ date, sessions, isToday }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div className="calendarDay__title" style={{ marginBottom: '16px' }}>
          {isToday && 'Сьогодні • '}
          {format(date, 'eeee, d MMMM')}
        </div>
      </Grid>
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
