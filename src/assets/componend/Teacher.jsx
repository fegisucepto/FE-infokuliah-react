// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../css/style.css'

export default function Teacher() {
  const teacherData = [
    {
      id: 1,
      name: 'John Doe',
      batch: 'Desember 2023',
      occupation: 'Software Engineer',
      kontak: 'email@infokuliah.id',
      image: 'https://thumbs.dreamstime.com/b/smiling-arabic-girl-hijab-using-digital-tablet-relaxing-couch-home-surfing-internet-reading-e-book-muslim-woman-169076069.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      batch: 'Desember 2023',
      occupation: 'Data Analyst',
      kontak: 'email@infokuliah.id',
      image: 'https://thumbs.dreamstime.com/b/confident-asia-muslim-islam-businesswomen-executive-dressed-religious-veil-working-modern-office-looking-198428448.jpg',
    },
    {
      id: 3,
      name: 'John Doe',
      batch: 'Desember 2023',
      occupation: 'Software Engineer',
      kontak: 'email@infokuliah.id',
      image: 'https://thumbs.dreamstime.com/b/smiling-arabic-girl-hijab-using-digital-tablet-relaxing-couch-home-surfing-internet-reading-e-book-muslim-woman-169076069.jpg',
    },
    {
      id: 4,
      name: 'John Doe',
      batch: 'Desember 2023',
      occupation: 'Software Engineer',
      kontak: 'email@infokuliah.id',
      image: 'https://thumbs.dreamstime.com/b/smiling-arabic-girl-hijab-using-digital-tablet-relaxing-couch-home-surfing-internet-reading-e-book-muslim-woman-169076069.jpg',
    },
    {
      id: 5,
      name: 'Jane Smith',
      batch: 'Desember 2023',
      occupation: 'Data Analyst',
      kontak: 'email@infokuliah.id',
      image: 'https://thumbs.dreamstime.com/b/confident-asia-muslim-islam-businesswomen-executive-dressed-religious-veil-working-modern-office-looking-198428448.jpg',
    },
    {
      id: 6,
      name: 'John Doe',
      batch: 'Desember 2023',
      occupation: 'Software Engineer',
      kontak: 'email@infokuliah.id',
      image: 'https://thumbs.dreamstime.com/b/smiling-arabic-girl-hijab-using-digital-tablet-relaxing-couch-home-surfing-internet-reading-e-book-muslim-woman-169076069.jpg',
    },
  ];

  return (
    <section>
      <div>
        <div className="teacher-container">
          <div className="teacher-content">
            <div className="text-center pb-2">
              <p className="section-title px-5">
                <span className="px-2">TEACHER TERBAIK</span>
              </p>
              <h2 className="text-dark font-weight-bold mb-4">GURU TERBAIK INFOKULIAH.ID</h2>
            </div>
            <div className="teacher-list">
              {teacherData.map((teacher) => (
                <div className="teacher-item" key={teacher.id}>
                  {' '}
                  {/* Tambahkan kelas "teacher-item" di sini */}
                  <img className="teacher-image" src={teacher.image} alt="" />
                  <h3>{teacher.name}</h3>
                  <p>Batch: {teacher.batch}</p>
                  <p>Program: {teacher.occupation}</p>
                  <p>Kontak: {teacher.kontak}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
