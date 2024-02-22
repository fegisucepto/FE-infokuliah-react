// // eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from 'react';
// import Navbar from './Header';
// import Footer from './FooterNew';

// const Profile = () => {
//   const [userData, setUserData] = useState(null);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [updated, setUpdated] = useState(false);

//   const fetchUserProfile = async () => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       try {
//         const response = await fetch(`http://localhost:3002/profile`, {
//           method: 'GET',
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setUserData(data.data);
//         } else {
//           console.error('Failed to fetch user data');
//         }
//       } catch (error) {
//         console.error('Error fetching user profile:', error);
//       }
//     }
//   };

//   const handleUpdateEmail = async () => {
//     const token = localStorage.getItem('token');
//     if (token && email) {
//       try {
//         const response = await fetch(`http://localhost:3002/update/email`, {
//           method: 'PUT',
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }),
//         });

//         if (response.ok) {
//           setUpdated(true);
//         } else {
//           console.error('Failed to update email');
//         }
//       } catch (error) {
//         console.error('Error updating email:', error);
//       }
//     }
//   };

//   const handleUpdatePassword = async () => {
//     const token = localStorage.getItem('token');
//     if (token && password) {
//       try {
//         const response = await fetch(`http://localhost:3002/update/password`, {
//           method: 'PUT',
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ password }),
//         });

//         if (response.ok) {
//           setUpdated(true);
//         } else {
//           console.error('Failed to update password');
//         }
//       } catch (error) {
//         console.error('Error updating password:', error);
//       }
//     }
//   };

//   useEffect(() => {
//     fetchUserProfile();
//   }, []);

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />
//       <div className="container mx-auto flex justify-center items-center py-8">
//         <div className="bg-white p-8 shadow-lg rounded-md w-full md:w-1/2 lg:w-1/3">
//           {userData && (
//             <div className="text-center mb-8">
//               <img
//                 src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
//                 alt="User Avatar"
//                 className="mx-auto w-20 h-20 rounded-full mb-4"
//               />
//               <h2 className="text-2xl font-semibold">{userData.name}</h2>
//               <p className="text-gray-600">{userData.email}</p>
//             </div>
//           )}

//           <div className="mb-8">
//             <h3 className="text-lg font-semibold mb-4">Edit Email</h3>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border rounded-md p-3 focus:outline-none focus:border-blue-500"
//             />
//             <button
//               onClick={handleUpdateEmail}
//               className="bg-blue-500 text-white px-6 py-3 ml-4 rounded-md"
//             >
//               Update Email
//             </button>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Edit Password</h3>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full border rounded-md p-3 focus:outline-none focus:border-blue-500"
//             />
//             <button
//               onClick={handleUpdatePassword}
//               className="bg-blue-500 text-white px-6 py-3 ml-4 rounded-md"
//             >
//               Update Password
//             </button>
//           </div>

//           {updated && (
//             <p className="text-green-500 mt-4 text-center">Profile updated successfully!</p>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Profile;





import React, { useState, useEffect } from 'react';
import Navbar from './Header';
import Footer from './FooterNew';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [updated, setUpdated] = useState(false);

  const fetchUserProfile = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await fetch(`http://localhost:3002/profile`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data.data);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    }
  };

  const handleUpdateEmail = async () => {
    const token = localStorage.getItem('token');
    if (token && email) {
      try {
        const response = await fetch(`http://localhost:3002/update/email`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          setUpdated(true);
          fetchUserProfile(); // Fetch updated user profile
        } else {
          console.error('Failed to update email');
        }
      } catch (error) {
        console.error('Error updating email:', error);
      }
    }
  };

  const handleUpdatePassword = async () => {
    const token = localStorage.getItem('token');
    if (token && password) {
      try {
        const response = await fetch(`http://localhost:3002/update/password`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ password }),
        });

        if (response.ok) {
          setUpdated(true);
        } else {
          console.error('Failed to update password');
        }
      } catch (error) {
        console.error('Error updating password:', error);
      }
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, [updated]); // Trigger fetchUserProfile when 'updated' changes

  return (
    <>
    <Navbar/>
    <div className='bg-[#F1FEFF]'>
      <div className="mx-auto max-w-7xl pt-16 lg:flex lg:gap-x-16 lg:px-8">
        <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
          <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                This information will be displayed publicly so be careful what you share.
              </p>

              <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Full name</dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">{userData?.fullName}</div>
                    <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Update
                    </button>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Email address</dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">{userData?.email}</div>
                    <div className="flex gap-x-4">
                      <input
                        type="email"
                        className="rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        placeholder="New Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button
                        type="button"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                        onClick={handleUpdateEmail}
                      >
                        Update
                      </button>
                    </div>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Password</dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">********</div>
                    <div className="flex gap-x-4">
                      <input
                        type="password"
                        className="rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        placeholder="New Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                        onClick={handleUpdatePassword}
                      >
                        Update
                      </button>
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </main>
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default Profile;

