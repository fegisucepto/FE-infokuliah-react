// // // // eslint-disable-next-line no-unused-vars
// // // import React, { useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';

// // // export default function Login() {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [loginStatus, setLoginStatus] = useState('');
// // //   const navigate = useNavigate();

// // //   const handleUsernameChange = (event) => {
// // //     setEmail(event.target.value);
// // //   };

// // //   const handlePasswordChange = (event) => {
// // //     setPassword(event.target.value);
// // //   };

// // //   const handleSubmit = async (event) => {
// // //     event.preventDefault();

// // //     try {
// // //       const response = await fetch('http://localhost:3002/login', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify({ email, password }),
// // //       });

// // //       if (response.ok) {
// // //         const data = await response.json();
// // //         const token = data.data.access_token;

// // //         // Simpan token ke local storage
// // //         localStorage.setItem('token', token);

// // //         setLoginStatus('Login successful!');
// // //         navigate('/'); // Redirect to home page upon successful login
// // //       } else {
// // //         const errorResponse = await response.text();
// // //         console.error('Error logging in:', errorResponse);
// // //         setLoginStatus('Error logging in. Please try again.');
// // //       }
// // //     } catch (error) {
// // //       console.error('Error logging in:', error);
// // //       setLoginStatus('Error logging in. Please try again later.');
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h1>Login Page</h1>
// // //       <form onSubmit={handleSubmit}>
// // //         <input type="text" placeholder="Email" value={email} onChange={handleUsernameChange} />
// // //         <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
// // //         <button type="submit">Login</button>
// // //       </form>
// // //       {loginStatus && <p>{loginStatus}</p>}
// // //     </div>
// // //   );
// // // }

// // // eslint-disable-next-line no-unused-vars
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import logoInfokuliah from '../images/LogoInfokuliah.png';

// // export default function Login() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [loginStatus, setLoginStatus] = useState('');
// //   const navigate = useNavigate();

// //   const handleUsernameChange = (event) => {
// //     setEmail(event.target.value);
// //   };

// //   const handlePasswordChange = (event) => {
// //     setPassword(event.target.value);
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     try {
// //       const response = await fetch('http://localhost:3002/login', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ email, password }),
// //       });

// //       if (response.ok) {
// //         const data = await response.json();
// //         const token = data.data.access_token;

// //         // Simpan token ke local storage
// //         localStorage.setItem('token', token);

// //         setLoginStatus('Login successful!');

// //         // Check if the role property exists in the response
// //         if (data.data && data.data.role !== undefined) {
// //           // Check the role here
// //           if (data.data.role === 2) {
// //             navigate('/'); // Redirect to a specific page for role 2
// //           } else if (data.data.role === 1) {
// //             navigate('/admin'); // Redirect to admin page for role 1
// //           } else {
// //             navigate('/'); // Redirect to home page for other roles
// //           }
// //         } else {
// //           console.error('Role information not found in the API response.');
// //           // Handle the case where role information is missing in the response
// //         }
// //       } else {
// //         const errorResponse = await response.text();
// //         console.error('Error logging in:', errorResponse);
// //         setLoginStatus('Error logging in. Please try again.');
// //       }
// //     } catch (error) {
// //       console.error('Error logging in:', error);
// //       setLoginStatus('Error logging in. Please try again later.');
// //     }
// //   };

// //   //   return (
// //   //     <>
// //   //       {/*
// //   //         This example requires updating your template:

// //   //         ```
// //   //         <html class="h-full bg-white">
// //   //         <body class="h-full">
// //   //         ```
// //   //       */}
// //   //       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
// //   //         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
// //   //           <img
// //   //             className="mx-auto h-10 w-auto"
// //   //             src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
// //   //             alt="Your Company"
// //   //           />
// //   //           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
// //   //             Sign in to your account
// //   //           </h2>
// //   //         </div>

// //   //         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
// //   //           <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
// //   //             <div>
// //   //               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
// //   //                 Email address
// //   //               </label>
// //   //               <div className="mt-2">
// //   //                 <input
// //   //                   id="email"
// //   //                   name="email"
// //   //                   type="email"
// //   //                   autoComplete="email"
// //   //                   required
// //   //                   value={email}
// //   //                   onChange={handleUsernameChange}
// //   //                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
// //   //                 />
// //   //               </div>
// //   //             </div>

// //   //             <div>
// //   //               <div className="flex items-center justify-between">
// //   //                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
// //   //                   Password
// //   //                 </label>
// //   //                 <div className="text-sm">
// //   //                   <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
// //   //                     Forgot password?
// //   //                   </a>
// //   //                 </div>
// //   //               </div>
// //   //               <div className="mt-2">
// //   //                 <input
// //   //                   id="password"
// //   //                   name="password"
// //   //                   type="password"
// //   //                   autoComplete="current-password"
// //   //                   required
// //   //                   value={password}
// //   //                   onChange={handlePasswordChange}
// //   //                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
// //   //                 />
// //   //               </div>
// //   //             </div>

// //   //             <div>
// //   //               <button
// //   //                 type="submit"
// //   //                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
// //   //               >
// //   //                 Sign in
// //   //               </button>
// //   //             </div>
// //   //           </form>

// //   //           {loginStatus && <p className="mt-10 text-center text-sm text-gray-500">{loginStatus}</p>}

// //   //           <p className="mt-10 text-center text-sm text-gray-500">
// //   //             Not a member?{' '}
// //   //             <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
// //   //               Start a 14 day free trial
// //   //             </a>
// //   //           </p>
// //   //         </div>
// //   //       </div>
// //   //     </>
// //   //   );
// //   // }

// //   /*
// //   This example requires some changes to your config:
  
// //   ```
// //   // tailwind.config.js
// //   module.exports = {
// //     // ...
// //     plugins: [
// //       // ...
// //       require('@tailwindcss/forms'),
// //     ],
// //   }
// //   ```
// // */
// //   return (
// //     <>
// //       <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
// //         <div className="sm:mx-auto sm:w-full sm:max-w-md">
// //           <img className="mx-auto h-10 w-auto" src={logoInfokuliah} alt="InfoKuliah.ID" />
// //           <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
// //         </div>

// //         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
// //           <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
// //             <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
// //               <div>
// //                 <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
// //                   Email address
// //                 </label>
// //                 <div className="mt-2">
// //                   <input
// //                     id="email"
// //                     name="email"
// //                     type="email"
// //                     autoComplete="email"
// //                     required
// //                     value={email}
// //                     onChange={handleUsernameChange}
// //                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
// //                   />
// //                 </div>
// //               </div>

// //               <div>
// //                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
// //                   Password
// //                 </label>
// //                 <div className="mt-2">
// //                   <input
// //                     id="password"
// //                     name="password"
// //                     type="password"
// //                     autoComplete="current-password"
// //                     required
// //                     value={password}
// //                     onChange={handlePasswordChange}
// //                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
// //                   />
// //                 </div>
// //               </div>

// //               <div className="flex items-center justify-between">
// //                 <div className="flex items-center">
// //                   <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
// //                   <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
// //                     Remember me
// //                   </label>
// //                 </div>

// //                 <div className="text-sm leading-6">
// //                   <a href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
// //                     Sign Up?
// //                   </a>
// //                 </div>
// //               </div>

// //               <div>
// //                 <button
// //                   type="submit"
// //                   className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
// //                 >
// //                   Sign in
// //                 </button>
// //               </div>
// //             </form>

// //             {loginStatus && <p className="mt-10 text-center text-sm text-gray-500">{loginStatus}</p>}

// //             <div>
// //               <div className="relative mt-10">
// //                 <div className="absolute inset-0 flex items-center" aria-hidden="true">
// //                   <div className="w-full border-t border-gray-200" />
// //                 </div>
// //                 <div className="relative flex justify-center text-sm font-medium leading-6">
// //                   <span className="bg-white px-6 text-gray-900">Or continue with</span>
// //                 </div>
// //               </div>

// //               <div className="mt-6 grid grid-cols-2 gap-4">
// //                 <a
// //                   href="#"
// //                   className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
// //                 >
// //                   <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
// //                     <path
// //                       d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
// //                       fill="#EA4335"
// //                     />
// //                     <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4" />
// //                     <path
// //                       d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
// //                       fill="#FBBC05"
// //                     />
// //                     <path
// //                       d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
// //                       fill="#34A853"
// //                     />
// //                   </svg>
// //                   <span className="text-sm font-semibold leading-6">Google</span>
// //                 </a>

// //                 <a
// //                   href="#"
// //                   className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
// //                 >
// //                   <svg className="h-5 w-5 fill-[#24292F]" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
// //                     <path
// //                       fillRule="evenodd"
// //                       d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
// //                       clipRule="evenodd"
// //                     />
// //                   </svg>
// //                   <span className="text-sm font-semibold leading-6">GitHub</span>
// //                 </a>
// //               </div>
// //             </div>
// //           </div>

// //           <p className="mt-10 text-center text-sm text-gray-500">
// //             Not a member?{' '}
// //             <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
// //               Start a 14 day free trial
// //             </a>
// //           </p>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
// import { motion } from 'framer-motion';
// import logoInfokuliah from '../images/LogoInfokuliah.png';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [loginStatus, setLoginStatus] = useState({ message: '', type: '' });
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setIsLoading(true);
//     setLoginStatus({ message: '', type: '' });

//     try {
//       const response = await fetch('http://localhost:3008/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         const token = data.data?.access_token;
//         if (token) {
//           localStorage.setItem('token', token);
//           setLoginStatus({ 
//             message: 'Login berhasil! Mengalihkan...', 
//             type: 'success' 
//           });
          
//           setTimeout(() => {
//             if (data.data?.role === 1) {
//               navigate('/admin');
//             } else {
//               navigate('/');
//             }
//           }, 1500);
//         }
//       } else {
//         throw new Error(data.message || 'Email atau password salah');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setLoginStatus({ 
//         message: error.message || 'Terjadi kesalahan. Silakan coba lagi.', 
//         type: 'error' 
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-md">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//           className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
//         >
//           <div className="p-8">
//             {/* Header */}
//             <div className="text-center mb-8">
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={logoInfokuliah}
//                   alt="EduBlog"
//                   className="h-12 w-auto"
//                 />
//               </div>
//               <h1 className="text-2xl font-bold text-gray-800 mb-2">Selamat Datang Kembali</h1>
//               <p className="text-gray-500 text-sm">Masuk untuk melanjutkan ke akun Anda</p>
//             </div>

//             {/* Status Message */}
//             {loginStatus.message && (
//               <div className={`mb-6 p-3 rounded-md text-sm ${
//                 loginStatus.type === 'error' 
//                   ? 'bg-red-50 text-red-700' 
//                   : 'bg-green-50 text-green-700'
//               }`}>
//                 {loginStatus.message}
//               </div>
//             )}

//             {/* Login Form */}
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                   Email
//                 </label>
//                 <div className="relative">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="block w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     placeholder="Masukkan email Anda"
//                     disabled={isLoading}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <div className="flex justify-between items-center mb-1">
//                   <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                     Kata Sandi
//                   </label>
//                   <a href="#" className="text-xs text-blue-600 hover:underline">
//                     Lupa password?
//                   </a>
//                 </div>
//                 <div className="relative">
//                   <input
//                     id="password"
//                     name="password"
//                     type={showPassword ? 'text' : 'password'}
//                     autoComplete="current-password"
//                     required
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="block w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
//                     placeholder="Masukkan kata sandi"
//                     disabled={isLoading}
//                   />
//                   <button
//                     type="button"
//                     className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                     onClick={() => setShowPassword(!showPassword)}
//                     disabled={isLoading}
//                   >
//                     {showPassword ? (
//                       <EyeSlashIcon className="h-5 w-5 text-gray-400" />
//                     ) : (
//                       <EyeIcon className="h-5 w-5 text-gray-400" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className={`w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
//                     isLoading 
//                       ? 'bg-blue-400' 
//                       : 'bg-blue-600 hover:bg-blue-700'
//                   } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
//                 >
//                   {isLoading ? 'Memproses...' : 'Masuk'}
//                 </button>
//               </div>
//             </form>

//             <div className="mt-6">
//               <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-200"></div>
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="px-2 bg-white text-gray-500">Atau lanjutkan dengan</span>
//                 </div>
//               </div>

//               <div className="mt-6 grid grid-cols-2 gap-3">
//                 <button
//                   type="button"
//                   disabled={isLoading}
//                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
//                 >
//                   <span className="sr-only">Masuk dengan Google</span>
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
//                   </svg>
//                 </button>
//                 <button
//                   type="button"
//                   disabled={isLoading}
//                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
//                 >
//                   <span className="sr-only">Masuk dengan Facebook</span>
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
//                     <path
//                       fillRule="evenodd"
//                       d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
//             <p className="text-center text-sm text-gray-500">
//               Belum punya akun?{' '}
//               <a href="/register" className="font-medium text-blue-600 hover:text-blue-500">
//                 Daftar sekarang
//               </a>
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

// Asumsi Anda memiliki logo yang cocok untuk latar belakang gelap/terang
// Jika logoInfokuliah.png Anda kurang terlihat di latar belakang gelap, 
// Anda mungkin perlu menggunakan logo yang berbeda atau teks.
import logoInfokuliah from '../images/LogoInfokuliah.png'; 

// Import gambar latar belakang yang sesuai
// Anda perlu memastikan gambar ini ada di folder /public atau diimport dengan benar
// Saya akan menggunakan class kustom untuk latar belakang.

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginStatus, setLoginStatus] = useState({ message: '', type: '' });
  const navigate = useNavigate();

  // --- Fungsi Handle Perubahan dan Submit Tetap Sama ---

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setLoginStatus({ message: '', type: '' });

    try {
      // Ganti 'http://localhost:3008/login' dengan endpoint API Anda yang benar
      const response = await fetch('http://localhost:3008/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const token = data.data?.access_token;
        if (token) {
          localStorage.setItem('token', token);
          setLoginStatus({ 
            message: 'Login berhasil! Mengalihkan...', 
            type: 'success' 
          });
          
          setTimeout(() => {
            if (data.data?.role === 1) {
              navigate('/admin');
            } else {
              navigate('/');
            }
          }, 1500);
        }
      } else {
        // Asumsi pesan error ada di data.message
        throw new Error(data.message || 'Email atau password salah');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginStatus({ 
        message: error.message || 'Terjadi kesalahan. Silakan coba lagi.', 
        type: 'error' 
      });
    } finally {
      setIsLoading(false);
    }
  };


  return (
    // Container utama dengan latar belakang gambar
    // Anda perlu menambahkan class 'winter-background' ke file CSS Anda
    <div className="min-h-screen flex items-center justify-center p-4 winter-background relative">
        
      {/* Overlay untuk efek buram pada form - class 'glass-login-form' */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm glass-login-form p-6 md:p-8 rounded-3xl shadow-2xl relative z-10"
      >
          
        {/* Header - di gambar hanya ada teks 'Login' */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-white tracking-wider">Login</h1>
        </div>

        {/* Status Message (Opsional) - disesuaikan agar terlihat di latar gelap */}
        {loginStatus.message && (
            <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className={`mb-6 p-3 rounded-md text-sm ${
                loginStatus.type === 'error' 
                  ? 'bg-red-50/80 text-red-800' // Sedikit transparansi
                  : 'bg-green-50/80 text-green-800'
              }`}>
                {loginStatus.message}
            </motion.div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Email */}
          <div className="pt-2"> 
            <label htmlFor="email" className="block text-base text-gray-200 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // Kelas untuk input yang lebih minimalis
              className="block w-full bg-transparent border-0 border-b-2 border-white/50 text-white placeholder-gray-400 focus:ring-0 focus:border-white pb-1.5 transition duration-300"
              placeholder="" // Placeholder dikosongkan karena desainnya memiliki label
              disabled={isLoading}
            />
          </div>

          {/* Input Password */}
          <div className="pt-4">
            <label htmlFor="password" className="block text-base text-gray-200 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // Kelas untuk input yang lebih minimalis
                className="block w-full bg-transparent border-0 border-b-2 border-white/50 text-white placeholder-gray-400 focus:ring-0 focus:border-white pb-1.5 transition duration-300 pr-10"
                placeholder="" // Placeholder dikosongkan karena desainnya memiliki label
                disabled={isLoading}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-300 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm pt-2">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-purple-400 focus:ring-purple-400 bg-transparent" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                Remember Me
              </label>
            </div>

            <a href="#" className="font-medium text-gray-300 hover:text-white transition duration-300">
              Forgot Password
            </a>
          </div>

          {/* Tombol Login */}
          <div className="pt-8">
            <button
              type="submit"
              disabled={isLoading}
              // Tombol Putih dengan bayangan soft seperti gambar
              className={`w-full flex justify-center py-3 px-4 rounded-full shadow-lg text-lg font-semibold text-purple-700 bg-white hover:shadow-xl transition duration-300 ${
                isLoading 
                  ? 'opacity-70 cursor-not-allowed' 
                  : 'hover:scale-[1.02]'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white`}
            >
              {isLoading ? 'Loading...' : 'Log in'}
            </button>
          </div>
        </form>

        {/* Link Register */}
        <div className="mt-8 text-center text-sm">
          <p className="text-gray-300">
            Don't have an account?{' '}
            <a href="/register" className="font-semibold text-white hover:text-purple-300 transition duration-300">
              Register
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}