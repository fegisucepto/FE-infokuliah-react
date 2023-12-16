import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MyCourse() {
  const [myCourses, setMyCourses] = useState([]);
//   const [token, setToken] = useState('');

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
              if (!response.ok) {
                throw new Error('Failed to fetch courses');
              }
              return response.json();
            })
            .then((data) => {
              if (data.statusCode === 200 && data.data) {
                setMyCourses(data.data);
              } else {
                console.error('Failed to fetch courses:', data);
              }
            })
            .catch((error) => {
              console.error('Error fetching data:', error);
            });
        }
    }, []);

  return (
    <>
      <Navbar className="navbar" />
      <div className="container-fluid pt-5 pb-5 bg-light">
        <div className="container pt-5 pb-5">
          <div className="row-clases">
            {myCourses.map((courseData) => (
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
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
