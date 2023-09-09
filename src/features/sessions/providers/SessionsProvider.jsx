import { createContext, useContext, useMemo, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDialog, bindDialogState } from '@hooks/use-dialog';
import { DialogWrapper } from '@components/DialogWrapper';
import { SessionForm } from '@features/sessions/components/SessionForm';

export const SessionsContext = createContext({});

export const SessionsProvider = ({ children }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const [timeRange, setTimeRange] = useState({});
  const sessionFormDialogState = useDialog();

  const value = useMemo(
    () => ({
      showSessionForm: data => sessionFormDialogState.open(data),
      timeRange,
      setTimeRange,
    }),
    [sessionFormDialogState, timeRange, setTimeRange]
  );

  return (
    <SessionsContext.Provider value={value}>
      {children}
      <DialogWrapper
        {...bindDialogState(sessionFormDialogState)}
        maxWidth="md"
        fullScreen={!isMd}
        disableEscapeKeyDown
      >
        <SessionForm />
      </DialogWrapper>
    </SessionsContext.Provider>
  );
};

export const useSessionsContext = () => useContext(SessionsContext);
