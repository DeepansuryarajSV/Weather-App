import React from 'react';
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import WeatherDashboard from './components/WeatherDashboard';


export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/checkweather' element={<WeatherDashboard/>}></Route>
      </Routes>
    </Router>
  )
}
