import {
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Link,
} from '@mui/material';
import { Avatar } from '@components/common/Avatar';

export const CharacterCard = ({ character }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        backgroundColor: '#FFFFFF17',
        borderRadius: 2,
      }}
    >
      <CardMedia>
        <Avatar
          src={character.AvatarLink}
          alt="Character avatar"
          variant="square"
          sx={{ width: 100, height: 100 }}
        />
      </CardMedia>
      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <List>
          <ListItem>
            <ListItemText primary="Імʼя:" secondary={character.CharacterName} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Передісторія:"
              secondary={character.CharacterBackstory}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Посилання на DnD Beyond:"
              secondary={
                <Link
                  color="#B1C5FF"
                  target="_blank"
                  underline="none"
                  href={character.BeyondLink}
                >
                  {character.BeyondLink}
                </Link>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Раса:" secondary={character.Race} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Підоснова:"
              secondary={character.Background}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};
