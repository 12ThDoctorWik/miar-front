import './App.css';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { ThemeProvider } from '@mui/material/styles';
import setDefaultOptions from 'date-fns/setDefaultOptions';
import { uk } from 'date-fns/locale';
import Overlay from './Components/Overlay/Overlay.js';
import Header from './Modules/Header/Header.js';
import MainPage from './Pages/MainPage/MainPage.js';
import GamePage from './Pages/GamePage/GamePage.js';
import Calendar from './Pages/Calendar/Calendar.js';

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

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GamesProvider>
          <Router>
            <Header />
            <Root />
            <Toast />
          </Router>
          <Overlay />
        </GamesProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
