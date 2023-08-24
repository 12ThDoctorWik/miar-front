import { Box, Alert } from '@mui/material';

export const AccountPlannedGames = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Alert severity="warning">
        Ця сторінка знаходиться в самому центрі дикого магічного сплеску і
        незабаром буде готова для таких авантюристів, як ви.
      </Alert>
    </Box>
  );
};
