import { Box, Typography, Grid } from '@mui/material';
import { LoadingIndicator } from '@components/ui/LoadingIndicator';
import { useSessionsStore } from '@features/sessions/hooks';
import { useAuthStore } from '@features/auth/hooks';
import { GameCard } from '@components/GameCard/GameCard';

export const AccountOwnedGames = () => {
  const { currentUser } = useAuthStore();
  const { sessions, isLoading } = useSessionsStore({
    masterId: currentUser.PlayerId,
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
            Ви ще не створили жодної гри.
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
