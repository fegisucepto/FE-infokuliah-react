// import { useState, Fragment } from 'react';
// import { Dialog, Menu, Transition } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline';
// import { Link } from 'react-router-dom';
// import logoInfokuliah from '../images/LogoInfokuliah.png';

// const navigation = [
//   { name: 'Beranda', href: '/', current: true },
//   { name: 'Kursus', href: '/courses', current: false },
//   { name: 'Materi', href: '/materi', current: false },
//   { name: 'Try Out', href: '/tryout', current: false },
//   { name: 'Tentang Kami', href: '/about', current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const token = localStorage.getItem('token');
//   // Remove scroll effect for now
//   // const [isScrolled, setIsScrolled] = useState(false);
  
//   // // Add scroll effect
//   // if (typeof window !== 'undefined') {
//   //   window.addEventListener('scroll', () => {
//   //     if (window.scrollY > 10) {
//   //       setIsScrolled(true);
//   //     } else {
//   //       setIsScrolled(false);
//   //     }
//   //   });
//   // }

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     window.location.href = '/';
//   };

//   return (
//     <header className="fixed w-full z-50 bg-gradient-to-r from-indigo-50 via-white to-blue-50 shadow-sm py-3 border-b border-indigo-100">
//       <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
//         <div className="flex w-full items-center justify-between border-b border-indigo-500 border-opacity-20 py-2 lg:border-none">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center">
//               <img
//                 className="h-10 w-auto"
//                 src={logoInfokuliah}
//                 alt="InfoKuliah"
//               />
//               <span className="ml-3 text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">InfoKuliah</span>
//             </Link>
//             <div className="hidden ml-10 space-x-8 lg:block">
//               {navigation.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.href}
//                   className={`text-base font-medium transition-colors duration-200 ${
//                     link.current
//                       ? 'text-indigo-600 font-semibold bg-indigo-50 px-3 py-1.5 rounded-lg'
//                       : 'text-gray-600 hover:text-indigo-500 hover:bg-indigo-50/50 px-3 py-1.5 rounded-lg'
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
          
//           <div className="ml-10 space-x-4 flex items-center">
//             {token ? (
//               <Menu as="div" className="relative ml-3">
//                 <div>
//                   <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
//                     <span className="sr-only">Open user menu</span>
//                     <UserCircleIcon className="h-8 w-8 text-gray-400" aria-hidden="true" />
//                   </Menu.Button>
//                 </div>
//                 <Transition
//                   as={Fragment}
//                   enter="transition ease-out duration-100"
//                   enterFrom="transform opacity-0 scale-95"
//                   enterTo="transform opacity-100 scale-100"
//                   leave="transition ease-in duration-75"
//                   leaveFrom="transform opacity-100 scale-100"
//                   leaveTo="transform opacity-0 scale-95"
//                 >
//                   <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                     <Menu.Item>
//                       {({ active }) => (
//                         <Link
//                           to="/profile"
//                           className={classNames(
//                             active ? 'bg-gray-100' : '',
//                             'block px-4 py-2 text-sm text-gray-700'
//                           )}
//                         >
//                           Profil Saya
//                         </Link>
//                       )}
//                     </Menu.Item>
//                     <Menu.Item>
//                       {({ active }) => (
//                         <Link
//                           to="/my-courses"
//                           className={classNames(
//                             active ? 'bg-gray-100' : '',
//                             'block px-4 py-2 text-sm text-gray-700'
//                           )}
//                         >
//                           Kelas Saya
//                         </Link>
//                       )}
//                     </Menu.Item>
//                     <Menu.Item>
//                       {({ active }) => (
//                         <button
//                           onClick={handleLogout}
//                           className={classNames(
//                             active ? 'bg-gray-100' : '',
//                             'block w-full text-left px-4 py-2 text-sm text-gray-700'
//                           )}
//                         >
//                           Keluar
//                         </button>
//                       )}
//                     </Menu.Item>
//                   </Menu.Items>
//                 </Transition>
//               </Menu>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   className="inline-block rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white hover:bg-indigo-700"
//                 >
//                   Masuk
//                 </Link>
//                 <Link
//                   to="/register"
//                   className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
//                 >
//                   Daftar
//                 </Link>
//               </>
//             )}
            
//             <div className="lg:hidden">
//               <button
//                 type="button"
//                 className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
//                 onClick={() => setMobileMenuOpen(true)}
//               >
//                 <span className="sr-only">Open main menu</span>
//                 <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
//         <div className="fixed inset-0 z-50" />
//         <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//           <div className="flex items-center justify-between">
//             <Link to="/" className="-m-1.5 p-1.5">
//               <span className="sr-only">InfoKuliah</span>
//               <img
//                 className="h-8 w-auto"
//                 src={logoInfokuliah}
//                 alt=""
//               />
//             </Link>
//             <button
//               type="button"
//               className="-m-2.5 rounded-md p-2.5 text-gray-700"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               <span className="sr-only">Close menu</span>
//               <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//             </button>
//           </div>
//           <div className="mt-6 flow-root">
//             <div className="-my-6 divide-y divide-gray-500/10">
//               <div className="space-y-2 py-6">
//                 {navigation.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.href}
//                     className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//               <div className="py-6">
//                 {token ? (
//                   <>
//                     <Link
//                       to="/profile"
//                       className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       Profil Saya
//                     </Link>
//                     <button
//                       onClick={() => {
//                         handleLogout();
//                         setMobileMenuOpen(false);
//                       }}
//                       className="-mx-3 block w-full text-left rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                     >
//                       Keluar
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <Link
//                       to="/login"
//                       className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       Masuk
//                     </Link>
//                     <Link
//                       to="/register"
//                       className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-indigo-600 hover:bg-gray-50"
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       Daftar
//                     </Link>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </Dialog.Panel>
//       </Dialog>
//     </header>
//   );
// }



import { useState, Fragment } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import logoInfokuliah from '../images/LogoInfokuliah.png';

const navigation = [
  { name: 'Beranda', href: '/', current: true },
  { name: 'Kursus', href: '/courses', current: false },
  { name: 'Try Out', href: '/tryout', current: false },
  { name: 'Materi', href: '/artikel', current: false },
  { name: 'Beasiswa', href: '/beasiswa', current: false },
  { name: 'Alumni', href: '/alumni', current: false },
  { name: 'Tentang Kami', href: '/about', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const token = localStorage.getItem('token');
  const location = useLocation();
  const [navItems, setNavItems] = useState(
    navigation.map(item => ({
      ...item,
      current: item.href === location.pathname
    }))
  );

  const handleNavigationClick = (clickedItem) => {
    setNavItems(navItems.map(item => ({
      ...item,
      current: item.name === clickedItem.name
    })));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <header className="fixed w-full z-50 bg-gradient-to-r from-indigo-50 via-white to-blue-50 shadow-sm py-3 border-b border-indigo-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-2">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center"
              onClick={() => handleNavigationClick(navItems[0])}
            >
              <img
                className="h-10 w-auto"
                src={logoInfokuliah}
                alt="InfoKuliah"
              />
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">InfoKuliah</span>
            </Link>
            <div className="hidden ml-10 space-x-2 lg:block">
              {navItems.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => handleNavigationClick(link)}
                  className={`text-base font-medium transition-all duration-200 ${
                    link.current
                      ? 'text-indigo-600 font-semibold bg-indigo-50 px-4 py-2 rounded-lg'
                      : 'text-gray-600 hover:text-indigo-500 hover:bg-indigo-50/50 px-4 py-2 rounded-lg'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="ml-10 space-x-4 flex items-center">
            {token ? (
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="sr-only">Open user menu</span>
                    <UserCircleIcon className="h-8 w-8 text-gray-600" aria-hidden="true" />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/profile"
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          Profil Saya
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/my-courses"
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          Kelas Saya
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleLogout}
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block w-full text-left px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          Keluar
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <>
                <Link
                  to="/login"
                  className="inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 py-2 px-5 text-base font-medium text-white hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Masuk
                </Link>
                <Link
                  to="/register"
                  className="ml-3 inline-block rounded-lg border-2 border-indigo-500 bg-white py-1.5 px-5 text-base font-medium text-indigo-600 hover:bg-indigo-50 transition-all duration-300"
                >
                  Daftar
                </Link>
              </>
            )}
            
            <div className="lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="-m-1.5 p-1.5"
              onClick={() => {
                handleNavigationClick(navItems[0]);
                setMobileMenuOpen(false);
              }}
            >
              <span className="sr-only">InfoKuliah</span>
              <img
                className="h-8 w-auto"
                src={logoInfokuliah}
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => {
                      handleNavigationClick(item);
                      setMobileMenuOpen(false);
                    }}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                      item.current
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                {token ? (
                  <>
                    <Link
                      to="/profile"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Profil Saya
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setMobileMenuOpen(false);
                      }}
                      className="-mx-3 block w-full text-left rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Keluar
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Masuk
                    </Link>
                    <Link
                      to="/register"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-indigo-600 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Daftar
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}