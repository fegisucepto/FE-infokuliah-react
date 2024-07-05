import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline';

// const stats = [
//   { id: 1, name: 'Total Pengguna', stat: '71,897', icon: UsersIcon, change: '122', changeType: 'increase', href: 'admin/user' },
//   { id: 2, name: 'Total Soal', stat: '58.16', icon: EnvelopeOpenIcon, change: '5.4%', changeType: 'increase', href: 'admin/projects' },
//   { id: 3, name: 'Total Alumni', stat: '24.57', icon: UsersIcon, change: '3.2%', changeType: 'decrease', href: 'admin/alumni' },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

import { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, CalendarIcon, ChartPieIcon, Cog6ToothIcon, DocumentDuplicateIcon, FolderIcon, HomeIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import HOmefoto from '../../images/desian1.png';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: HomeIcon, current: true },
  { name: 'User', href: 'admin/user', icon: UsersIcon, current: false },
  { name: 'Trainer', href: 'admin/trainer', icon: UsersIcon, current: false },
  { name: 'Kursus', href: '/admin/kursus', icon: ChartPieIcon, current: false },
  { name: 'Projects', href: 'admin/projects', icon: FolderIcon, current: false },
  { name: 'Alumni', href: 'admin/alumni', icon: CalendarIcon, current: false },
  { name: 'Beasiswa', href: 'admin/projects2', icon: DocumentDuplicateIcon, current: false },
  { name: 'Artikel', href: '/admin/article', icon: ChartPieIcon, current: false },
];

const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/';
};

const userNavigation = [
  { name: 'Your profile', href: '/admin/profil/${id}' },
  { name: 'Sign out', onClick: logout },
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
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
          {/* Ganti SINI */}
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              {/* <div>
                <h3 className="text-base font-semibold leading-6 text-gray-900">Last 30 days</h3>

                <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {stats.map((item) => (
                    <div key={item.id} className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
                      <dt>
                        <div className="absolute rounded-md bg-indigo-500 p-3">
                          <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
                      </dt>
                      <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                        <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
                        <p className={classNames(item.changeType === 'increase' ? 'text-green-600' : 'text-red-600', 'ml-2 flex items-baseline text-sm font-semibold')}>
                          {item.changeType === 'increase' ? (
                            <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                          ) : (
                            <ArrowDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                          )}

                          <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                          {item.change}
                        </p>
                        <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                          <div className="text-sm">
                            <a href={item.href} className="font-medium text-indigo-600 hover:text-indigo-500">
                              View all<span className="sr-only"> {item.name} stats</span>
                            </a>
                          </div>
                        </div>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div> */}
              {/* <div className="flex flex-col">
                <div className="flex gap-5 justify-between mx-8 font-medium max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                  <div className="flex-auto text-2xl leading-7 text-slate-800">Welcome Admin!</div>
                  <div className="flex gap-2 self-start mt-1.5 text-base leading-6 text-gray-500 whitespace-nowrap">
                    <div className="grow text-zinc-800">Home</div>
                    <div>/</div>
                    <div className="grow">Admin</div>
                  </div>
                </div>
                <div className="mx-8 mt-10 max-md:mr-2.5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-5 justify-between p-6 w-full whitespace-nowrap bg-white rounded-xl shadow-lg leading-[120%] max-md:px-5 max-md:mt-6">
                        <div className="flex flex-col my-auto">
                          <div className="text-sm text-gray-500">Students</div>
                          <div className="mt-3.5 text-2xl font-semibold text-black">50055</div>
                        </div>
                        <img loading="lazy" srcSet="..." className="aspect-square w-[60px]" />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-5 justify-between p-6 w-full whitespace-nowrap bg-white rounded-xl shadow-lg leading-[120%] max-md:px-5 max-md:mt-6">
                        <div className="flex flex-col my-auto">
                          <div className="text-sm text-gray-500">Awards</div>
                          <div className="mt-3.5 text-2xl font-semibold text-black">50+</div>
                        </div>
                        <img loading="lazy" srcSet="..." className="aspect-square w-[60px]" />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-5 justify-between p-6 w-full whitespace-nowrap bg-white rounded-xl shadow-lg leading-[120%] max-md:px-5 max-md:mt-6">
                        <div className="flex flex-col my-auto">
                          <div className="text-sm text-gray-500">Department</div>
                          <div className="mt-3 text-2xl font-semibold text-black">30+</div>
                        </div>
                        <img loading="lazy" srcSet="..." className="aspect-square w-[60px]" />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex grow gap-5 justify-between p-6 w-full whitespace-nowrap bg-white rounded-xl shadow-lg leading-[120%] max-md:px-5 max-md:mt-6">
                        <div className="flex flex-col my-auto">
                          <div className="text-sm text-gray-500">Revenue</div>
                          <div className="mt-3 text-2xl font-semibold text-black">$505</div>
                        </div>
                        <img loading="lazy" srcSet="..." className="aspect-square w-[60px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-8 mt-8 max-md:mr-2.5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow justify-center pb-12 w-full whitespace-nowrap bg-white rounded-2xl shadow-lg max-md:mt-6 max-md:max-w-full">
                        <div className="flex gap-5 justify-between px-4 py-3.5 w-full bg-white rounded-2xl max-md:flex-wrap max-md:max-w-full">
                          <div className="self-start mt-2.5 text-lg font-semibold leading-5 text-black">Overview</div>
                          <div className="flex gap-1.5 justify-between items-center text-xs leading-4 text-gray-500">
                            <div className="self-stretch my-auto bg-blue-600 h-[9px] rounded-[50px] w-[9px]" />
                            <div className="self-stretch my-auto">Teacher</div>
                            <div className="self-stretch my-auto bg-teal-300 h-[9px] rounded-[50px] w-[9px]" />
                            <div className="self-stretch my-auto">Student</div>
                            <div className="justify-center self-stretch px-2.5 py-2 text-sm font-black leading-4 text-black rounded-md aspect-[0.89] bg-zinc-100"></div>
                          </div>
                        </div>
                        <div className="flex flex-col pr-3 pb-6 pl-6 mt-7 text-xs text-right text-neutral-700 max-md:pl-5 max-md:max-w-full">
                          <div className="flex z-10 flex-col text-xs text-center max-md:max-w-full">
                            <img loading="lazy" srcSet="..." className="w-full aspect-[1.79] max-md:max-w-full" />
                            <div className="flex gap-5 justify-between mt-1 max-md:flex-wrap max-md:max-w-full">
                              <div>Jan</div>
                              <div>Feb</div>
                              <div>Mar</div>
                              <div>Apr</div>
                              <div>May</div>
                              <div>Jun</div>
                              <div>Jul</div>
                            </div>
                          </div>
                          <div className="mt-0 max-md:mt-0 max-md:max-w-full">80</div>
                          <div className="mt-14 max-md:mt-10 max-md:max-w-full">70</div>
                          <div className="mt-14 max-md:mt-10 max-md:max-w-full">60</div>
                          <div className="mt-14 max-md:mt-10 max-md:max-w-full">50</div>
                          <div className="mt-14 max-md:mt-10 max-md:max-w-full">40</div>
                          <div className="mt-14 max-md:mt-10 max-md:max-w-full">30</div>
                          <div className="mt-14 max-md:mt-10 max-md:max-w-full">20</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow justify-center pb-12 w-full bg-white rounded-2xl shadow-lg max-md:mt-6 max-md:max-w-full">
                        <div className="flex gap-5 justify-between px-4 py-3.5 w-full bg-white rounded-2xl max-md:flex-wrap max-md:max-w-full">
                          <div className="flex-auto self-start mt-2.5 text-lg font-semibold leading-5 text-black">Number of Students</div>
                          <div className="flex gap-1.5 justify-between items-center text-xs leading-4 text-gray-500 whitespace-nowrap">
                            <div className="self-stretch my-auto bg-blue-600 h-[9px] rounded-[50px] w-[9px]" />
                            <div className="self-stretch my-auto">Girls</div>
                            <div className="self-stretch my-auto bg-teal-300 h-[9px] rounded-[50px] w-[9px]" />
                            <div className="self-start mt-3.5">Boys</div>
                            <div className="justify-center self-stretch px-2.5 py-2 text-sm font-black leading-4 text-black rounded-md aspect-[0.89] bg-zinc-100"></div>
                          </div>
                        </div>
                        <div className="flex gap-2.5 justify-between pr-9 mt-8 text-xs text-right whitespace-nowrap text-neutral-700 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                          <div className="flex flex-col self-start basis-0 max-md:hidden">
                            <div>700</div>
                            <div className="mt-16 max-md:mt-10">600</div>
                            <div className="mt-16 max-md:mt-10">500</div>
                            <div className="mt-16 max-md:mt-10">400</div>
                            <div className="mt-16 max-md:mt-10">300</div>
                            <div className="mt-16 max-md:mt-10">200</div>
                          </div>
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddc745cab9c40671bfa504e497e0caa8d4b9d5446711c1964da11942a6ae3be7?" className="flex-1 w-full aspect-[1.69] max-md:max-w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-8 mt-8 max-md:mr-2.5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow justify-center pb-10 w-full bg-white rounded-2xl shadow-lg max-md:mt-6 max-md:max-w-full">
                        <div className="flex gap-5 justify-between px-4 py-3.5 text-black bg-white rounded-2xl max-md:flex-wrap max-md:max-w-full">
                          <div className="flex-auto my-auto text-lg font-semibold leading-5">Star Students</div>
                          <div className="justify-center px-2.5 py-2 text-sm font-black leading-4 whitespace-nowrap rounded-md aspect-[0.89] bg-zinc-100"></div>
                        </div>
                        <div className="flex gap-0 justify-between items-start mx-6 mt-6 text-base leading-6 whitespace-nowrap max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                          <div className="flex flex-col flex-1">
                            <div className="justify-center items-start py-5 pr-16 pl-3 font-semibold bg-gray-50 border-b border-solid border-b-slate-100 text-zinc-600 max-md:pr-5">ID</div>
                            <div className="self-start mt-5 ml-3 text-stone-500 max-md:ml-2.5">PRE2209</div>
                          </div>
                          <div className="flex flex-col flex-1 self-stretch">
                            <div className="justify-center items-start py-5 pr-16 pl-3 font-semibold bg-gray-50 border-b border-solid border-b-slate-100 text-zinc-600 max-md:pr-5">Name</div>
                            <div className="flex gap-2.5 self-start mt-3 ml-3 text-stone-500 max-md:ml-2.5">
                              <img loading="lazy" srcSet="..." className="aspect-square w-[25px]" />
                              <div className="grow my-auto">John Smith</div>
                            </div>
                          </div>
                          <div className="flex flex-col text-center basis-0">
                            <div className="justify-center px-8 py-5 font-semibold bg-gray-50 border-b border-solid border-b-slate-100 text-zinc-600 max-md:px-5">Marks</div>
                            <div className="self-center mt-5 text-stone-500">1185</div>
                          </div>
                          <div className="flex flex-col flex-1 text-center">
                            <div className="justify-center px-11 py-4 font-semibold bg-gray-50 border-b border-solid border-b-slate-100 text-zinc-600 max-md:px-5">Percentage</div>
                            <div className="self-center mt-5 text-stone-500">98%</div>
                          </div>
                          <div className="flex flex-col text-right basis-0">
                            <div className="justify-center py-5 pr-3 pl-12 font-semibold bg-gray-50 border-b border-solid border-b-slate-100 text-zinc-600 max-md:pl-5">Year</div>
                            <div className="self-end mt-5 mr-3 text-stone-500 max-md:mr-2.5">2019</div>
                          </div>
                        </div>
                        <div className="flex gap-5 justify-between px-3 py-2 mx-6 mt-3.5 max-w-full text-base leading-6 bg-neutral-50 text-stone-500 w-[739px] max-md:flex-wrap max-md:mr-2.5">
                          <div className="flex gap-5 justify-between my-auto">
                            <div>PRE1245</div>
                            <div>Jolie Hoskins</div>
                          </div>
                          <div className="flex gap-5 justify-between items-center text-center whitespace-nowrap">
                            <div className="self-stretch leading-6">1195</div>
                            <div className="self-stretch my-auto">99.5%</div>
                            <div className="self-stretch my-auto text-right">2018</div>
                          </div>
                        </div>
                        <div className="flex gap-5 justify-between items-center self-center mt-3.5 max-w-full text-base leading-6 whitespace-nowrap text-stone-500 w-[715px] max-md:flex-wrap">
                          <div className="self-stretch my-auto">PRE1625</div>
                          <div className="flex gap-2.5 justify-between self-stretch">
                            <img loading="lazy" srcSet="..." className="aspect-square w-[25px]" />
                            <div className="grow my-auto">Pennington Joy</div>
                          </div>
                          <div className="flex gap-5 justify-between self-stretch my-auto text-center">
                            <div>1196</div>
                            <div>99.6%</div>
                            <div className="text-right">2017</div>
                          </div>
                        </div>
                        <div className="flex gap-5 justify-between items-center px-3 py-3.5 mx-6 mt-3 max-w-full text-base leading-6 whitespace-nowrap bg-neutral-50 text-stone-500 w-[739px] max-md:flex-wrap max-md:mr-2.5">
                          <div className="self-stretch my-auto">PRE2516</div>
                          <div className="flex gap-2.5 justify-between self-stretch">
                            <img loading="lazy" srcSet="..." className="aspect-square w-[25px]" />
                            <div className="grow">Millie Marsden</div>
                          </div>
                          <div className="flex gap-5 justify-between self-stretch my-auto text-center">
                            <div>1187</div>
                            <div>98.2%</div>
                            <div className="text-right">2016</div>
                          </div>
                        </div>
                        <div className="flex gap-5 justify-between items-center self-center mt-3.5 max-w-full text-base leading-6 whitespace-nowrap text-stone-500 w-[715px] max-md:flex-wrap">
                          <div className="self-stretch my-auto">PRE2209</div>
                          <div className="flex gap-2.5 justify-between self-stretch">
                            <img loading="lazy" srcSet="..." className="aspect-square w-[25px]" />
                            <div className="grow">John Smith</div>
                          </div>
                          <div className="flex gap-5 justify-between self-stretch my-auto text-center">
                            <div>1185</div>
                            <div>98%</div>
                            <div className="text-right">2015</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow justify-center pb-12 w-full bg-white rounded-2xl shadow-lg max-md:mt-6 max-md:max-w-full">
                        <div className="flex gap-5 justify-between px-4 py-3.5 text-black bg-white rounded-2xl max-md:flex-wrap max-md:max-w-full">
                          <div className="flex-auto self-start mt-2 text-lg font-semibold leading-5">Student Activity</div>
                          <div className="justify-center px-2.5 py-2 text-sm font-black leading-4 whitespace-nowrap rounded-md aspect-[0.89] bg-zinc-100"></div>
                        </div>
                        <div className="flex gap-5 justify-between mx-6 mt-6 max-w-full w-[738px] max-md:flex-wrap max-md:mr-2.5">
                          <div className="flex gap-3 justify-between leading-[120%]">
                            <div className="w-10 h-10 bg-indigo-50 rounded-md" />
                            <div className="flex flex-col flex-1 my-auto">
                              <div className="text-sm font-medium text-slate-800">1st place in &quot;Chess”</div>
                              <div className="mt-3 text-xs text-gray-500 whitespace-nowrap">John Doe won 1st place in &quot;Chess&quot;</div>
                            </div>
                          </div>
                          <div className="justify-center px-2.5 py-2 my-auto text-xs leading-4 text-gray-500 whitespace-nowrap bg-orange-50 rounded-md aspect-[2.87]">1 Day ago</div>
                        </div>
                        <div className="flex gap-5 justify-between mx-6 mt-10 max-w-full w-[738px] max-md:flex-wrap max-md:mr-2.5">
                          <div className="flex flex-col leading-[120%]">
                            <div className="flex gap-3 justify-between">
                              <div className="w-10 h-10 bg-indigo-50 rounded-md" />
                              <div className="flex flex-col flex-1 my-auto">
                                <div className="text-sm font-medium text-slate-800">Participated in &quot;Carrom&quot;</div>
                                <div className="mt-3 text-xs text-gray-500">Justin Lee participated in &quot;Carrom&quot;</div>
                              </div>
                            </div>
                            <div className="flex gap-3 justify-between mt-10">
                              <div className="w-10 h-10 bg-indigo-50 rounded-md" />
                              <div className="flex flex-col flex-1 my-auto">
                                <div className="text-sm font-medium text-slate-800">Internation conference in &quot;St.John School&quot;</div>
                                <div className="mt-3.5 text-xs text-gray-500 whitespace-nowrap">Justin Leeattended internation conference in &quot;St.John School&quot;</div>
                              </div>
                            </div>
                            <div className="flex gap-3 justify-between mt-10">
                              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e30e9b1493e32e8381d94c6d7a8ebcad545a224b5dd092912a938a30df45c36?" className="w-10 aspect-square" />
                              <div className="flex flex-col flex-1 my-auto">
                                <div className="text-sm font-medium text-slate-800">Won 1st place in &quot;Chess&quot;</div>
                                <div className="mt-3 text-xs text-gray-500">John Doe won 1st place in &quot;Chess&quot;</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col my-auto text-xs leading-4 text-gray-500 whitespace-nowrap">
                            <div className="justify-center px-2.5 py-1.5 bg-orange-50 rounded-md">2 hours ago</div>
                            <div className="justify-center px-2.5 py-1.5 mt-14 bg-orange-50 rounded-md max-md:mt-10">2 Week ago</div>
                            <div className="justify-center self-start px-2.5 py-2 mt-14 ml-2.5 bg-orange-50 rounded-md aspect-[2.87] max-md:mt-10">3 Day ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-between mx-8 mt-8 text-white whitespace-nowrap max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full" />
              </div> */}
              <div className="flex flex-col">
                {/* <div className="px-5 w-full max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-6 py-6 mx-auto w-full bg-white rounded-lg shadow-md max-md:pl-5 max-md:mt-6">
                        <div className="flex gap-5 justify-between">
                          <img loading="lazy" srcSet={HOmefoto} className="aspect-square w-[42px]" />
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/83d18ff854c830221c99fde75d8ee6cd830dfe2fa3749d698d30ae3d45c024bf?" className="self-start w-6 aspect-square" />
                        </div>
                        <div className="mt-5 text-base tracking-normal leading-5 text-slate-700 text-opacity-60">Profit</div>
                        <div className="mt-3.5 text-2xl font-medium leading-8 text-slate-700 text-opacity-90">$12,628</div>
                        <div className="flex gap-1 justify-between mt-4 text-sm tracking-normal leading-5 text-lime-500 whitespace-nowrap">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82f38f08837ef888cde7f523f5cbb49eeed60e7e8269377853a70115afd89fde?" className="aspect-square w-[18px]" />
                          <div className="flex-auto my-auto">72.8%</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-6 py-6 mx-auto w-full bg-white rounded-lg shadow-md max-md:pl-5 max-md:mt-6">
                        <div className="flex gap-5 justify-between">
                          <img loading="lazy" srcSet="..." className="aspect-square w-[42px]" />
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a053adc861b0eb18bfa7d475cab9712337af9fed905bed577e2e19a90dfdea32?" className="self-start w-6 aspect-square" />
                        </div>
                        <div className="mt-5 text-base tracking-normal leading-5 text-slate-700 text-opacity-60">Payments</div>
                        <div className="mt-3 text-2xl font-medium leading-8 text-slate-700 text-opacity-90">$2,468</div>
                        <div className="flex gap-1 justify-between mt-4 text-sm tracking-normal leading-5 text-orange-600 whitespace-nowrap">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ee695b3f2e45c26c088eb10a1fcd5aad2382f60d0a39badfca3c15ec4c8ea2a?" className="aspect-square w-[18px]" />
                          <div className="flex-auto my-auto">-14.82%</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-6 py-6 mx-auto w-full bg-white rounded-lg shadow-md max-md:pl-5 max-md:mt-6">
                        <div className="flex gap-5 justify-between">
                          <img loading="lazy" srcSet="..." className="aspect-square w-[42px]" />
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d00d4d4c064bf3f9d401b5be9b7a334ee21712e869cce595b68d82af1c9b819?" className="self-start w-6 aspect-square" />
                        </div>
                        <div className="mt-5 text-base tracking-normal leading-5 text-slate-700 text-opacity-60">Transactions</div>
                        <div className="mt-3.5 text-2xl font-medium leading-8 text-slate-700 text-opacity-90">$14,857</div>
                        <div className="flex gap-1 justify-between mt-4 text-sm tracking-normal leading-5 text-lime-500 whitespace-nowrap">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e75cdd1d47190e7ae985d060912d4eab67a4986d037c87e7f3bc854c6426da7c?" className="aspect-square w-[18px]" />
                          <div className="flex-auto my-auto">28.14%</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-6 py-6 mx-auto w-full bg-white rounded-lg shadow-md max-md:pl-5 max-md:mt-6">
                        <div className="flex gap-5 justify-between">
                          <img loading="lazy" srcSet="..." className="aspect-square w-[42px]" />
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a8e15df15cc638a7cfa2b70058836369196d326df77fca2c200dcf073c1c005?" className="self-start w-6 aspect-square" />
                        </div>
                        <div className="mt-5 text-base tracking-normal leading-5 text-slate-700 text-opacity-60">Sales</div>
                        <div className="mt-3.5 text-2xl font-medium leading-8 text-slate-700 text-opacity-90">$4,679</div>
                        <div className="flex gap-1 justify-between mt-4 text-sm tracking-normal leading-5 text-lime-500 whitespace-nowrap">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b4f2a31230f53ff591a72f8e5c3073bd4697ac0497b2cf51b853ec8e84db820?" className="aspect-square w-[18px]" />
                          <div className="flex-auto my-auto">28.42%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="flex gap-5 justify-center py-6 w-full bg-white rounded-md shadow-md max-md:flex-wrap max-md:max-w-full">
                  <div className="flex-auto max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow justify-center items-center px-16 py-1 text-center border-r border-solid border-slate-200 text-slate-500 max-md:px-5">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/03edc3d7935e9dbc219cf3cab584323e97ad122cbbc8125773b196647c9af8a4?" className="w-16 border-2 border-blue-500 border-solid aspect-square" />
                          <div className="self-stretch mt-3.5 text-2xl font-medium leading-7">
                            0<span className=" text-slate-500"> New Learners</span>
                          </div>
                          <div className="mt-5 text-sm font-semibold leading-5">
                            4203 <span className=" text-slate-500">last month</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow justify-center items-center px-16 py-1 text-center border-r border-solid border-slate-200 text-slate-500 max-md:px-5">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/520f5e59cf2208b84aa6b19456c29708d4046533f026145ce30b8c7d3ecdb1e3?" className="w-16 border-2 border-sky-400 border-solid aspect-square" />
                          <div className="self-stretch mt-3.5 text-2xl font-medium leading-7">
                            0<span className=" text-slate-500"> New Trainers</span>
                          </div>
                          <div className="mt-5 text-sm font-semibold leading-5">
                            301 <span className=" text-slate-500">last month</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow justify-center items-center px-16 py-1 text-center border-r border-solid border-slate-200 text-slate-500 max-md:px-5">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a04466f30f5aabfa59765989e97bd36c7f53b9cc1664b7390f7a0c867a2e18cf?" className="w-16 border-2 border-emerald-500 border-solid aspect-square" />
                          <div className="self-stretch mt-3.5 text-2xl font-medium leading-7">
                            0<span className=" text-slate-500"> New Courses</span>
                          </div>
                          <div className="mt-5 text-sm font-semibold leading-5">
                            2779 <span className=" text-slate-500">last month</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col self-start px-5 text-center text-slate-500">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2610aff15b137984c5b2811740a15cb3a88e7650bf1308a425b55e5ac630af8?"
                      className="self-center w-16 border-2 border-orange-400 border-solid aspect-square"
                    />
                    <div className="mt-3.5 text-2xl font-medium leading-7">
                      0<span className=" text-slate-500"> Refunds</span>
                    </div>
                    <div className="mt-5 text-sm font-semibold leading-5">
                      1201 <span className=" text-slate-500">last month</span>
                    </div>
                  </div>
                </div>
                <div className="pr-6 mt-7 w-full bg-white rounded-lg shadow-md max-md:pr-5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow pt-8 pr-1.5 pb-5 pl-3.5 text-sm border-r border-solid border-r-slate-700 border-r-opacity-10 text-slate-700 text-opacity-40 max-md:mt-6 max-md:max-w-full">
                        <div className="flex gap-5 justify-between pr-7 text-xl font-medium tracking-normal leading-8 text-slate-700 text-opacity-90 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                          <div className="flex-auto my-auto">Total Revenue</div>
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7b308f1d28693fe4abba38948699d82022a5746a259453c5d40b9bae3691e6d?" className="w-6 aspect-square" />
                        </div>
                        <div className="flex gap-1.5 justify-between px-px mt-12 text-right whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                          <div className="flex flex-col self-start mt-1 basis-0 max-md:hidden">
                            <div>30</div>
                            <div className="mt-9">20</div>
                            <div className="mt-9">10</div>
                            <div className="self-start mt-9 ml-3.5 max-md:ml-2.5">0</div>
                            <div className="mt-9">-10</div>
                            <div className="mt-9">-20</div>
                          </div>
                          <img loading="lazy" srcSet="..." className="flex-1 w-full aspect-[2.63] max-md:max-w-full" />
                        </div>
                        <div className="flex gap-5 justify-between self-center mt-3 max-w-full text-center whitespace-nowrap w-[581px] max-md:flex-wrap">
                          <div>Jan</div>
                          <div>Feb</div>
                          <div>Mar</div>
                          <div>Apr</div>
                          <div>May</div>
                          <div>Jun</div>
                          <div>Jul</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col items-center self-stretch my-auto tracking-normal whitespace-nowrap max-md:mt-10">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b792279a77a75668488758b06d4350d64b4d0c2f183fdbb61fd8d47b9f85e3d9?" className="w-20 aspect-[2.63]" />
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0aef64f60a82da9479d55c569b63c3534cddf6a5954e2642f7eb1c92c7fb1ff?" className="self-stretch mt-6 w-full aspect-[1.79]" />
                        <div className="mt-1 text-base font-medium leading-5 text-center text-slate-700 text-opacity-90">62% Company Growth</div>
                        <div className="flex gap-5 justify-between mt-8">
                          <div className="flex gap-3 justify-between">
                            <div className="bg-indigo-500 rounded-md h-[38px] w-[38px]" />
                            <div className="flex flex-col flex-1 self-start">
                              <div className="text-sm leading-5 text-slate-700 text-opacity-60">2023</div>
                              <div className="mt-2.5 text-base font-medium leading-6 text-slate-700 text-opacity-90">$32.5k</div>
                            </div>
                          </div>
                          <div className="flex gap-3 justify-between">
                            <div className="bg-cyan-500 rounded-md h-[38px] w-[38px]" />
                            <div className="flex flex-col flex-1 self-start">
                              <div className="text-sm leading-5 text-slate-700 text-opacity-60">2022</div>
                              <div className="mt-2.5 text-base font-medium leading-6 text-slate-700 text-opacity-90">$41.2k</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="mt-6 w-full max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow px-6 py-6 w-full bg-white rounded-lg shadow-md max-md:px-5 max-md:mt-7 max-md:max-w-full">
                        <div className="max-md:max-w-full">
                          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                            <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
                              <div className="flex flex-col mt-1.5 font-medium tracking-normal text-slate-700 text-opacity-90 max-md:mt-10">
                                <div className="text-xl leading-8 whitespace-nowrap">Order Statistics</div>
                                <div className="mt-5 text-sm leading-5 whitespace-nowrap text-slate-700 text-opacity-60">42.82k Total Sales</div>
                                <div className="mt-12 text-4xl tracking-wide leading-10 max-md:mt-10">8,258</div>
                                <div className="mt-3 text-base leading-5 text-slate-700 text-opacity-60">Total Orders</div>
                              </div>
                            </div>
                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                              <div className="flex flex-col grow max-md:mt-10">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a396a494c91506b73652c243c13420910820743de2f2644cb4115774d5201614?" className="self-end w-6 aspect-square" />
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c0c31917f34c83ba97babbbd5f3e06051dec9f29584f9bd958812e62bbba1e2?"
                                  className="self-center mt-12 aspect-[0.97] w-[109px] max-md:mt-10"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="justify-center py-0.5 pr-1.5 mt-7 bg-white max-md:max-w-full">
                          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                            <div className="flex flex-col w-[90%] max-md:ml-0 max-md:w-full">
                              <div className="flex grow gap-4 justify-between max-md:mt-10">
                                <div className="flex flex-col basis-0">
                                  <div className="shrink-0 h-10 bg-indigo-500 rounded-md" />
                                  <div className="shrink-0 mt-6 h-10 bg-lime-500 rounded-md" />
                                  <div className="shrink-0 mt-6 h-10 bg-cyan-500 rounded-md" />
                                  <div className="shrink-0 mt-6 h-10 rounded-md bg-slate-400" />
                                </div>
                                <div className="flex flex-col flex-1 self-start text-base tracking-normal leading-6 whitespace-nowrap text-slate-700 text-opacity-90">
                                  <div>Electronic</div>
                                  <div className="mt-3.5 text-sm leading-4 text-slate-700 text-opacity-40">Mobile, Earbuds, TV</div>
                                  <div className="mt-7">Fashion</div>
                                  <div className="mt-3.5 text-sm leading-4 text-slate-700 text-opacity-40">Tshirt, Jeans, Shoes</div>
                                  <div className="mt-7">Decor</div>
                                  <div className="mt-3.5 text-sm leading-4 text-slate-700 text-opacity-40">Fine Art, Dining</div>
                                  <div className="mt-7">Sports</div>
                                  <div className="mt-2.5 text-sm leading-4 text-slate-700 text-opacity-40">Football, Cricket Kit</div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[10%] max-md:ml-0 max-md:w-full">
                              <div className="flex flex-col self-stretch my-auto text-base tracking-normal leading-5 whitespace-nowrap text-slate-700 text-opacity-90 max-md:mt-10">
                                <div>82.5k</div>
                                <div className="mt-14 max-md:mt-10">23.8k</div>
                                <div className="self-start mt-14 ml-3.5 max-md:mt-10 max-md:ml-2.5">849</div>
                                <div className="mt-14 max-md:mt-10">99</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col p-6 w-full bg-white rounded-lg shadow-md max-md:pl-5 max-md:mt-7 max-md:max-w-full">
                        <div className="flex gap-5 justify-between text-xl font-medium tracking-normal leading-8 whitespace-nowrap text-slate-700 text-opacity-90 max-md:flex-wrap max-md:max-w-full">
                          <div className="flex-auto">Transactions</div>
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ba5cab9f68a598166a13453c797d507a97cae570e4f496374a84c58d01c93af?" className="w-6 aspect-square" />
                        </div>
                        <div className="justify-center py-0.5 pr-1.5 mt-8 bg-white max-md:max-w-full">
                          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                            <div className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
                              <div className="flex flex-col grow max-md:mt-10">
                                <div className="flex gap-3 justify-between tracking-normal whitespace-nowrap">
                                  <div className="w-10 h-10 bg-orange-600 rounded-md" />
                                  <div className="flex flex-col flex-1 self-start">
                                    <div className="text-sm leading-4 text-slate-700 text-opacity-40">Paypal</div>
                                    <div className="mt-3 text-base leading-6 text-slate-700 text-opacity-90">Send money</div>
                                  </div>
                                </div>
                                <div className="flex gap-3 justify-between mt-8">
                                  <div className="flex flex-col flex-1">
                                    <div className="shrink-0 h-10 bg-indigo-500 rounded-md" />
                                    <div className="shrink-0 mt-7 h-10 bg-cyan-500 rounded-md" />
                                    <div className="shrink-0 mt-8 h-10 bg-lime-500 rounded-md" />
                                    <div className="shrink-0 mt-7 h-10 bg-indigo-500 rounded-md" />
                                    <div className="shrink-0 mt-8 h-10 bg-amber-500 rounded-md" />
                                  </div>
                                  <div className="flex flex-col flex-1 self-start text-sm tracking-normal leading-4 whitespace-nowrap text-slate-700 text-opacity-40">
                                    <div>Wallet</div>
                                    <div className="mt-3.5 text-base leading-6 text-slate-700 text-opacity-90">Mac'D</div>
                                    <div className="mt-9">Transfer</div>
                                    <div className="mt-3.5 text-base leading-6 text-slate-700 text-opacity-90">Refund</div>
                                    <div className="mt-9">Credit Card</div>
                                    <div className="mt-3 text-base leading-6 text-slate-700 text-opacity-90">Ordered Food</div>
                                    <div className="mt-9">Wallet</div>
                                    <div className="mt-3 text-base leading-6 text-slate-700 text-opacity-90">Starbucks</div>
                                    <div className="mt-9">Mastercard</div>
                                    <div className="mt-3.5 text-base leading-6 text-slate-700 text-opacity-90">Ordered Food</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
                              <div className="flex flex-col self-stretch my-auto text-base tracking-normal leading-5 whitespace-nowrap max-md:mt-10">
                                <div className="flex gap-1.5 self-start ml-5 max-md:ml-2.5">
                                  <div className="grow text-slate-700 text-opacity-90">+$82.6</div>
                                  <div className="grow text-slate-700 text-opacity-40">USD</div>
                                </div>
                                <div className="flex gap-1.5 justify-between mt-14 max-md:mt-10">
                                  <div className="grow text-slate-700 text-opacity-90">+$270.69</div>
                                  <div className="text-slate-700 text-opacity-40">USD</div>
                                </div>
                                <div className="flex gap-2 justify-between mt-14 max-md:mt-10 max-md:ml-1.5">
                                  <div className="grow text-slate-700 text-opacity-90">+$637.91</div>
                                  <div className="text-slate-700 text-opacity-40">USD</div>
                                </div>
                                <div className="flex gap-2 justify-between mt-14 max-md:mt-10 max-md:ml-1.5">
                                  <div className="grow text-slate-700 text-opacity-90">-$838.71</div>
                                  <div className="my-auto text-slate-700 text-opacity-40">USD</div>
                                </div>
                                <div className="flex gap-1.5 justify-between mt-14 max-md:mt-10">
                                  <div className="grow text-slate-700 text-opacity-90">+$203.33</div>
                                  <div className="text-slate-700 text-opacity-40">USD</div>
                                </div>
                                <div className="flex gap-1.5 self-start mt-14 ml-3.5 max-md:mt-10 max-md:ml-2.5">
                                  <div className="grow text-slate-700 text-opacity-90">-$92.45</div>
                                  <div className="grow text-slate-700 text-opacity-40">USD</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
