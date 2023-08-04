import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./auth/Auth";
import MainPage from "./Pages/MainPage/MainPage.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/auth" element={<MainPage/>}/>
          <Route path="*" element={<Navigate to={'/auth'} replace/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
