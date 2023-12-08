// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../css/Asset.css';
import mahasiswa1Image from '../images/mahasiswa1.png'
import pelajarImage from '../images/pelajar.jpg'
import mahasiswaImage from '../images/mahasiswa.jpg'

export default function Course() {
  const courseAll = [
    {
      id: 1,
      imageSrc: mahasiswa1Image,
      title: 'Tryout online UTBK-SNBT 2024 dengan Tes Skolastik terbaru',
      instructor: 'Wade Warren',
      category: 'PTN/PTS',
      lessons: 25,
    },
    {
      id: 2,
      imageSrc: pelajarImage,
      title: 'Tryout online SBMPTN/SNBT 2024',
      instructor: 'Wade Warren',
      category: 'PTN/PTS',
      lessons: 25,
    },
    {
      id: 3,
      imageSrc: mahasiswaImage,
      title: 'Les Privat untuk SBMPTN Siap menghadapi tes UTBK',
      instructor: 'Wade Warren',
      category: 'PTN/PTS',
      lessons: 25,
    },
  ];

  return (
    <div>
        <div className="asset-container">
          <div className="asset-content">
        <div className="text-center pb-2">
          <p className="section-title px-5">
            <span className="px-2">PROGRAM TERLARIS</span>
          </p>
          <h2 className="text-dark font-weight-bold mb-4">KURSUS TERBAIK INFOKULIAH.ID</h2>
        </div>
        <div className="course">
          {courseAll.map((course) => (
            <div className="course-item" key={course.id}>
              <img src={course.imageSrc} alt="Course" className="course-image" />
              <div className="course-details">
                <div className="course-title">{course.title}</div>
                <div className="course-instructor">{course.instructor}</div>
                <div className="course-category">{course.category}</div>
                <div className="course-lessons">{course.lessons} Lessons</div>
                <button className="course-button">DAFTAR NOW</button>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
