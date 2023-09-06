import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import {
  Typography,
  Button,
  Box,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Grid,
  Link,
} from '@mui/material';
import { SelectField } from '@components/ui/SelectField';
import { useCharactersStore } from '@features/characters/hooks';

export const RegistrationConfirmationModal = ({
  sessionId,
  onConfirm,
  onClose,
}) => {
  const { characterOptions, isLoading } = useCharactersStore({ sessionId });

  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm({
    mode: 'all',
    shouldUnregister: true,
  });

  console.log(characterOptions);

  const handleForm = async ({ characterId }) => {
    onConfirm({ characterId });
    onClose();
  };

  return (
    <>
      <DialogTitle>Реєстрація на гру</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(handleForm)}>
          {isLoading ? (
            <Box display="flex" justifyContent="center" p={5}>
              <CircularProgress size={36} />
            </Box>
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <SelectField
                  label="Оберіть персонажа:"
                  control={control}
                  rules={{ required: true }}
                  id="characterId"
                  name="characterId"
                  options={characterOptions}
                />
              </Grid>
              {!characterOptions.length && (
                <Grid item xs={12}>
                  <Typography variant="body2">
                    Ви ще не маєте жодного створеного персонажу.
                  </Typography>
                  <Link component={NavLink} to="/account?tab=characters">
                    Створити
                  </Link>
                </Grid>
              )}
            </Grid>
          )}
        </form>
      </DialogContent>
      <DialogActions>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', lg: 'row' },
            gap: 2,
          }}
        >
          <Button
            type="button"
            variant="outlined"
            disabled={isLoading}
            onClick={onClose}
          >
            Назад
          </Button>
          <Button
            type="button"
            disabled={!isValid || isLoading}
            onClick={handleSubmit(handleForm)}
          >
            Підтвердити
          </Button>
        </Box>
      </DialogActions>
    </>
  );
};
