// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../css/style.css'

function Alumni() {
  const [alumnis, setAlumnis] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/alumni')
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
  }, []);

  return (
    <section>
      <div>
        <Navbar />
        <div className="alumni-container">
          <div className="alumni-content">
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
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default Alumni;
