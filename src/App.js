import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login/Loginpage';
import Main from './components/Main';

function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route exact path="/login" component={LoginPage} />
        
            </Routes>
        </Router>
  );
}

export default App;