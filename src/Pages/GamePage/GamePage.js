import { useParams, NavLink } from 'react-router-dom';
import { Container, Stack, Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { GameDetails } from '../../Components/GameDetails/GameDetails';

export const GamePage = () => {
  const params = useParams();

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 9 }}>
      <Stack spacing={1}>
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton component={NavLink} to="/calendar">
            <ArrowBackIosIcon sx={{ color: '#fff' }} />
          </IconButton>
          <Typography color="white">Вибрана ігрова партія</Typography>
        </Box>
        <GameDetails sessionId={params.id} />
      </Stack>
    </Container>
  );
};

export default GamePage;
