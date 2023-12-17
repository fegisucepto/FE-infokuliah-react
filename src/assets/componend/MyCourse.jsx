import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MyCourse() {
  const [myCourses, setMyCourses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Fungsi untuk mengambil token dari local storage
    const token = localStorage.getItem('token');
    if (token) {
      fetch('http://localhost:3002/mycourses', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.status === 404) {
            throw new Error('No courses found for this user');
          }
          if (!response.ok) {
            throw new Error('Failed to fetch courses');
          }
          return response.json();
        })
        .then((data) => {
          if (data.statusCode === 200 && data.data) {
            setMyCourses(data.data);
          } else {
            throw new Error('Failed to fetch courses');
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          if (error.message === 'No courses found for this user') {
            setErrorMessage('Anda belum membeli satu pun kursus.');
          } else {
            setErrorMessage('Terjadi kesalahan saat mengambil data.');
          }
        });
    }
  }, []);

  return (
    <>
      <Navbar className="navbar" />
      <div className="container-fluid pt-5 pb-5 bg-light">
        <div className="container pt-5 pb-5">
          <div className="row-clases">
            {errorMessage ? (
              <p>{errorMessage}</p>
            ) : (
              myCourses.map((courseData) => (
                <div key={courseData.id} className="card-container">
                  <div className="card border-0 bg-light shadow-sm pb-2">
                    <img className="card-img-top mb-2" src={courseData.Course.imageURL} alt="" />
                    <div className="card-body text-center">
                      <h4 className="card-title">{courseData.Course.name}</h4>
                      <p className="card-text">{courseData.Course.description}</p>
                      <p className="card-text">Rp.{courseData.Course.price}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
