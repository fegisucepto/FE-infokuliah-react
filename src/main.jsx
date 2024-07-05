import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './assets/componend/Home.jsx';
// import Course from './assets/componend/Course.jsx';
import ListKursus from './assets/componend/ListKursus.jsx';
import Alumni from './assets/componend/Alumni.jsx';
import Login from './assets/componend/Login.jsx';
import Register from './assets/componend/Register.jsx';
import MyCourse from './assets/componend/MyCourse.jsx';
import Profile from './assets/componend/Profil.jsx';
import Question from './assets/componend/Question.jsx';
import Blogs from './assets/componend/Blogs.jsx';
import Beasiswa from './assets/componend/Beasiswa.jsx';
import HomeAdmin from './assets/componend/Admin/Home.jsx';
// import HomeAdminNew from './assets/componend/Admin/HomeNewDesain.jsx';
import HomeUSer from './assets/componend/Admin/UsersAdmin.jsx';
import ListCourses from './assets/componend/Admin/ListCourses.jsx';
import AlumniAdmin from './assets/componend/Admin/AlumniAdmin.jsx';
import EditCourses from './assets/componend/Admin/EditCourses.jsx';
import Kursus from './assets/componend/Admin/Kursus/Home.jsx';
// import ArticleHome from './assets/componend/Admin/Kursus/Home.jsx';
import DetailSoal from './assets/componend/Admin/Detail.jsx';
import CreateKursus from './assets/componend/Admin/Kursus/addCourses.jsx';
import CreateAlumni from './assets/componend/Admin/Alumni/addAlumni.jsx';
import CreateUsers from './assets/componend/Admin/Users/createUsers.jsx';
import CreateSoal from './assets/componend/Admin/Soal/addSoal.jsx';
import ProfilAdmin from './assets/componend/Admin/Profile/Home.jsx';
import HomeTeacher from './assets/componend/Admin/Teachers/homeTeachers.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<ListKursus />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mycourses" element={<MyCourse />} />
        <Route path="/profil/${id}" element={<Profile />} />
        <Route path="/question" element={<Question />} />
        <Route path="/artikel" element={<Blogs />} />
        <Route path="/beasiswa" element={<Beasiswa />} />
        <Route path="/admin/" element={<HomeAdmin />} />
        {/* <Route path="/admin/" element={<HomeAdminNew />} /> */}
        <Route path="/admin/user" element={<HomeUSer />} />
        <Route path="/admin/projects" element={<ListCourses />} />
        <Route path="/admin/alumni" element={<AlumniAdmin />} />
        <Route path="/admin/projects/edit" element={<EditCourses />} />
        <Route path="/admin/kursus" element={<Kursus />} />
        <Route path="/admin/projects/detail" element={<DetailSoal />} />
        <Route path="/admin/admin/create-courses" element={<CreateKursus />} />
        <Route path="/admin/admin/create-alumni" element={<CreateAlumni />} />
        <Route path="/admin/admin/create-users" element={<CreateUsers />} />
        <Route path="/admin/admin/create-soal" element={<CreateSoal />} />
        <Route path="/admin/profil/${id}" element={<ProfilAdmin />} />
        <Route path="/admin/trainer" element={<HomeTeacher />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
