import { useEffect, useMemo } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { Container, Stack, Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useLocalStorage } from '@hooks/use-local-storage';
import { GameDetails } from '../../Components/GameDetails/GameDetails';

export const GamePage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [savedFilters] = useLocalStorage('calendar-filters', {});

  const calendarPath = useMemo(() => {
    const { from, to } = savedFilters;
    if (from && to) {
      return `/calendar?from=${from}&to=${to}`;
    }
    return '/calendar';
  }, [savedFilters]);

  useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === 'Escape') {
        event.preventDefault();
        navigate(calendarPath);
      }
    };

    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 2 }}>
      <Stack spacing={1}>
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton component={NavLink} to={calendarPath}>
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
