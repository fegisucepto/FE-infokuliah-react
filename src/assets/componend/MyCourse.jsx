// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from './Header';
import Footer from './FooterNew';

export default function MyCourse() {
  const [myCourses, setMyCourses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [userCourses, setUserCourses] = useState([]);


  useEffect(() => {
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

  const handleResetScore = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:3002/reset-score`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Gagal mereset skor');
      }
      // Setelah reset skor berhasil, arahkan pengguna kembali ke halaman tes
      history.push('/question');
    } catch (error) {
      console.error('Error resetting score:', error);
      setErrorMessage('Terjadi kesalahan saat mereset skor.');
    }
  };

  const isEnrolled = (courseId) => {
    return userCourses.some((course) => course.CourseId === courseId);
  };

//   return (
//     <>
//       <Navbar className="navbar" />
//       <div className="container-fluid pt-5 pb-5 bg-light">
//         <div className="container pt-5 pb-5">
//           <div className="row-clases">
//             {errorMessage ? (
//               <p>{errorMessage}</p>
//             ) : (
//               myCourses.map((courseData) => (
//                 <div key={courseData.id} className="card-container">
//                   <div className="card border-0 bg-light shadow-sm pb-2">
//                     <img className="card-img-top mb-2" src={courseData.Course.imageURL} alt="" />
//                     <div className="card-body text-center">
//                       <h4 className="card-title">{courseData.Course.name}</h4>
//                       <p className="card-text">{courseData.Course.description}</p>
//                       <p className="card-text">Rp.{courseData.Course.price}</p>
//                       {courseData.userScore && courseData.userScore.score !== undefined ? (
//                         <button
//                           className="btn btn-primary"
//                           onClick={() => handleResetScore(courseData.id)}
//                         >
//                           Ulang Tes
//                         </button>
//                       ) : (
//                         <Link to="/question">
//                           <button className="btn btn-primary">Tes Sekarang</button>
//                         </Link>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }


return (
  <>
  <Navbar className="navbar" />
  <div className="bg-[#F1FEFF]">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
       <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
       {errorMessage ? (
              <p>{errorMessage}</p>
            ) : (myCourses.map((product) => (
          <div key={product.id}>
            <div className="relative">
              <div className="relative h-72 w-full overflow-hidden rounded-lg">
                <img
                  src={product.Course.imageURL}
                  alt={product.Course.imageURL}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="relative mt-4">
                <h3 className="text-sm font-medium text-gray-900">{product.Course.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.Course.description}</p>
              </div>
              <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                />
                <p className="relative text-lg font-semibold text-white">Rp.{product.Course.price}</p>
              </div>
            </div>
            <div className="mt-6">
              <a
                  onClick={() => handleResetScore(product.id)}
                  className={`w-full relative flex items-center justify-center rounded-md border border-transparent bg-indigo-500 px-8 py-2 text-sm font-medium text-white hover:bg-indigo-600 ${isEnrolled(product.id) ? 'cursor-not-allowed' : ''}`}
                  disabled={isEnrolled(product.id)}
                  href="/question"
                >
                  <span className="sr-only"> </span>{isEnrolled(product.id) ? 'Tes Ulang' : 'Tes Sekarang'}
                </a>
            </div>
          </div>
        ))
        )}
      </div>
    </div>
  </div>
  <Footer className="footer" />
  </>
)
}