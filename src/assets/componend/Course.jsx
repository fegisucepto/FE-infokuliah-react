import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../css/style.css';

const Courser = () => {
  const [programs, setPrograms] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userCourses, setUserCourses] = useState([]);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      fetch('http://localhost:3008/courses', {
        headers: {
          Authorization: `Bearer ${token}`,
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

      fetch('http://localhost:3002/mycourses', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.statusCode === 200 && data.data) {
            setUserCourses(data.data);
          } else {
            console.error('Failed to fetch user courses:', data);
          }
        })
        .catch((error) => {
          console.error('Error fetching user courses:', error);
        });
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const isEnrolled = (courseId) => {
    return userCourses.some((course) => course.CourseId === courseId);
  };

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const showSuccessMessage = () => {
    setShowSuccessPopup(true);
    setTimeout(() => {
      setShowSuccessPopup(false);
    }, 3000);
  };

  const handleRegister = (id) => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch(`http://localhost:3002/courses/buy/${id}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to register for the course');
          }
          showSuccessMessage();
        })
        .catch((error) => {
          console.error('Error registering for the course:', error);
          // Handle error if needed
        });
    }
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
                  <button
                    onClick={() => handleRegister(program.id)}
                    className={`courser-button ${isEnrolled(program.id) ? 'disabled' : ''}`}
                    disabled={isEnrolled(program.id)}
                  >
                    {isEnrolled(program.id) ? 'Sudah Terdaftar' : 'DAFTAR'}
                  </button>
                </div>
              </div>
            </div>
          ))}
          {!isLoggedIn && <p>Silakan login untuk melihat program kursus.</p>}
        </div>
        {showSuccessPopup && (
          <div className="success-popup">
            <p>Anda berhasil mendaftar kursus!</p>
          </div>
        )}
        <Footer className="footer" />
      </div>
    </>
  );
};

export default Courser;
