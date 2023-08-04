import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./auth/Auth";

import Header from "./Modules/Header/Header.js"
import MainPage from "./Pages/MainPage/MainPage.js";

import PopupAuth from "./Modules/PopupAuth/PopupAuth.js";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route exact path="/auth" element={<MainPage/>}/>
          <Route path="*" element={<Navigate to={'/auth'} replace/>}/>
        </Routes>
      </Router>
      {/* <PopupAuth/> */}
    </div>
  );
}

export default App;
