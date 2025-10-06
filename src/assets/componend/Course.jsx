import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../css/style.css';

const Course = () => {
  const [programs, setPrograms] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userCourses, setUserCourses] = useState([]);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Fetch courses (no authentication required)
  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:3008/courses');
      const data = await response.json();
      
      if (response.ok && data.statusCode === 200 && data.data) {
        setPrograms(data.data);
      } else {
        console.error('Failed to fetch programs:', data);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  // Fetch user courses (requires authentication)
  const fetchUserCourses = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await fetch('http://localhost:3008/mycourses', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      
      if (response.ok && data.statusCode === 200 && data.data) {
        setUserCourses(data.data);
      } else {
        console.error('Failed to fetch user courses:', data);
      }
    } catch (error) {
      console.error('Error fetching user courses:', error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    
    // Always fetch courses (no auth required)
    fetchCourses();
    
    // Only fetch user courses if logged in
    if (token) {
      fetchUserCourses();
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
      fetch(`http://localhost:3008/courses/buy/${id}`, {
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
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="container my-4 flex-grow-1">
        <h2 className="text-center mb-4">Daftar Kursus Tersedia</h2>
        <div className="row">
          {programs && programs.length > 0 ? (
            programs.map((program, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img 
                    className="card-img-top" 
                    src={program.imageURL} 
                    alt={program.name}
                    style={{ height: '200px', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                    }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{program.name}</h5>
                    <div className="card-text flex-grow-1">
                      {program.description && program.description.length > 100 ? (
                        <>
                          {showFullDescription ? program.description : `${program.description.substring(0, 100)}...`}
                          <button 
                            onClick={toggleDescription} 
                            className="btn btn-link p-0 ml-1"
                          >
                            {showFullDescription ? 'Lebih Sedikit' : 'Selengkapnya'}
                          </button>
                        </>
                      ) : program.description || 'Tidak ada deskripsi'}
                    </div>
                    <div className="mt-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 text-primary">
                          {program.price ? `Rp ${program.price.toLocaleString('id-ID')}` : 'Gratis'}
                        </h5>
                        <button
                          onClick={() => handleRegister(program.id)}
                          className={`btn ${isEnrolled(program.id) ? 'btn-secondary' : 'btn-primary'}`}
                          disabled={isEnrolled(program.id)}
                        >
                          {isEnrolled(program.id) ? 'Sudah Terdaftar' : 'Daftar Sekarang'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="alert alert-info text-center">
                Belum ada kursus yang tersedia.
              </div>
            </div>
          )}
        </div>
        {showSuccessPopup && (
          <div className="alert alert-success position-fixed top-0 end-0 m-3" role="alert">
            Anda berhasil mendaftar kursus!
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Course;
