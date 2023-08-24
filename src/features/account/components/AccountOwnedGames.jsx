import { useSelector } from 'react-redux';
import { Box, CircularProgress, Alert } from '@mui/material';
import { useSessionsStore } from '@features/sessions/hooks';

export const AccountOwnedGames = () => {
  const { user } = useSelector(state => state.auth);
  const { sessions, isLoading } = useSessionsStore({ masterId: user.id || 0 });

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
