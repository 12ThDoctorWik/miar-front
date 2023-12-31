import { createContext, useContext, useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDialog, bindDialogState } from '../Hooks/use-dialog';
import { DialogWrapper } from '../Components/DialogWrapper';
import { GameForm } from '../Components/GameForm/GameForm';

export const GamesContext = createContext({});

export const GamesProvider = ({ children }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const gameFormDialogState = useDialog();

  const value = useMemo(
    () => ({
      showGameForm: data => gameFormDialogState.open(data),
    }),
    [gameFormDialogState]
  );

  return (
    <GamesContext.Provider value={value}>
      {children}
      <DialogWrapper
        {...bindDialogState(gameFormDialogState)}
        maxWidth="md"
        fullScreen={!isMd}
        disableEscapeKeyDown
      >
        <GameForm />
      </DialogWrapper>
    </GamesContext.Provider>
  );
};

export const useGamesContext = () => useContext(GamesContext);
