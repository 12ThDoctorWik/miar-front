import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CharacterList } from '@features/characters/components/CaracterList';
import { useCharactersStore } from '@features/characters/hooks';
import { useDialog, bindDialogState } from '@hooks/use-dialog';
import { DialogWrapper } from '@components/DialogWrapper';
import { CaracterFormModal } from '@features/characters/components/CaracterFormModal';
import { LoadingIndicator } from '@components/ui/LoadingIndicator';

export const AccountCharacters = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const { characters, isLoading } = useCharactersStore();
  const characterFormDialogState = useDialog();

  const handleAdd = () => characterFormDialogState.open();

  return isLoading ? (
    <Box py={10} width="100%" display="flex" justifyContent="center">
      <LoadingIndicator />
    </Box>
  ) : (
    <>
      <CharacterList characters={characters} onAdd={handleAdd} />
      <DialogWrapper
        {...bindDialogState(characterFormDialogState)}
        maxWidth="sm"
        fullScreen={!isMd}
        disableEscapeKeyDown
      >
        <CaracterFormModal />
      </DialogWrapper>
    </>
  );
};
