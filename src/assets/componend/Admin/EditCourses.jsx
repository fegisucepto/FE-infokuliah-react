import { Fragment, useState, useEffect } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import logoInfokuliah from '../../images/LogoInfokuliah.png';
import { Bars3Icon, BellIcon, CalendarIcon, ChartPieIcon, Cog6ToothIcon, DocumentDuplicateIcon, FolderIcon, HomeIcon, UsersIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: HomeIcon, current: false },
  { name: 'User', href: 'admin/user', icon: UsersIcon, current: false },
  { name: 'Projects', href: 'admin/projects', icon: FolderIcon, current: true },
  { name: 'Alumni', href: 'admin/alumni', icon: CalendarIcon, current: false },
  { name: 'Beasiswa', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Artikel', href: '#', icon: ChartPieIcon, current: false },
];
const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/';
};

const userNavigation = [
  { name: 'Your profile', href: '/profil/${id}' },
  { name: 'Sign out', onClick: logout },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Courser() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [programs, setPrograms] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      fetch('http://localhost:3002/listquestion', {
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
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child as={Fragment} enter="transition-opacity ease-linear duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity ease-linear duration-300" leaveFrom="opacity-100" leaveTo="opacity-0">
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child as={Fragment} enter="ease-in-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-300" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a href={item.href} className={classNames(item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold')}>
                                  <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <a href="#" className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                            <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                            Settings
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img className="h-8 w-auto" src={logoInfokuliah} alt="Your Company" />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className={classNames(item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold')}>
                          <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a href="#" className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                    <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400" aria-hidden="true" />
                <input id="search-field" className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..." type="search" name="search" />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <span className="hidden lg:flex lg:items-center">
                      {/* <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                        Tom Cook
                      </span> */}
                      <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Fragment>
                              {item.onClick ? (
                                <button type="button" onClick={item.onClick} className={classNames(active ? 'bg-gray-50' : '', 'block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left')}>
                                  {item.name}
                                </button>
                              ) : (
                                <a href={item.href} className={classNames(active ? 'bg-gray-50' : '', 'block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left')}>
                                  {item.name}
                                </a>
                              )}
                            </Fragment>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="flex flex-col pb-12 bg-slate-100">
              <div className="flex flex-col justify-center items-start px-10 py-6 w-full text-xl tracking-normal bg-white max-md:px-5 max-md:max-w-full">
                <div className="flex gap-2 justify-center">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a83343516b5cc8abd28187cc949bcb690515f9dd6374aeef60121bfe129da9e0?" className="my-auto w-6 aspect-square" />
                  <div className="flex-auto text-cyan-950">Soal</div>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a7bcb14f2f25894e29db6b5f6eafc26ee64c1b06e561aa8c924d442d2efe57c?" className="my-auto w-6 aspect-square" />
                  <div className="grow font-bold text-rose-700 whitespace-nowrap">Edit Soal.</div>
                </div>
              </div>
              <div className="w-full bg-neutral-200 min-h-[1px] max-md:max-w-full" />
              <div className="flex flex-col px-10 mt-10 w-full max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col items-start p-10 bg-white rounded border border-solid border-[color:var(--Grayscale-Gray-4,#E0E0E0)] max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-5 justify-between self-stretch whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col flex-1 max-md:max-w-full">
                      <div className="flex gap-px self-start text-sm tracking-normal leading-7">
                        <div className="grow text-cyan-950">Soal</div>
                        <div className="text-rose-500">*</div>
                      </div>
                      <div className="justify-center items-start py-2.5 pr-16 pl-4 text-sm tracking-normal bg-white rounded border border-solid border-neutral-200 text-cyan-950 max-md:pr-5 max-md:max-w-full">ACL</div>
                    </div>
                    <div className="flex flex-col flex-1 max-md:max-w-full">
                      <div className="flex gap-px self-start text-sm tracking-normal leading-7">
                        <div className="grow text-cyan-950">Pilihan Jawaban</div>
                        <div className="text-rose-500">*</div>
                      </div>
                      <div className="justify-center items-start py-2.5 pr-16 pl-4 text-sm tracking-normal bg-white rounded border border-solid border-neutral-200 text-cyan-950 max-md:pr-5 max-md:max-w-full">Ancol</div>
                    </div>
                  </div>
                  <div className="flex gap-px mt-10 text-sm tracking-normal leading-7 whitespace-nowrap">
                    <div className="grow text-cyan-950">Jawaban</div>
                    <div className="text-rose-500">*</div>
                  </div>
                  <div className="flex gap-5 justify-between px-4 py-2.5 max-w-full text-sm tracking-normal bg-white rounded border border-solid border-neutral-200 text-cyan-950 w-[583px] max-md:flex-wrap">
                    <div>ACL - Jakarta</div>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d4a5d432bee5e28e71986bd7b3ff9cfd50db7522ff85e408f96a8661fdc8bc2?" className="w-6 aspect-square" />
                  </div>
                </div>
                <div className="flex gap-4 self-end mt-10 text-base font-bold tracking-wide text-center capitalize whitespace-nowrap">
                  <div className="grow justify-center px-14 py-2 text-rose-700 bg-white rounded border border-solid border-[color:var(--Primary-Red,#BE0028)] max-md:px-5">Back</div>
                  <div className="grow justify-center px-14 py-2 text-white bg-rose-700 rounded max-md:px-5">Save</div>
                </div>
              </div>
            </div>
            ;
          </main>
        </div>
      </div>
    </>
  );
}
