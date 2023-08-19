import './App.css';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
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
            <Routes>
              <Route exact path="/" element={<MainPage />} />
              <Route exact path="/calendar" element={<Calendar />} />
              <Route exact path="/game/:id" element={<GamePage />} />
              <Route path="*" element={<Navigate to={'/auth'} replace />} />
            </Routes>
            <Toast />
          </Router>
          <Overlay />
        </GamesProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
