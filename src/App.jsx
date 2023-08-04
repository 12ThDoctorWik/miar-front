import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./auth/Auth";
import Overlay from "./Components/Overlay/Overlay.js";
import Header from "./Modules/Header/Header.js"
import MainPage from "./Pages/MainPage/MainPage.js";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route exact path="/auth" element={<Auth/>}/>
          <Route exact path="/" element={<MainPage/>}/>
          <Route path="*" element={<Navigate to={'/auth'} replace/>}/>
        </Routes>
      </Router>
      <Overlay/>
    </div>
  );
}

export default App;
