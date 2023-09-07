import { Box, Typography, Grid } from '@mui/material';
import { format } from 'date-fns';
import { useSessionsStore } from '@features/sessions/hooks';
import { useAuthStore } from '@features/auth/hooks';
import { GameCard } from '@components/GameCard/GameCard';
import { LoadingIndicator } from '@components/ui/LoadingIndicator';

export const AccountPlannedGames = () => {
  const { currentUser } = useAuthStore();
  const { sessions, isLoading } = useSessionsStore({
    fromDate: format(new Date(), 'yyyy-MM-dd'),
    playerId: currentUser.PlayerId,
  });

  return isLoading ? (
    <Box py={10} width="100%" display="flex" justifyContent="center">
      <LoadingIndicator />
    </Box>
  ) : (
    <>
      {sessions?.length === 0 ? (
        <Box display="flex" justifyContent="center">
          <Typography variant="caption">
            Ви ще не зареєстровані на жодну гру.
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={2}>
          {sessions.map(session => (
            <Grid key={session.Id} item xs={12} sm={6} md={4} lg={3}>
              <GameCard session={session} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
