import { useState, useEffect } from 'react';
import Navbar from './Header';
import Footer from './FooterNew';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import '../css/style.css';

const ListKursus = () => {
  const [programs, setPrograms] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [visibleCourses, setVisibleCourses] = useState(4);
  const [showAll, setShowAll] = useState(false);
  const [userCourses, setUserCourses] = useState([]);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    // Fetch public courses (no authentication required)
    fetch('http://localhost:3008/courses')
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

    // Check if user is logged in and fetch their courses
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      fetch('http://localhost:3008/mycourses', {
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

  const handleBuyKursus = (id) => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to login if not authenticated
      window.location.href = '/login';
      return;
    }

    fetch(`http://localhost:3008/courses/buy/${id}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Gagal mendaftar kursus');
        }
        return response.json();
      })
      .then(() => {
        showSuccessMessage();
        // Refresh user courses after successful enrollment
        const token = localStorage.getItem('token');
        if (token) {
          fetch('http://localhost:3008/mycourses', {
            headers: { 'Authorization': `Bearer ${token}` }
          })
          .then(res => res.json())
          .then(data => {
            if (data.statusCode === 200 && data.data) {
              setUserCourses(data.data);
            }
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat mendaftar kursus');
      });
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Program Kursus</span>
              <span className="block text-indigo-600 mt-2">Persiapan UTBK</span>
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-500">
              Raih impianmu masuk PTN favorit dengan bimbingan terbaik dari tutor berpengalaman
            </p>
          </div>
          
          {programs.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="max-w-md mx-auto">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Belum ada kursus tersedia</h3>
                <p className="mt-1 text-gray-500">Silakan cek kembali nanti untuk melihat program terbaru kami.</p>
              </div>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {programs.slice(0, showAll ? programs.length : visibleCourses).map((course, index) => (
                <div key={index} className="group flex flex-col bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={course.imageURL || 'https://via.placeholder.com/400x300?text=Kursus+UTBK'} 
                      alt={course.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/400x300?text=Kursus+UTBK';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-sm font-medium text-white/90">{course.category || 'Kursus UTBK'}</p>
                      <h3 className="mt-1 text-xl font-bold text-white">{course.name}</h3>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        {course.level || 'Pemula'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5 flex-1 flex flex-col">
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {course.description || 'Deskripsi kursus belum tersedia.'}
                    </p>
                    
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-gray-700">4.8</span>
                          <span className="mx-1 text-gray-400">•</span>
                          <span className="text-sm text-gray-500">120+ Peserta</span>
                        </div>
                        <span className="text-lg font-bold text-indigo-600">
                          {course.price ? `Rp ${course.price.toLocaleString('id-ID')}` : 'Gratis'}
                        </span>
                      </div>
                      
                      <button
                        onClick={() => handleBuyKursus(course.id)}
                        disabled={isEnrolled(course.id)}
                        className={`w-full py-2.5 px-4 rounded-lg font-medium text-sm transition-colors ${
                          isEnrolled(course.id)
                            ? 'bg-gray-200 text-gray-600 cursor-not-allowed'
                            : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                        }`}
                      >
                        {isEnrolled(course.id) ? (
                          <span className="flex items-center justify-center">
                            <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Sudah Terdaftar
                          </span>
                        ) : (
                          'Daftar Sekarang'
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {programs.length > visibleCourses && (
                <div className="mt-8 text-center col-span-full">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                  >
                    {showAll ? (
                      <>
                        <span>Sembunyikan</span>
                        <ChevronUpIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                      </>
                    ) : (
                      <>
                        <span>Tampilkan Semua ({programs.length - visibleCourses} Lainnya)</span>
                        <ChevronDownIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      
      {/* Success Notification */}
      {showSuccessPopup && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg shadow-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">
                  Pendaftaran berhasil!
                </p>
                <p className="text-sm text-green-700 mt-1">
                  Selamat! Kamu telah terdaftar di kursus ini.
                </p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  onClick={() => setShowSuccessPopup(false)}
                  className="inline-flex text-green-500 hover:text-green-700 focus:outline-none"
                >
                  <span className="sr-only">Tutup</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default ListKursus;
