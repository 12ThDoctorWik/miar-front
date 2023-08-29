import {
  Grid,
  Card,
  CardMedia,
  FormGroup,
  FormControlLabel,
  Checkbox,
  CardActions,
  Stack,
  Button,
  Typography,
  Link,
  Box,
} from '@mui/material';
import { Avatar } from '@components/common/Avatar';
import { makeStyles } from '@mui/styles';
import { useAuthStore } from '@features/auth/hooks';
import { useAuthContext } from '@providers/AuthProvider';

const useStyles = makeStyles(theme => {
  return {
    card: {
      backgroundColor: '#FFFFFF05',
      borderRadius: 8,
    },
    cardHeader: {
      backgroundColor: '#FFFFFF05',
    },
  };
});

export const AccountDetails = () => {
  const classes = useStyles();
  const { currentUser } = useAuthContext();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={7}>
        <Card classes={{ root: classes.card }}>
          <Box display="flex" className={classes.cardHeader}>
            <CardMedia>
              <Avatar
                alt={currentUser.Name}
                src={currentUser.Avatar}
                variant="square"
                sx={{ width: 200, height: 200 }}
              />
            </CardMedia>
            <Box p={5} display="flex" alignItems="center">
              <Stack>
                <Typography>
                  <b>Telegram:</b>
                  &nbsp;
                  <Link target="_blank" underline="none" href="#">
                    N/A
                  </Link>
                </Typography>
                <Typography>
                  <b>Імʼя:</b>
                  &nbsp;
                  {currentUser.Name}
                </Typography>{' '}
                <Typography>
                  <b>Роль:</b>
                  &nbsp;
                  {currentUser.Role}
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Box p={5}>
            <Stack>
              <Typography>
                <b>Про гравця:</b>
              </Typography>
              <Typography variant="body2">N/A</Typography>
              <br />
              <Typography>
                <b>На МІАРі з:</b>
              </Typography>
              <Typography variant="body2">N/A</Typography>
            </Stack>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} lg={5}>
        <Card classes={{ root: classes.card }}>
          <CardActions>
            <Stack spacing={2} p={2}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={currentUser.IsPrivate} disabled />
                  }
                  label="Відображати Telegram лише для Майстрів"
                />
              </FormGroup>
              <Button
                type="button"
                variant="outlined"
                color="error"
                onClick={handleLogout}
              >
                Вийти з аккаунта
              </Button>
            </Stack>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};
