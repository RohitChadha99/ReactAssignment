import logo from './logo.svg';
import './App.css';
import Table from './Table';
import { StopWatch } from './StopWatch';
import { MyForm } from './myForm';
import Dashboard from './Dashboard';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import Employees from './Employees';


function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Home/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/employees" element={<Employees/>}/>
      </Routes>
    </Router>
  );
}

export default App;
