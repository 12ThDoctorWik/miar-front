import { Box, CircularProgress, Alert } from '@mui/material';
import { useSessionsStore } from '@features/sessions/hooks';
import { useAuthContext } from '@providers/AuthProvider';

export const AccountOwnedGames = () => {
  const { currentUser } = useAuthContext();
  const { sessions, isLoading } = useSessionsStore({
    masterId: currentUser.Id || 0,
  });

  return isLoading ? (
    <Box py={10} width="100%" display="flex" justifyContent="center">
      <CircularProgress size={36} />
    </Box>
  ) : (
    <>
      {sessions?.length === 0 ? (
        <Box display="flex" justifyContent="center">
          <Alert severity="warning">
            Ця сторінка знаходиться в самому центрі дикого магічного сплеску і
            незабаром буде готова для таких авантюристів, як ви.
          </Alert>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};
