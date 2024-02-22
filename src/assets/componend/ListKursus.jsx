import { useState, useEffect } from 'react';
import Navbar from './Header';
import Footer from './FooterNew';
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
      fetch('http://localhost:3002/courses', {
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

  // const [showFullDescription, setShowFullDescription] = useState(false);

  // const toggleDescription = () => {
  //   setShowFullDescription(!showFullDescription);
  // };

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
    <div className="bg-[#F1FEFF]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Daftar Program Kursus</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Kesempatanmu ada di depan mata masuk PTN Terbaik.
            </p>
          </div>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {isLoggedIn && programs.map((product, index) => (
            <div key={index} className="w-full">
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <img
                    src={product.imageURL}
                    alt={product.imageURL}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{showFullDescription ? product.description : `${product.description.slice(0, 100)}...`}
                     <button onClick={toggleDescription} className="read-more-button">
                      {showFullDescription ? 'Read Less' : 'Read More'}
                    </button></p> */}
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">Rp.{product.price}</p>
                </div>
              </div>
              <div className="mt-6">
                {/* <a
                  href={product.href}
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Daftar<span className="sr-only">, {product.name}</span>
                </a> */}
                <button
                    onClick={() => handleRegister(product.id)}
                    className={`w-full relative flex items-center justify-center rounded-md border border-transparent px-8 py-2 text-sm font-medium text-white ${isEnrolled(product.id) ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-500 hover:bg-indigo-600'}`}
                    disabled={isEnrolled(product.id)}
                  >
                    <span className="sr-only"> </span>{isEnrolled(product.id) ? 'Sudah Terdaftar' : 'DAFTAR'}
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showSuccessPopup && (
          <div className="success-popup">
            <p>Anda berhasil mendaftar kursus!</p>
          </div>
        )}
    </div>
    <Footer className="footer" />
    </>
  )
}


export default Courser;