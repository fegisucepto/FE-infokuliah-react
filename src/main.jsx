import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './assets/componend/Home.jsx';
// import Course from './assets/componend/Course.jsx';
import ListKursus from './assets/componend/ListKursus.jsx'
import Alumni from './assets/componend/Alumni.jsx';
import Login from './assets/componend/Login.jsx';
import Register from './assets/componend/Register.jsx';
import MyCourse from './assets/componend/MyCourse.jsx';
import Profile from './assets/componend/Profil.jsx';
import Question from './assets/componend/Question.jsx'
import Blogs from './assets/componend/Blogs.jsx'
import Beasiswa from './assets/componend/Beasiswa.jsx'
import HomeAdmin from './assets/componend/Admin/Home.jsx'
import HomeUSer from './assets/componend/Admin/UsersAdmin.jsx'
import ListCourses from './assets/componend/Admin/ListCourses.jsx'
import AlumniAdmin from './assets/componend/Admin/AlumniAdmin.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<ListKursus />} />
        <Route path='/alumni' element={<Alumni />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/mycourses' element={<MyCourse />} />
        <Route path='/profil/${id}' element={<Profile />} />
        <Route path='/question' element={<Question />} />
        <Route path='/artikel' element={<Blogs />} />
        <Route path='/beasiswa' element={<Beasiswa />} />
        <Route path='/admin/' element={<HomeAdmin />} />
        <Route path='/admin/user' element={<HomeUSer />} />
        <Route path='/admin/projects' element={<ListCourses />} />
        <Route path='/admin/alumni' element={<AlumniAdmin />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
