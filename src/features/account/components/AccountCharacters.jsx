import { Box, CircularProgress, Grid, Button } from '@mui/material';
import { CharacterList } from '@features/characters/components/CaracterList';
import { useCharactersStore } from '@features/characters/hooks';

export const AccountCharacters = () => {
  const { characters, isLoading } = useCharactersStore();

  const handleAdd = () => {};

  return isLoading ? (
    <Box py={10} width="100%" display="flex" justifyContent="center">
      <CircularProgress size={36} />
    </Box>
  ) : (
    <Grid container spacing={2}>
      <Grid item xs={12} display="flex" justifyContent="flex-end">
        <Button onClick={handleAdd}>Додати</Button>
      </Grid>
      <Grid item xs={12}>
        <CharacterList characters={characters} />
      </Grid>
    </Grid>
  );
};
