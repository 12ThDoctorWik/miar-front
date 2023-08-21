import { useLayoutEffect, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { checkDiceConUser, useDiceConToken } from '../../Store';
import { useThunk } from '../../Hooks/useThunk';
import { SLICE_STATUSES } from '../../Store/Slices/sliceStatus.const';
import { toastSlice, TOAST_LEVEL } from '../../Store/Slices/ToastSlice';
import image from '../../Assets/Images/DiceCon-register.webp';

export const DiceConForm = ({ onClose }) => {
  const [doUseToken, _, isLoading] = useThunk(useDiceConToken);
  const [doCheckUser, __, isChecking] = useThunk(checkDiceConUser);
  const { useTokenStatus, isRegistered } = useSelector(state => state.diceCon);
  const dispatch = useDispatch();

  const {
    formState: { isValid, errors },
    register,
    handleSubmit,
  } = useForm({
    mode: 'all',
  });

  const handleDiceConForm = data => {
    doUseToken(data);
  };

  useEffect(() => {
    if (useTokenStatus === SLICE_STATUSES.SUCCESS) {
      dispatch(
        toastSlice.actions.showMessage(
          'Арканні символи зчитано, вхід в підземелля відкрито!',
          TOAST_LEVEL.GREEN
        )
      );
      onClose();
    }
  }, [useTokenStatus, dispatch, onClose]);

  useLayoutEffect(() => {
    doCheckUser();
  }, [doCheckUser]);

  return (
    <Card sx={{ backgroundColor: 'rgba(30, 31, 34, 1)', position: 'relative' }}>
      {isRegistered && (
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: 1, top: 1 }}
        >
          <CloseIcon color="primary" />
        </IconButton>
      )}
      <CardMedia sx={{ height: 215 }} image={image} />
      {isChecking ? (
        <Box display="flex" justifyContent="center" p={5}>
          <CircularProgress size={36} />
        </Box>
      ) : (
        <form onSubmit={handleSubmit(handleDiceConForm)}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography
                  color="primary"
                  variant="h6"
                  textAlign="center"
                  fontStyle="italic"
                >
                  {isRegistered
                    ? 'Ви вже ввели арканні символи, підземелля чекає на Вас'
                    : 'Введіть арканні символи для доступу в підземелля'}
                </Typography>
              </Grid>
              {!isRegistered && (
                <Grid item xs={12}>
                  <TextField
                    id="token"
                    fullWidth
                    name="name"
                    variant="outlined"
                    focused
                    color="primary"
                    InputProps={{
                      sx: {
                        color: 'rgba(242, 222, 161, 1)',
                      },
                    }}
                    {...register('token', {
                      required: true,
                    })}
                    error={!!errors.name}
                  />
                </Grid>
              )}
            </Grid>
          </CardContent>
          {isRegistered || (
            <CardActions>
              <Button fullWidth type="submit" disabled={!isValid || isLoading}>
                Підтвердити
              </Button>
            </CardActions>
          )}
        </form>
      )}
    </Card>
  );
};
