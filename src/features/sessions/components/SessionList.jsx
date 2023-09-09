import { useMemo } from 'react';
import { format } from 'date-fns';
import { Grid, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { LoadingIndicator } from '@components/ui/LoadingIndicator';
import { useSessionsStore } from '@features/sessions/hooks';
import { groupSessionsByDay } from '@features/sessions/utils';

import { GameCard } from '@components/GameCard/GameCard';
import SoonGameCard from '@components/SoonGameCard/SoonGameCard';
import { useSessionsContext } from '@features/sessions/providers/SessionsProvider';
import { SessionListToolbar } from './SessionListToolbar';

const useStyles = makeStyles(theme => ({
  dayLabel: {
    display: 'inline-block',
    backgroundColor: '#FFFFFF0D',
    borderRadius: 4,
    padding: theme.spacing(1, 2),
    color: '#FFFFFFDE',
    fontFamily: 'Inter',
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '-0.019em',
  },
}));

export const SessionList = () => {
  const classes = useStyles();
  const { timeRange } = useSessionsContext();
  const { sessions, isLoading } = useSessionsStore({
    fromDate: timeRange.from && format(timeRange.from, 'yyyy-MM-dd'),
    toDate: timeRange.to && format(timeRange.to, 'yyyy-MM-dd'),
    skip: !(timeRange.from && timeRange.to),
  });

  const groupedSessions = useMemo(
    () => groupSessionsByDay({ sessions, ...timeRange }),
    [sessions, timeRange]
  );

  return (
    <Box py={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SessionListToolbar />
        </Grid>
        {isLoading ? (
          <Grid item xs={12}>
            <Box py={5} width="100%" display="flex" justifyContent="center">
              <LoadingIndicator />
            </Box>
          </Grid>
        ) : (
          <>
            {groupedSessions.map(group => (
              <Grid item xs={12} container spacing={2} key={group.date}>
                <Grid item xs={12}>
                  <Box className={classes.dayLabel}>
                    {group.isToday && 'Сьогодні • '}
                    {format(group.date, 'eeee, d MMMM')}
                  </Box>
                </Grid>

                {group.sessions.map(session => (
                  <Grid
                    key={session.Id}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                  >
                    <GameCard session={session} />
                  </Grid>
                ))}

                {group.sessions.length === 0 && (
                  <Grid item xs={12} sm={12} md={7} lg={6} xl={5}>
                    <Box py={4} px={1} className="calendarDay__warning">
                      <SoonGameCard />
                    </Box>
                  </Grid>
                )}
              </Grid>
            ))}
            <Grid item xs={12}>
              <SessionListToolbar />
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};
