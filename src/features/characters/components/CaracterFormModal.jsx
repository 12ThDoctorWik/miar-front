import { useForm, Controller } from 'react-hook-form';
import {
  Grid,
  InputLabel,
  TextField,
  Button,
  Box,
  DialogTitle,
  DialogContent,
  Slider,
} from '@mui/material';
import { SelectField } from '@components/ui/SelectField';
import { URL_PATTERN } from '@constants/validation-helpers';
import { useCharacterStore, useClassesStore } from '@features/characters/hooks';

export const CaracterFormModal = ({ onClose }) => {
  const { create, isCreating } = useCharacterStore();
  const { classOptions, isLoading: loadingClassOptions } = useClassesStore();

  const {
    control,
    formState: { isValid, errors },
    register,
    handleSubmit,
  } = useForm({
    mode: 'all',
    defaultValues: {
      level: 0,
    },
    shouldUnregister: true,
  });

  const handleCharacterForm = async ({
    name,
    classType,
    level,
    avatar,
    backstory,
    beyondLink,
    race,
    background,
  }) => {
    const payload = {
      characterName: name,
      characterBackstory: backstory,
      avatarLink: avatar,
      beyondLink,
      race,
      classDatas: [
        {
          level,
          classType,
        },
      ],
      background,
    };
    await create(payload);
    onClose();
  };

  const handleClose = () => {
    if (isCreating) return;

    if (window.confirm('Ви впевнені що хочете закрити форму?')) {
      onClose();
    }
  };

  return (
    <>
      <DialogTitle>Створення персонажа</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(handleCharacterForm)}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <InputLabel shrink={false} htmlFor={'name'}>
                Імʼя:
              </InputLabel>
              <TextField
                id="name"
                fullWidth
                name="name"
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Імʼя персонажа є обовʼязковим полем',
                  },
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <SelectField
                label="Клас:"
                control={control}
                rules={{ required: true }}
                id="classType"
                name="classType"
                options={classOptions}
                isLoading={loadingClassOptions}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel shrink={false} htmlFor={'level'}>
                Рівень:
              </InputLabel>
              <Box px={1}>
                <Controller
                  name="level"
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
              <InputLabel shrink={false} htmlFor={'avatar'}>
                Посилання на аватарку:
              </InputLabel>
              <TextField
                id="avatar"
                fullWidth
                name="avatar"
                {...register('avatar', {
                  required: {
                    value: true,
                    message: 'Аватарка є обовʼязковим полем',
                  },
                })}
                error={!!errors.avatar}
                helperText={errors.avatar?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel shrink={false} htmlFor={'backstory'}>
                Backstory:
              </InputLabel>
              <TextField
                id="backstory"
                fullWidth
                name="backstory"
                {...register('backstory')}
                error={!!errors.backstory}
                helperText={errors.backstory?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel shrink={false} htmlFor={'beyondLink'}>
                DnD Beyond Link:
              </InputLabel>
              <TextField
                id="beyondLink"
                fullWidth
                name="beyondLink"
                {...register('beyondLink', {
                  pattern: {
                    value: URL_PATTERN,
                    message: 'Має бути дійсною URL-адресою',
                  },
                })}
                error={!!errors.beyondLink}
                helperText={errors.beyondLink?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel shrink={false} htmlFor={'race'}>
                Раса:
              </InputLabel>
              <TextField
                id="race"
                fullWidth
                name="race"
                {...register('race', {
                  required: {
                    value: true,
                    message: 'Раса є обовʼязковим полем',
                  },
                })}
                error={!!errors.race}
                helperText={errors.race?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel shrink={false} htmlFor={'background'}>
                Background:
              </InputLabel>
              <TextField
                id="background"
                fullWidth
                name="background"
                {...register('background', {
                  required: {
                    value: true,
                    message: 'Background є обовʼязковим полем',
                  },
                })}
                error={!!errors.background}
                helperText={errors.background?.message}
              />
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
                <Button
                  type="button"
                  variant="outlined"
                  disabled={isCreating}
                  onClick={handleClose}
                >
                  Назад
                </Button>
                <Button type="submit" disabled={!isValid || isCreating}>
                  Додати
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </>
  );
};
