import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
} from '@mui/material';
import { Avatar } from '@components/common/Avatar';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => {
  return {
    name: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: '21px',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: theme.spacing(2),
      '&:last-child': {
        paddingBottom: theme.spacing(2),
      },
    },
    chip: {
      backgroundColor: '#FFFFFF24',
      borderRadius: '4px',
    },
    chipLabel: {
      padding: theme.spacing(0.5, 1.5),
    },
  };
});

export const CharacterCard = ({ character }) => {
  const classes = useStyles();
  return (
    <Card
      sx={{
        display: 'flex',
        backgroundColor: '#FFFFFF17',
        borderRadius: 1,
      }}
    >
      <CardMedia>
        <Avatar
          src={character.AvatarLink}
          alt="Character avatar"
          variant="square"
          sx={{ width: 140, height: 140 }}
        />
      </CardMedia>
      <CardContent classes={{ root: classes.content }}>
        <Typography variant="h6" className={classes.name}>
          {character.Name}
        </Typography>
        <Box>
          {character.ClassDataModels.map(({ Level, className }, index) => (
            <Chip
              key={index}
              label={`${className} ${Level}`}
              classes={{ root: classes.chip, label: classes.chipLabel }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
