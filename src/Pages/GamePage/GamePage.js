import { useEffect } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { Container, Stack, Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { GameDetails } from '../../Components/GameDetails/GameDetails';

export const GamePage = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === 'Escape') {
        event.preventDefault();
        navigate('/calendar');
      }
    };

    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

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
