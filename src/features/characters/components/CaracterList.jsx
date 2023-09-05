import { Button, Grid } from '@mui/material';
import { CharacterCard } from './CaracterCard';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => {
  return {
    addButton: {
      height: 140,
      width: '100%',
      border: '1px dashed #B1C5FFDE',
      backgroundColor: '#B1C5FF1F',
      color: '#B1C5FFDE',
      '&:hover': {
        backgroundColor: '#B1C5FF3D',
      },
    },
  };
});

export const CharacterList = ({ characters, onAdd }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {!!onAdd && (
        <Grid item xs={12} md={6}>
          <Button classes={{ root: classes.addButton }} onClick={onAdd}>
            Створити нового персонажа
          </Button>
        </Grid>
      )}
      {characters.map(character => (
        <Grid key={character.Id} item xs={12} md={6}>
          <CharacterCard character={character} />
        </Grid>
      ))}
    </Grid>
  );
};
