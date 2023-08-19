import { useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import {
  Grid,
  Box,
  CircularProgress,
  Stack,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Link,
  Container,
  DialogTitle,
  IconButton,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './GameDetails.scss';
import { player, fire, fire_active } from '../../Assets/Icons/icons.js';
import { TOAST_LEVEL, toastSlice } from '../../Store/Slices/ToastSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useThunk } from '../../Hooks/useThunk';
import { fetchSession } from '../../Store';

export const GameDetails = ({ sessionId, onClose }) => {
  const { session } = useSelector(state => state.session);
  const [doFetchSession, _, isLoading] = useThunk(fetchSession);
  const dispatch = useDispatch();

  let image = session?.ImageURL;
  if (image === '' || image === 'string') {
    image = 'https://i.redd.it/nwpa93o6r8k31.jpg';
  }

  const handleClick = () => {
    dispatch(
      toastSlice.actions.showMessage(
        'Реєстрація на ігри тимчасово недоступна',
        TOAST_LEVEL.YELLOW
      )
    );
  };

  useEffect(() => {
    doFetchSession(sessionId);
  }, [doFetchSession, sessionId]);

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 9 }}>
      <DialogTitle
        sx={{ display: 'flex', alignItems: 'center', gap: 1, padding: 0 }}
      >
        <IconButton onClick={onClose}>
          <ArrowBackIosIcon sx={{ color: '#fff' }} />
        </IconButton>
        <Typography color="white">Вибрана ігрова партія</Typography>
      </DialogTitle>
      {isLoading && (
        <Box py={10} width="100%" display="flex" justifyContent="center">
          <CircularProgress size={36} />
        </Box>
      )}
      {session && (
        <Box py={2}>
          <Stack spacing={2}>
            <Card sx={{ borderRadius: 4, backgroundColor: '#1e1f22' }}>
              <Grid container>
                <Grid item xs={12} lg={5} order={{ xs: 2, lg: 1 }}>
                  <CardMedia
                    component="img"
                    image={session.ImageURL}
                    alt="Game thumbnail"
                  />
                </Grid>
                <Grid item xs={12} lg={7} order={{ xs: 1, lg: 2 }}>
                  <Box p={4}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography variant="h4" color="white">
                          {session.Name}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} container spacing={0.25}>
                        <Grid item xs={12} container spacing={0.25}>
                          <Grid item xs={12} lg={6}>
                            <div className="gpInfo__data_who gpInfo__data_block">
                              <div className="gpInfo__line">
                                Майстер:{' '}
                                <span className="gpInfo__line_data">
                                  {session.MasterName}
                                </span>
                              </div>
                              <div className="gpInfo__line">
                                Клуб:{' '}
                                <span className="gpInfo__line_data">Club</span>
                              </div>
                              <div className="gpInfo__line">
                                Система:{' '}
                                <span className="gpInfo__line_data">DND</span>
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={12} lg={6}>
                            <div className="gpInfo__data_where gpInfo__data_block">
                              <div className="gpInfo__line">
                                Де:{' '}
                                <span className="gpInfo__line_data">
                                  {session.Location}
                                </span>
                              </div>
                              <div className="gpInfo__line">
                                Коли:{' '}
                                <span className="gpInfo__line_data">
                                  {format(
                                    parseISO(session.StartTime),
                                    'd MMMM HH:mm'
                                  )}
                                </span>
                              </div>
                              <div className="gpInfo__line">
                                Ціна:{' '}
                                <span className="gpInfo__line_data">
                                  {session.PricePerPlayer} грн
                                </span>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          container
                          columns={7}
                          spacing={0.25}
                          alignItems="stretch"
                        >
                          <Grid item xs={7} lg={2}>
                            <div className="gpInfo__data_places gpInfo__data_block">
                              <div className="gpInfo__line">
                                Доступні місця:{' '}
                                <span className="gpInfo__line_data">
                                  {session.MaxPlayer - session.CurrentPlayers}
                                </span>
                              </div>

                              <div className="gpInfo__iconGroup">
                                {/* {session.players.map((e, index) => {
                  return (
                    <img
                      src={player_active}
                      alt="active"
                      className="gpInfo__icon"
                    />
                  );
                })} */}
                                {[
                                  ...Array(
                                    session.MaxPlayer - session.CurrentPlayers
                                  ),
                                ].map((e, index) => (
                                  <img
                                    key={index}
                                    src={player}
                                    alt="active"
                                    className="gpInfo__icon"
                                  />
                                ))}
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={7} lg={3}>
                            <div className="gpInfo__data_difficulty gpInfo__data_block">
                              <div className="gpInfo__line">
                                Складність пригоди:{' '}
                                <span className="gpInfo__line_data">
                                  {session.Difficult}
                                </span>
                              </div>

                              <div className="gpInfo__iconGroup">
                                {[...Array(session.Difficult)].map(
                                  (e, index) => (
                                    <img
                                      key={index}
                                      src={fire_active}
                                      alt="active"
                                      className="gpInfo__icon"
                                    />
                                  )
                                )}
                                {[...Array(5 - session.Difficult)].map(
                                  (e, index) => (
                                    <img
                                      key={index}
                                      src={fire}
                                      alt="active"
                                      className="gpInfo__icon"
                                    />
                                  )
                                )}
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={7} lg={2}>
                            <div className="gpInfo__data_level gpInfo__data_block">
                              <div className="gpInfo__line">
                                Рівні персонажів:{' '}
                              </div>
                              <div
                                className="gpInfo__line_data"
                                style={{ margin: '0' }}
                              >
                                {session.MinLevel + ' - ' + session.MaxLevel}{' '}
                                рівні
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <div className="gpInfo__text">
                          {session.Description}
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className="gpInfo__tags">
                          {session.Tags.map(el => {
                            return (
                              <div className="gpInfo__tag" key={el}>
                                {el}
                              </div>
                            );
                          })}
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <Button onClick={handleClick}>Зареєструватись</Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Card>
            {session.Characters.length > 0 && (
              <Card sx={{ borderRadius: 4, backgroundColor: '#1e1f22' }}>
                <CardContent>
                  <Typography variant="h5" color="white">
                    Зареєстровані гравці
                  </Typography>
                  <Grid container spacing={2} mt={2}>
                    {session.Characters.map(user => (
                      <Grid key={user.UserId} item xs={12} md={6} lg={4}>
                        <Card
                          sx={{
                            display: 'flex',
                            backgroundColor: '#FFFFFF17',
                            borderRadius: 2,
                          }}
                        >
                          <CardMedia
                            component="img"
                            image={user.UserAvatar}
                            alt="User thumbnail"
                            sx={{ width: 100, height: 100 }}
                          ></CardMedia>
                          <CardContent
                            sx={{ display: 'flex', alignItems: 'center' }}
                          >
                            <Link
                              color="#B1C5FF"
                              target="_blank"
                              underline="none"
                              href={`https://t.me/${user.PlayerName}`}
                            >
                              @{user.PlayerName}
                            </Link>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            )}
          </Stack>
        </Box>
      )}
    </Container>
  );
};