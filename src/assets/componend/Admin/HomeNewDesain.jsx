// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import { UsersIcon } from '@heroicons/react/24/outline';

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

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: HomeIcon, current: true },
  { name: 'User', href: 'admin/user', icon: UsersIcon, current: false },
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
  { name: 'Your profile', href: '/profil/${id}' },
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
              <div className="flex flex-col justify-center mt-4 w-full bg-white rounded-md shadow-md max-md:max-w-full">
                <div className="flex gap-5 justify-between items-center px-5 max-w-full font-medium w-[585px] max-md:flex-wrap">
                  <div className="flex flex-col self-stretch px-6 py-6 bg-white rounded border-b-2 border-blue-500 border-solid max-md:px-5">
                    <div className="flex gap-3.5 text-xs leading-3 text-slate-500">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/136065258102c50adb7dabd34a68c09f4d78482a4746315a8bc6bcca22f8b333?" className="shrink-0 self-start w-3.5 aspect-[1.27]" />
                      <div>Most Popular</div>
                    </div>
                    <div className="flex gap-3 text-xl leading-5 text-gray-700 whitespace-nowrap">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/695911fdbc9be80db568bd31ee626efb9267cbc715accecc0d9e9f789f2f8791?" className="shrink-0 aspect-[0.74] w-[17px]" />
                      <div className="my-auto">Paid</div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start self-stretch my-auto">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/26b7e4acf34e562086479d36801d2d911ca0ecace59e8d30845dd5da4353fde5?" className="shrink-0 mt-3 aspect-[0.78] w-[18px]" />
                    <div className="flex flex-col">
                      <div className="text-xs leading-3 text-slate-500">Most Popular</div>
                      <div className="mt-1.5 text-xl leading-5 text-gray-700">Free</div>
                    </div>
                  </div>
                  <div className="flex gap-5 self-stretch my-auto">
                    <div className="flex flex-col flex-1">
                      <div className="flex gap-5 text-xs leading-3 text-slate-500">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c47d230c0c4d2dbb641c757ea0dceb610fc5b4dfd5a39a575b2d899d5646b9c?" className="shrink-0 self-start aspect-[1.18] w-[13px]" />
                        <div>Top Rated</div>
                      </div>
                      <div className="flex gap-3 text-xl leading-5 text-gray-700 whitespace-nowrap">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1ef3fd5ba8e8d14ba0e6dc8e401cd4dc70bf6071e3f320b155f7f1d1388329c?" className="shrink-0 aspect-[1.09] w-[25px]" />
                        <div className="my-auto">Paid</div>
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 self-start">
                      <div className="self-end text-xs leading-3 text-slate-500">Top Rated</div>
                      <div className="flex gap-3 text-xl leading-5 text-gray-700 whitespace-nowrap">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/96a3bd52403ca0d914e4000e400ac36e9e1c367f13ea90e6cab5e5d1f15605ae?" className="shrink-0 aspect-[1.14] w-[26px]" />
                        <div className="my-auto">Free</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-0 justify-center px-5 w-full text-sm font-medium leading-5 text-gray-700 bg-slate-100 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex gap-1.5 items-start py-3.5 pr-20 pl-5 border-b border-solid border-slate-100 max-md:flex-wrap max-md:pr-5">
                    <div className="my-auto">Course Title</div>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f228eb266956e120e74cd4413df33c57f2e240d63c8579434042d5363e3bdca?" className="shrink-0 self-start aspect-[0.37] w-[7px]" />
                  </div>
                  <div className="flex gap-1.5 items-start py-3.5 pr-20 pl-3 whitespace-nowrap border-b border-solid border-slate-100 max-md:pr-5">
                    <div className="my-auto">Trainer</div>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3feac6f938996cd0e0afcf00e79ab0b4c4f5a87a88e4cb8cb0e469fc1824469f?" className="shrink-0 self-start aspect-[0.37] w-[7px]" />
                  </div>
                  <div className="flex gap-1 justify-end items-start py-3.5 pr-3 pl-14 text-right border-b border-solid border-slate-100 max-md:pl-5">
                    <div className="grow my-auto">Published on</div>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/abaee57b1b9b1a291528ede3de5dc661933bdfb05aafa8243b4343bfb9363d95?" className="shrink-0 self-start aspect-[0.37] w-[7px]" />
                  </div>
                  <div className="flex gap-1 justify-end items-start py-3.5 pr-3 pl-11 text-right whitespace-nowrap border-b border-solid border-slate-100 max-md:pl-5">
                    <div className="my-auto">Enrolled</div>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc999d020337a727fd07fe0112f9f7a94e98f9cea3891797d90e3aab3ed2fddd?" className="shrink-0 self-start aspect-[0.37] w-[7px]" />
                  </div>
                  <div className="flex gap-1 justify-end items-start py-3.5 pr-3 pl-9 text-right whitespace-nowrap border-b border-solid border-slate-100 max-md:pl-5">
                    <div className="my-auto">Price</div>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccccf8b0f37853aed919bc8046c9477dc059b862e9543a8718916cc9ba2e8fef?" className="shrink-0 self-start aspect-[0.37] w-[7px]" />
                  </div>
                  <div className="shrink-0 border-b border-solid border-slate-100 h-[45px] w-[93px]" />
                </div>
                <div className="flex gap-0 px-5 w-full text-sm font-semibold leading-5 text-slate-500 max-md:flex-wrap max-md:max-w-full">
                  <div className="justify-center items-start px-5 py-5 text-blue-500 border-b border-solid border-slate-100 max-md:max-w-full">Advanced Design Tools for Modern Designs</div>
                  <div className="justify-center items-start px-3 py-5 border-b border-solid border-slate-100 text-slate-600 max-md:pr-5">Bill finger</div>
                  <div className="justify-center items-end px-16 py-6 text-right whitespace-nowrap border-b border-solid border-slate-100 max-md:pl-5">01/10/21</div>
                  <div className="justify-center items-start px-16 py-6 text-right whitespace-nowrap border-b border-solid border-slate-100 max-md:pl-7">47,726</div>
                  <div className="justify-center items-start px-10 py-6 text-right whitespace-nowrap border-b border-solid border-slate-100 max-md:pl-5">$39.99</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b70a9c6453622d6fd46b45166f3fedc6f93b68578a25b97bed45b31efb369fe?"
                    className="shrink-0 border-b border-solid aspect-[1.72] border-slate-100 w-[93px]"
                  />
                </div>
                <div className="flex gap-0 px-5 w-full text-sm font-semibold leading-5 text-slate-500 max-md:flex-wrap max-md:max-w-full">
                  <div className="justify-center items-start px-5 py-5 text-blue-500 border-b border-solid border-slate-100 max-md:max-w-full">Photograpy Basics: Get Familiar Standing Behind Lens</div>
                  <div className="justify-center items-start px-3 py-6 border-b border-solid border-slate-100 text-slate-600 max-md:pr-5">Bruce Timm</div>
                  <div className="justify-center items-end px-16 py-6 text-right whitespace-nowrap border-b border-solid border-slate-100 max-md:pl-5">11/12/21</div>
                  <div className="justify-center items-start px-16 py-6 text-right whitespace-nowrap border-b border-solid border-slate-100 max-md:pl-7">38,541</div>
                  <div className="justify-center items-start px-10 py-6 text-right whitespace-nowrap border-b border-solid border-slate-100 max-md:pl-5">$19.99</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9754385e9c3b0962fbfd1bb871e43204b71ce60c2812c0c486dc111adb578853?"
                    className="shrink-0 border-b border-solid aspect-[1.72] border-slate-100 w-[93px]"
                  />
                </div>
                <div className="flex gap-0 w-full text-sm font-semibold leading-5 text-slate-500 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                  <div className="justify-center items-start px-5 py-5 text-blue-500 border-b border-solid border-slate-100 max-md:max-w-full">Abstract Painting: Zero to Mastery in Traditional Medium</div>
                  <div className="justify-center items-start px-3 py-5 border-b border-solid border-slate-100 text-slate-600 max-md:pr-5">J. H. Williams III</div>
                  <div className="justify-center items-end px-16 py-6 text-right whitespace-nowrap border-b border-solid border-slate-100 max-md:pl-5">03/09/21</div>
                  <div className="justify-center items-start px-16 py-6 text-right whitespace-nowrap border-b border-solid border-slate-100 max-md:pl-7">35,666</div>
                  <div className="justify-center items-start px-10 py-6 text-right whitespace-nowrap border-b border-solid border-slate-100 max-md:pl-5">$45.49</div>
                </div>
                <div className="flex gap-0 rounded-none bg-slate-50 max-md:flex-wrap">
                  <div className="flex flex-auto gap-0 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col self-end mt-6 text-sm font-semibold leading-5 text-slate-500 max-md:max-w-full">
                      <div className="flex gap-0 max-md:flex-wrap max-md:max-w-full">
                        <div className="justify-center items-start px-5 py-5 text-blue-500 border-b border-solid border-slate-100 max-md:max-w-full">Character Design Masterclass: Your First Supervillain</div>
                        <div className="justify-center items-start px-3 py-5 border-b border-solid border-slate-100 text-slate-600 max-md:pr-5">Bill finger</div>
                        <div className="justify-center items-end px-16 py-6 text-right whitespace-nowrap border-b border-solid border-slate-100 max-md:pl-5">31/12/21</div>
                        <div className="justify-center items-start px-16 py-6 text-right whitespace-nowrap border-b border-solid border-slate-100 max-md:pl-7">29,988</div>
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5aa232883517cbde8c86761f803f858f3b84262241b9f1a72fbbce4b51825a29?"
                        className="mt-2 ml-5 max-w-full border border-solid shadow-sm aspect-[5] border-slate-200 w-[148px] max-md:ml-2.5"
                      />
                    </div>
                    <div className="shrink-0 my-auto border-b border-solid border-slate-100 h-[54px] w-[90px]" />
                    <div className="text-sm font-medium leading-5 text-center text-blue-500">All Courses</div>
                  </div>
                  <div className="flex flex-col my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/43fef31d3b6f64eb17ac4a397b1532ffb533de8c84300beb4919185a8f48041f?"
                      className="self-center border-b border-solid aspect-[1.72] border-slate-100 w-[93px]"
                    />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cb29322673d4c20067d6394ae245efe044315c85f94408679c2bf6a1184a880?" className="self-end mt-4 mr-5 aspect-[0.58] w-[7px] max-md:mr-2.5" />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
