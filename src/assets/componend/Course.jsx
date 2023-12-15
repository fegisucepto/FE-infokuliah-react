// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../css/style.css';

function Courser() {
  const [programs, setPrograms] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Memeriksa apakah ada token di localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true); // Jika ada token, tandai pengguna sebagai login
      fetch('http://localhost:3002/courses', {
        headers: {
          Authorization: `Bearer ${token}`, // Menambahkan token ke header Authorization
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.statusCode === 200 && data.data) {
            setPrograms(data.data);
          } else {
            console.error('Failed to fetch programs:', data);
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    } else {
      setIsLoggedIn(false); // Jika tidak ada token, tandai pengguna sebagai tidak login
    }
  }, []);

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <>
      <Navbar className="navbar" />
      <div className='section-course'>
        <div className="row-course">
          {isLoggedIn && programs.map((program, index) => (
            <div key={index} className="col-md-6 col-lg-3 text-center team mb-5">
              <div className="card border-0 bg-light shadow-sm pb-2">
                <img className="card-img-top mb-2" src={program.imageURL} alt="" />
                <div className="card-body text-center">
                  <h4 className="card-title">{program.name}</h4>
                  <p className="card-text">
                    {showFullDescription ? program.description : `${program.description.slice(0, 100)}...`}
                    <button onClick={toggleDescription} className="read-more-button">
                      {showFullDescription ? 'Read Less' : 'Read More'}
                    </button>
                  </p>
                  <h3 className="card-title">{program.price}</h3>
                  <button className="courser-button">DAFTAR</button>
                </div>
              </div>
            </div>
          ))}
          {!isLoggedIn && <p>Silakan login untuk melihat program kursus.</p>}
        </div>
        <Footer className="footer" />
      </div>
    </>
  );
}

export default Courser;
