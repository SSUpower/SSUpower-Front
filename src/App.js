import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import ScheduleMain from "./components/Schedule/ScheduleMain";
import LoginPage from "./components/Login/Loginpage";
import Join from "./components/Login/Join";
import MapMain from "./components/Map/MapMain";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/schedule" element={<ScheduleMain />} />
        <Route path="/map" element={<MapMain />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
