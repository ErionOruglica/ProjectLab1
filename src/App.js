import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register  from './pages/Register';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
