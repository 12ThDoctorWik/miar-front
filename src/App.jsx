import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import setDefaultOptions from 'date-fns/setDefaultOptions';
import { uk } from 'date-fns/locale';
import Overlay from '@components/Overlay/Overlay.js';

import { Toast } from './Modules/Toast/Toast';
import { createThemeObject } from './theme';

import { GamesProvider } from '@providers/GamesProvider';
import { AuthProvider } from '@providers/AuthProvider';
import { routes } from '@/routes';

const router = createBrowserRouter(routes);

function App() {
  document.title = 'MIAR';
  const theme = createThemeObject();
  setDefaultOptions({ locale: uk });

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <StyledEngineProvider injectFirst>
            <AuthProvider>
              <GamesProvider>
                <RouterProvider
                  router={router}
                  fallbackElement={<p>Loading...</p>}
                />
                <Toast />
                <Overlay />
              </GamesProvider>
            </AuthProvider>
          </StyledEngineProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
