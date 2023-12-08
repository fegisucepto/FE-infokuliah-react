import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import App from './App.jsx';
import './index.css';
import Home from './assets/componend/Home.jsx';
import Course from './assets/componend/Course.jsx';
import Alumni from './assets/componend/Alumni.jsx';
import Login from './assets/componend/Login.jsx';
import Register from './assets/componend/Register.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Courses' element={<Course />} />
        <Route path='alumni' element={<Alumni/>} />
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
      </Routes>
      {/* <App /> */}
    </Router>
  </React.StrictMode>
);