import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router-dom";
import Overlay from "./Components/Overlay/Overlay.js";
import Header from "./Modules/Header/Header.js"
import MainPage from "./Pages/MainPage/MainPage.js";
import GamePage from "./Pages/GamePage/GamePage.js";
import Calendar from "./Pages/Calendar/Calendar.js";

import CreateGame from "./Pages/CreateGame/CreateGame.js";

function App() {
  document.title = "MIAR";
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<MainPage/>}/>
          <Route exact path="/calendar" element={<Calendar/>}/>
          <Route exact path="/game" element={<GamePage/>}/>
          <Route exact path="/game_creator" element={<CreateGame/>}/>
          <Route path="*" element={<Navigate to={'/auth'} replace/>}/>
        </Routes>
      </Router>
      <Overlay/>
    </div>
  );
}

export default App;
