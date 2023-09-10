import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { add, differenceInDays, isSameDay, addDays, format } from 'date-fns';
import { Grid, Box, Stack, Button } from '@mui/material';
import { useSessionsContext } from '@features/sessions/providers/SessionsProvider';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({}));

export const SessionListToolbar = () => {
  const { timeRange, setTimeRange } = useSessionsContext();
  const [_, setSearchParams] = useSearchParams();

  const handleSearchParams = useCallback(
    ({ from, to }) => {
      if (
        !(isSameDay(from, new Date()) && isSameDay(to, addDays(new Date(), 6)))
      ) {
        setSearchParams({
          from: format(from, 'yyyy-MM-dd'),
          to: format(to, 'yyyy-MM-dd'),
        });
      } else {
        setSearchParams({});
      }
    },
    [setSearchParams]
  );

  const nextPeriod = useCallback(() => {
    const days = differenceInDays(timeRange.to, timeRange.from) + 1;
    const from = add(timeRange.from, { days });
    const to = add(timeRange.to, { days });
    setTimeRange({
      from,
      to,
    });
    handleSearchParams({ from, to });
  }, [timeRange, setTimeRange, handleSearchParams]);

  const prevPeriod = useCallback(() => {
    const days = -(differenceInDays(timeRange.to, timeRange.from) + 1);
    const from = add(timeRange.from, { days });
    const to = add(timeRange.to, { days });
    setTimeRange({
      from,
      to,
    });
    handleSearchParams({ from, to });
  }, [timeRange, setTimeRange, handleSearchParams]);

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
