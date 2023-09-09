import { useCallback } from 'react';
import { add, differenceInDays } from 'date-fns';
import { Grid, Box, Stack, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSessionsContext } from '@features/sessions/providers/SessionsProvider';

const useStyles = makeStyles(theme => ({}));

export const SessionListToolbar = () => {
  const { timeRange, setTimeRange } = useSessionsContext();

  const nextPeriod = useCallback(() => {
    const days = differenceInDays(timeRange.to, timeRange.from) + 1;
    setTimeRange({
      from: add(timeRange.from, { days }),
      to: add(timeRange.to, { days }),
    });
  }, [timeRange, setTimeRange]);

  const prevPeriod = useCallback(() => {
    const days = -(differenceInDays(timeRange.to, timeRange.from) + 1);
    setTimeRange({
      from: add(timeRange.from, { days }),
      to: add(timeRange.to, { days }),
    });
  }, [timeRange, setTimeRange]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}></Grid>
      <Grid item xs={12} md={6} display="flex" justifyContent="flex-end">
        <Box py={2}>
          <Stack direction="row" spacing={2}>
            <Button
              onClick={prevPeriod}
              disabled={!(timeRange.from && timeRange.to)}
            >
              На тиждень назад
            </Button>
            <Button
              onClick={nextPeriod}
              disabled={!(timeRange.from && timeRange.to)}
            >
              На тиждень вперед
            </Button>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};
