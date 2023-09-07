import { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Grid,
  Box,
  Stack,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Link,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Avatar } from '@components/common/Avatar';
import './GameDetails.scss';
import { player, fire, fire_active } from '../../Assets/Icons/icons.js';
import { TOAST_LEVEL, toastSlice } from '../../Store/Slices/ToastSlice';
import { useDispatch } from 'react-redux';
import { useGamesContext } from '../../providers/GamesProvider';
import { useSessionStore } from '@features/sessions/hooks';
import { DialogWrapper } from '@components/DialogWrapper';
import { useDialog, bindDialogState } from '@hooks/use-dialog';
import { RegistrationConfirmationModal } from '@features/sessions/components/RegistrationConfirmationModal';
import { LoadingIndicator } from '@components/ui/LoadingIndicator';

export const GameDetails = ({ sessionId }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const { session, register, unregister, isLoading } =
    useSessionStore(sessionId);
  const dispatch = useDispatch();
  const { showGameForm } = useGamesContext();
  const [canUnregister, setCanUnregister] = useState(false);
  const [canRegister, setCanRegister] = useState(false);
  const registerConfirmationDialogState = useDialog();

  let image = session?.ImageURL;
  if (image === '' || image === 'string') {
    image = 'https://i.redd.it/nwpa93o6r8k31.jpg';
  }

  const handleRegister = () => {
    registerConfirmationDialogState.open({
      sessionId,
      onConfirm: async ({ characterId }) => {
        await register({ sessionId, characterId });
        dispatch(
          toastSlice.actions.showMessage(
            'Ви зареєстровані на гру',
            TOAST_LEVEL.GREEN
          )
        );
      },
    });
  };

  const handleUnRegister = async () => {
    await unregister(sessionId);
    dispatch(
      toastSlice.actions.showMessage(
        'Реєстрація на гру знято',
        TOAST_LEVEL.GREEN
      )
    );
  };

  const handleEdit = () => {
    showGameForm({ session });
  };

  useEffect(() => {
    if (session) {
      if (session.IsOwnGame) {
        setCanUnregister(false);
        setCanRegister(false);
      } else {
        if (session.IsRegistered) {
          setCanUnregister(true);
          setCanRegister(false);
        } else {
          setCanUnregister(false);
          if (session.RegisterButton) {
            setCanRegister(true);
          } else {
            setCanRegister(false);
          }
        }
      }
    }
  }, [session]);

  // useEffect(() => {
  //   //todo fix double call
  //   if (
  //     registerSessionStatus === SLICE_STATUSES.SUCCESS ||
  //     registerSessionStatus === null
  //   ) {
  //     doFetchSession({ id: sessionId, tokenized: !!currentUSer });
  //   }
  //   if (registerSessionStatus === SLICE_STATUSES.ERROR) {
  //     dispatch(
  //       toastSlice.actions.showMessage(
  //         'Помилка реєстрації на гру',
  //         TOAST_LEVEL.YELLOW
  //       )
  //     );
  //   }
  // }, [registerSessionStatus, doFetchSession, sessionId, currentUSer]);

  return (
    <>
      {isLoading && (
        <Box py={10} width="100%" display="flex" justifyContent="center">
          <LoadingIndicator />
        </Box>
      )}
      {`${session?.Id}` === sessionId && (
        <Box py={2}>
          <Stack spacing={2}>
            <Card
              sx={{
                borderRadius: 4,
                position: 'relative',
              }}
            >
              {session.ShowEditButton && (
                <IconButton
                  sx={{ position: 'absolute', top: 1, right: 1 }}
                  onClick={handleEdit}
                >
                  <EditIcon sx={{ color: 'white' }} />
                </IconButton>
              )}
              <Grid container>
                <Grid item xs={12} lg={5} order={{ xs: 2, lg: 1 }}>
                  <CardMedia
                    component="img"
                    image={image}
                    alt="Game thumbnail"
                    sx={{ maxHeight: isMd ? 480 : 360 }}
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
                                <span className="gpInfo__line_data">
                                  {session.ClubName}
                                </span>
                              </div>
                              <div className="gpInfo__line">
                                Система:{' '}
                                <span className="gpInfo__line_data">
                                  {session.System}
                                </span>
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
                          columns={12}
                          spacing={0.25}
                          alignItems="stretch"
                        >
                          <Grid item xs={12} lg={6}>
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
                                {session.MaxPlayer >= session.CurrentPlayers &&
                                  [
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
                          {/* <Grid item xs={7} lg={3}>
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
                          </Grid> */}
                          <Grid
                            item
                            xs={12}
                            lg={6}
                            display="flex"
                            alignItems="stretch"
                          >
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
                          {session.Tags.map(el => (
                            <div className="gpInfo__tag" key={el}>
                              {el}
                            </div>
                          ))}
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <Stack direction="row" spacing={2}>
                          {canRegister && (
                            <>
                              <Button onClick={handleRegister}>
                                Зареєструватись
                              </Button>
                              <DialogWrapper
                                {...bindDialogState(
                                  registerConfirmationDialogState
                                )}
                                maxWidth="xs"
                                fullScreen={!isMd}
                                disableEscapeKeyDown
                              >
                                <RegistrationConfirmationModal />
                              </DialogWrapper>
                            </>
                          )}
                          {canUnregister && (
                            <Button onClick={handleUnRegister}>
                              Зняти реєстрацію
                            </Button>
                          )}
                        </Stack>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Card>
            {session.Characters.length > 0 && (
              <Card sx={{ borderRadius: 4 }}>
                <CardContent>
                  <Typography variant="h5" color="white">
                    Зареєстровані гравці
                  </Typography>
                  <Grid container spacing={2} mt={2}>
                    {session.Characters.map((user, index) => (
                      <Grid key={index} item xs={12} md={6} lg={4}>
                        <Card
                          sx={{
                            display: 'flex',
                            backgroundColor: '#FFFFFF17',
                            borderRadius: 2,
                          }}
                        >
                          <CardMedia>
                            <Avatar
                              src={user.UserAvatar}
                              alt="User thumbnail"
                              variant="square"
                              sx={{ width: 100, height: 100 }}
                            />
                          </CardMedia>
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
    </>
  );
};
