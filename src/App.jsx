import './App.css';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { ThemeProvider } from '@mui/material/styles';
import setDefaultOptions from 'date-fns/setDefaultOptions';
import { uk } from 'date-fns/locale';
import { AuthenticatedRoutes } from '@features/auth/components/AuthenticatedRoutes';
import Overlay from '@components/Overlay/Overlay.js';
import MainPage from '@pages/MainPage/MainPage.js';
import GamePage from '@pages/GamePage/GamePage.js';
import Calendar from '@pages/Calendar/Calendar.js';
import Account from '@pages/Account';
import { MainWrapper } from '@components/layouts/MainWrapper';

import { Toast } from './Modules/Toast/Toast';
import { createThemeObject } from './theme';

import { GamesProvider } from './providers/GamesProvider';

const Root = () => {
  const location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.key}
        timeout={440}
        classNames="page-transition"
        unmountOnExit
      >
        <Routes location={location}>
          {/* <Route exact path="/" element={<MainPage />} /> */}
          <Route
            exact
            path="/"
            element={<Navigate to={'/calendar'} replace />}
          />
          <Route exact path="/calendar" element={<Outlet />}>
            <Route index element={<Calendar />} />
            <Route path=":id" element={<GamePage />} />
          </Route>
          <Route exact path="/account" element={<AuthenticatedRoutes />}>
            <Route index element={<Account />} />
          </Route>
          <Route path="*" element={<Navigate to={'/auth'} replace />} />
        </Routes>
      </CSSTransition>
    </SwitchTransition>
  );
};

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
          <GamesProvider>
            <Router>
              <MainWrapper>
                <Root />
                <Toast />
              </MainWrapper>
            </Router>
            <Overlay />
          </GamesProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
