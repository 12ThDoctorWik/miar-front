import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Grid,
  InputLabel,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Slider,
  Button,
  Box,
  Typography,
} from '@mui/material';
import { parse, parseISO } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import { useDispatch, useSelector } from 'react-redux';
import { addSession } from '../../Store';
import { SLICE_STATUSES } from '../../Store/Slices/sliceStatus.const';
import { useThunk } from '../../Hooks/useThunk';
import { toastSlice, TOAST_LEVEL } from '../../Store/Slices/ToastSlice';

export const GameForm = ({ session, onClose }) => {
  const [doAddSession] = useThunk(addSession);
  const { sessionStatus } = useSelector(state => state.sessions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStatus === SLICE_STATUSES.SUCCESS) {
      dispatch(
        toastSlice.actions.showMessage('Додано нову гру', TOAST_LEVEL.RED)
      );
      onClose();
    }
  }, [sessionStatus, dispatch, onClose]);

  const {
    control,
    formState: { isValid, errors },
    register,
    handleSubmit,
  } = useForm({
    mode: 'all',
    defaultValues: {
      difficult: 3,
      levels: [0, 5],
      visible: 1,
      locationType: 1,
    },
  });

  const handleGameForm = async ({
    date,
    time,
    levels,
    tags,
    bookedUserNames,
    ...data
  }) => {
    doAddSession({
      ...data,
      startTime: zonedTimeToUtc(
        parse(`${date} ${time}`, 'yyyy-MM-dd HH:mm', new Date())
      ),
      minLevel: levels[0],
      maxLevel: levels[1],
      tags: (tags?.split(';') || []).map(value => value.trim()),
      bookedUserNames: (bookedUserNames?.split(';') || []).map(value =>
        value.trim()
      ),
    });
  };

  const handleClose = () => {
    if (window.confirm('Ви впевнені що хочете закрити форму?')) {
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit(handleGameForm)}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <InputLabel shrink={false} htmlFor={'name'}>
            Назва пригоди
          </InputLabel>
          <TextField
            id="name"
            fullWidth
            name="name"
            {...register('name', {
              required: {
                value: true,
                message: 'Назва гри є обовʼязковим полем',
              },
            })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel shrink={false} htmlFor={'image'}>
            Фон (URL)
          </InputLabel>
          <TextField
            id="image"
            fullWidth
            name="image"
            {...register('image')}
            error={!!errors.image}
            helperText={errors.image?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <Controller
              rules={{ required: true }}
              control={control}
              name="visible"
              render={({ field }) => (
                <RadioGroup row {...field}>
                  <FormControlLabel
                    value={1}
                    control={<Radio />}
                    label="Публічна партія"
                  />
                  <FormControlLabel
                    value={0}
                    control={<Radio />}
                    label="Приватна партія"
                  />
                </RadioGroup>
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <Controller
              rules={{ required: true }}
              control={control}
              name="locationType"
              render={({ field }) => (
                <RadioGroup row {...field}>
                  <FormControlLabel
                    value={1}
                    control={<Radio />}
                    label="Офлайн"
                  />
                  <FormControlLabel
                    value={0}
                    control={<Radio />}
                    label="Онлайн"
                  />
                </RadioGroup>
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <InputLabel shrink={false} htmlFor={'clum'}>
            Клуб
          </InputLabel>
          <TextField
            id="club"
            fullWidth
            name="club"
            {...register('club')}
            error={!!errors.club}
            helperText={errors.club?.message}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <InputLabel shrink={false} htmlFor={'city'}>
            Місто
          </InputLabel>
          <TextField
            id="city"
            fullWidth
            name="city"
            {...register('city', {
              required: {
                value: true,
                message: 'Місто є обовʼязковим полем',
              },
            })}
            error={!!errors.city}
            helperText={errors.city?.message}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <InputLabel shrink={false} htmlFor={'masterName'}>
            Майстер
          </InputLabel>
          <TextField
            id="masterName"
            fullWidth
            name="masterName"
            {...register('masterName', {
              required: {
                value: true,
                message: 'Імʼя майстра є обовʼязковим полем',
              },
            })}
            error={!!errors.masterName}
            helperText={errors.masterName?.message}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <InputLabel shrink={false} htmlFor={'location'}>
            Локація
          </InputLabel>
          <TextField
            id="location"
            fullWidth
            name="location"
            {...register('location', {
              required: {
                value: true,
                message: 'Локація є обовʼязковим полем',
              },
            })}
            error={!!errors.location}
            helperText={errors.location?.message}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <InputLabel shrink={false} htmlFor={'system'}>
            Ігрова система
          </InputLabel>
          <TextField
            id="system"
            fullWidth
            name="system"
            {...register('system', {
              required: {
                value: true,
                message: 'Ігрова система є обовʼязковим полем',
              },
            })}
            error={!!errors.system}
            helperText={errors.system?.message}
          />
        </Grid>
        <Grid item xs={6} lg={3}>
          <InputLabel shrink={false} htmlFor={'date'}>
            Дата
          </InputLabel>
          <TextField
            id="date"
            fullWidth
            name="date"
            type="date"
            {...register('date', {
              required: {
                value: true,
                message: 'Дата є обовʼязковим полем',
              },
            })}
            error={!!errors.date}
            helperText={errors.date?.message}
          />
        </Grid>
        <Grid item xs={6} lg={3}>
          <InputLabel shrink={false} htmlFor={'time'}>
            Час
          </InputLabel>
          <TextField
            id="time"
            fullWidth
            name="time"
            type="time"
            {...register('time', {
              required: {
                value: true,
                message: 'Час є обовʼязковим полем',
              },
            })}
            error={!!errors.time}
            helperText={errors.time?.message}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <InputLabel shrink={false} htmlFor={'maxPlayer'}>
            Кількість гравців
          </InputLabel>
          <TextField
            id="maxPlayer"
            fullWidth
            type="number"
            name="maxPlayer"
            {...register('maxPlayer', {
              valueAsNumber: true,
              required: {
                value: true,
                message: 'Кількість гравців є обовʼязковим полем',
              },
              min: {
                value: 0,
                message: 'Кілкість гравців не може бути відʼємною',
              },
              max: {
                value: 255, // TODO: define max number of players,
                message: 'Кількість гравців не може бути вища за 255',
              },
            })}
            error={!!errors.maxPlayer}
            helperText={errors.maxPlayer?.message}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <InputLabel shrink={false} htmlFor={'pricePerPlayer'}>
            Ціна
          </InputLabel>
          <TextField
            id="pricePerPlayer"
            fullWidth
            name="pricePerPlayer"
            type="number"
            {...register('pricePerPlayer', {
              valueAsNumber: true,
              required: {
                value: true,
                message: 'Ціна є обовʼязковим полем',
              },
              min: {
                value: 0,
                message: 'Ціна не може бути відʼємною',
              },
            })}
            error={!!errors.pricePerPlayer}
            helperText={errors.pricePerPlayer?.message}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <InputLabel shrink={false} htmlFor={'difficult'}>
            Складність пригоди
          </InputLabel>
          <Box px={1}>
            <Controller
              name="difficult"
              control={control}
              render={({ field }) => (
                <Slider
                  {...field}
                  step={1}
                  marks
                  min={0}
                  max={5}
                  valueLabelDisplay="auto"
                />
              )}
            />
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <InputLabel shrink={false} htmlFor={'levels'}>
            Рівень персонажів
          </InputLabel>
          <Box px={1}>
            <Controller
              name="levels"
              control={control}
              render={({ field }) => (
                <Slider
                  {...field}
                  step={1}
                  marks
                  min={0}
                  max={20}
                  valueLabelDisplay="auto"
                />
              )}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <InputLabel shrink={false} htmlFor={'description'}>
            Опис
          </InputLabel>
          <TextField
            id="description"
            fullWidth
            multiline
            name="description"
            {...register('description')}
            error={!!errors.description}
            helperText={errors.description?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel shrink={false} htmlFor={'tags'}>
            Теги
          </InputLabel>
          <TextField
            id="tags"
            fullWidth
            name="tags"
            {...register('tags')}
            error={!!errors.tags}
            helperText={errors.tags?.message}
          />
          <Typography variant="caption">
            Для розділення тегів використовуйте символ крапки з комою ( ; )
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <InputLabel shrink={false} htmlFor={'bookedUserNames'}>
            Гравці
          </InputLabel>
          <TextField
            id="bookedUserNames"
            fullWidth
            name="bookedUserNames"
            {...register('bookedUserNames')}
            error={!!errors.bookedUserNames}
            helperText={errors.bookedUserNames?.message}
          />
          <Typography variant="caption">
            Для розділення гравців використовуйте символ крапки з комою ( ; )
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', lg: 'row' },
            }}
          >
            <Button type="button" variant="outlined" onClick={handleClose}>
              Назад
            </Button>
            <Button type="submit" disabled={!isValid}>
              Опублікувати
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};
