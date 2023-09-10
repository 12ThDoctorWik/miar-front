import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  add,
  differenceInDays,
  isSameDay,
  addDays,
  format,
  isSameYear,
  isSameMonth,
} from 'date-fns';
import { Grid, Box, Stack, IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useSessionsContext } from '@features/sessions/providers/SessionsProvider';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  currentRange: {
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
  navButton: {
    border: '1px solid #B1C5FF1F',
    backgroundColor: '#B1C5FF1F',
    borderRadius: 4,
    color: '#B1C5FF',
  },
  countIndicator: {
    fontFamily: 'Inter',
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '-0.019em',
    color: '#FFFFFF99',
  },
}));

export const SessionListToolbar = ({ count, isLoading }) => {
  const classes = useStyles();
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
      <Grid item xs={12} md={6} display="flex" alignItems="center">
        {!isLoading && count !== void 0 && (
          <span className={classes.countIndicator}>
            {count > 0
              ? `Знайдено ${count} ігрових партій`
              : 'Не знайдено жодної ігрової партії'}
          </span>
        )}
      </Grid>
      <Grid item xs={12} md={6} display="flex" justifyContent="flex-end">
        <Stack direction="row" spacing={1}>
          <IconButton
            onClick={prevPeriod}
            disabled={!(timeRange.from && timeRange.to)}
            className={classes.navButton}
          >
            <ChevronLeftIcon />
          </IconButton>
          {timeRange.from && timeRange.to && (
            <Box className={classes.currentRange}>
              {format(
                timeRange.from,
                isSameMonth(timeRange.from, timeRange.to)
                  ? 'd'
                  : isSameYear(timeRange.from, timeRange.to)
                  ? 'd MMMM'
                  : 'd MMMM, yyyy'
              )}
              &nbsp;&ndash;&nbsp;
              {format(timeRange.to, 'd MMMM, yyyy')}
            </Box>
          )}
          <IconButton
            onClick={nextPeriod}
            disabled={!(timeRange.from && timeRange.to)}
            className={classes.navButton}
          >
            <ChevronRightIcon />
          </IconButton>
        </Stack>
      </Grid>
    </Grid>
  );
};
