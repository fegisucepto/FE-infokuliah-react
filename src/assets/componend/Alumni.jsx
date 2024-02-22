// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Navbar from './Header';
import Footer from './FooterNew';
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

//   return (
//     <section>
//       <div>
//         <Navbar />
//         <div className="alumni-container">
//           <div className="alumni-content">
//             {isLoggedIn ? (
//               <>
//                 <h1>Alumni Terbaik Infokuliah.ID</h1>
//                 <div className="alumni-list">
//                   {alumnis.map((alumni) => (
//                     <div className="alumni-item" key={alumni.id}>
//                       <img className="alumni-image" src={alumni.imageURL} alt="" />
//                       <h3>{alumni.name}</h3>
//                       <p>{alumni.jurusan}</p>
//                       <p>{alumni.universitas}</p>
//                     </div>
//                   ))}
//                 </div>
//               </>
//             ) : (
//               <p>Silakan login untuk melihat data alumni.</p>
//             )}
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </section>
//   );


  return (
    <>
     <Navbar />
    <div className="bg-[#F1FEFF] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Alumni Terbaik</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Alumni Terbaik Infokuliah.ID.
            </p>
          </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {alumnis.map((alumni) => (
            <li key={alumni.name}>
              <img className="mx-auto h-24 w-24 rounded-full" src={alumni.imageURL} alt="" />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{alumni.name}</h3>
              <p className="text-sm leading-6 text-gray-600">{alumni.universitas}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <Footer />
    </>
  )
    //  return (
    //   <>
    //   <Navbar />
    //   <div className="bg-white py-32">
    //     <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
    //       <div className="mx-auto max-w-2xl">
    //         <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
    //         <p className="mt-4 text-lg leading-8 text-gray-600">
    //           We’re a dynamic group of individuals who are passionate about what we do.
    //         </p>
    //       </div>
    //       <ul
    //         role="list"
    //         className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    //       >
    //         {alumnis.map((person) => (
    //           <li key={person.name}>
    //             <img className="mx-auto h-56 w-56 rounded-full" src={person.imageURL} alt="" />
    //             <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
    //             <p className="text-sm leading-6 text-gray-600">{person.universitas}</p>
    //             <ul role="list" className="mt-6 flex justify-center gap-x-6">
    //               <li>
    //                 <a href={person.imageUrl} className="text-gray-400 hover:text-gray-500">
    //                   <span className="sr-only">X</span>
    //                   <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
    //                     <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
    //                   </svg>
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
    //                   <span className="sr-only">LinkedIn</span>
    //                   <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
    //                     <path
    //                       fillRule="evenodd"
    //                       d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
    //                       clipRule="evenodd"
    //                     />
    //                   </svg>
    //                 </a>
    //               </li>
    //             </ul>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    //   <Footer />
    //   </>
    // )
}

export default Alumni;
