import { Box, Typography, Grid } from '@mui/material';
import { CharacterCard } from './CaracterCard';

export const CharacterList = ({ characters }) => {
  return (
    <>
      {characters?.length === 0 ? (
        <Box display="flex" justifyContent="center">
          <Typography variant="caption">
            Ви ще не створили жодного персонажа.
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={2}>
          {characters.map(character => (
            <Grid key={character.Id} item xs={12} sm={6} md={4}>
              <CharacterCard session={character} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
