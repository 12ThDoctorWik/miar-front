import { Box, CircularProgress, Typography, Grid } from '@mui/material';
import { format } from 'date-fns';
import { useUserSessionsStore } from '@features/sessions/hooks';
import { GameCard } from '@components/GameCard/GameCard';

export const AccountPlannedGames = () => {
  const { userSessions, isLoading } = useUserSessionsStore({
    from: format(new Date(), 'yyyy-MM-dd'),
  });

  return isLoading ? (
    <Box py={10} width="100%" display="flex" justifyContent="center">
      <CircularProgress size={36} />
    </Box>
  ) : (
    <>
      {userSessions?.length === 0 ? (
        <Box display="flex" justifyContent="center">
          <Typography variant="caption">
            Ви ще не зареєстровані на жодну гру.
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={2}>
          {userSessions.map(session => (
            <Grid key={session.Id} item xs={12} sm={6} md={4} lg={3} xl={2}>
              <GameCard session={session} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
