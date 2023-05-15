import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import TimetableMain from './components/TimeTable/TimetableMain';
import LoginPage from './components/Login/Loginpage';
import Join from './components/Login/Join';



function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={ <LoginPage />}/>
                <Route path="/timetable" element={ <TimetableMain />} />
                <Route path="/join" element={ <Join />} />
            </Routes>
        </Router>
  );
}

export default App;