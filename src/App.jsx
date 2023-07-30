import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./auth/Auth";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/auth" element={<Auth/>}/>
          <Route path="*" element={<Navigate to={'/auth'} replace/>}/>
        </Routes>
      </Router>
  );
}

export default App;
