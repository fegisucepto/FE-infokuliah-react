// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../css/style.css';

function Alumni() {
  const [alumnis, setAlumnis] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk menyimpan status login

  useEffect(() => {
    // Memeriksa apakah ada token di localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true); // Jika ada token, tandai pengguna sebagai login
      fetch('http://localhost:3002/alumni', {
        headers: {
          Authorization: `Bearer ${token}`, // Menambahkan token ke header Authorization
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.statusCode === 200 && data.data) {
            setAlumnis(data.data);
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

  return (
    <section>
      <div>
        <Navbar />
        <div className="alumni-container">
          <div className="alumni-content">
            {isLoggedIn ? (
              <>
                <h1>Alumni Terbaik Infokuliah.ID</h1>
                <div className="alumni-list">
                  {alumnis.map((alumni) => (
                    <div className="alumni-item" key={alumni.id}>
                      <img className="alumni-image" src={alumni.imageURL} alt="" />
                      <h3>{alumni.name}</h3>
                      <p>{alumni.jurusan}</p>
                      <p>{alumni.universitas}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p>Silakan login untuk melihat data alumni.</p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default Alumni;
