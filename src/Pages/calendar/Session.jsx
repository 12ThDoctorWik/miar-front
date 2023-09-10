import { useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Stack, Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { GameDetails } from '../../Components/GameDetails/GameDetails';

export const Session = () => {
  const params = useParams();
  const navigate = useNavigate();

  const goBack = useCallback(() => {
    navigate(-1) || navigate('/calendar');
  }, [navigate]);

  useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === 'Escape') {
        event.preventDefault();
        goBack();
      }
    };

    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [goBack]);

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 2 }}>
      <Stack spacing={1}>
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton onClick={goBack}>
            <ArrowBackIosIcon sx={{ color: '#fff' }} />
          </IconButton>
          <Typography color="white">Вибрана ігрова партія</Typography>
        </Box>
        <GameDetails sessionId={params.id} />
      </Stack>
    </Container>
  );
};

export default Session;
