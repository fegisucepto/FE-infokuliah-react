import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline';

const stats = [
  { id: 1, name: 'Total Subscribers', stat: '71,897', icon: UsersIcon, change: '122', changeType: 'increase' },
  { id: 2, name: 'Avg. Open Rate', stat: '58.16%', icon: EnvelopeOpenIcon, change: '5.4%', changeType: 'increase' },
  { id: 3, name: 'Avg. Click Rate', stat: '24.57%', icon: CursorArrowRaysIcon, change: '3.2%', changeType: 'decrease' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

import { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, CalendarIcon, ChartPieIcon, Cog6ToothIcon, DocumentDuplicateIcon, FolderIcon, HomeIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: HomeIcon, current: true },
  { name: 'User', href: '/admin/user', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Alumni', href: '#', icon: CalendarIcon, current: false },
  { name: 'Beasiswa', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Artikel', href: '#', icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
];
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a href={team.href} className={classNames(team.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold')}>
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">{team.initial}</span>
                                  <span className="truncate">{team.name}</span>
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
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a href={team.href} className={classNames(team.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold')}>
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">{team.initial}</span>
                          <span className="truncate">{team.name}</span>
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
                      <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                        Tom Cook
                      </span>
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
                            <a href={item.href} className={classNames(active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900')}>
                              {item.name}
                            </a>
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
          <div className="flex flex-col items-start px-5">
      <div className="self-stretch w-full text-xl font-bold leading-7 text-slate-500 max-md:max-w-full">
        CMS
      </div>
      <div className="self-stretch mt-7 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-8 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="grow justify-center p-6 w-full bg-white rounded-lg shadow-md max-md:px-5 max-md:mt-8 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                            <div className="text-base leading-6 whitespace-nowrap text-zinc-500">
                              Total view
                            </div>
                            <div className="flex gap-2 justify-between mt-4 text-lg font-bold leading-7 text-slate-500">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c74a61f6fd1352250e4a5887343ab709c1d0e41aedd815dc296bd225974f6e07?"
                                className="w-4 aspect-square"
                              />
                              <div className="grow"> 143.210</div>
                            </div>
                            <div className="flex gap-0 justify-between mt-3.5 text-sm leading-5 text-green-500">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9121d52f0654cca1e4868b92dc09771bb06d365f51febc2c9e253f14a5bc758e?"
                                className="w-4 aspect-square"
                              />
                              <div className="grow my-auto"> 46.2%</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                          <img
                            loading="lazy"
                            srcSet="..."
                            className="grow w-full aspect-[2] max-md:mt-10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="grow justify-center px-6 py-6 w-full bg-white rounded-lg shadow-md max-md:px-5 max-md:mt-8 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                            <div className="text-base leading-6 whitespace-nowrap text-zinc-500">
                              Total likes
                            </div>
                            <div className="flex gap-2 justify-between mt-4 text-lg font-bold leading-7 text-slate-500">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/69ff8c7a012f72bd83cfab30a7509d297ee4585c9812d7245962f9e0f6deec66?"
                                className="w-4 aspect-square"
                              />
                              <div className="grow"> 24.310</div>
                            </div>
                            <div className="flex gap-0 justify-between mt-3.5 text-sm leading-5 text-green-500">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ba63dca3ceebb8fa0dca4f7ba47cd6c65138997bc177df2fa12c679b1c86a73?"
                                className="w-4 aspect-square"
                              />
                              <div className="grow my-auto"> 16.2%</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                          <img
                            loading="lazy"
                            srcSet="..."
                            className="grow w-full aspect-[2] max-md:mt-10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="grow justify-center p-6 w-full bg-white rounded-lg shadow-md max-md:px-5 max-md:mt-8 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                            <div className="text-base leading-6 whitespace-nowrap text-zinc-500">
                              Total Comments
                            </div>
                            <div className="flex gap-2 justify-between mt-4 text-lg font-bold leading-7 text-slate-500">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e5520283eb2651eb0a10892231fc89cacb1a026f9ce0f8a6e5209b2f884db8a?"
                                className="w-4 aspect-square"
                              />
                              <div className="grow"> 54.350</div>
                            </div>
                            <div className="flex gap-0 justify-between mt-3.5 text-sm leading-5 text-green-500">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9121d52f0654cca1e4868b92dc09771bb06d365f51febc2c9e253f14a5bc758e?"
                                className="w-4 aspect-square"
                              />
                              <div className="flex-auto my-auto"> 11.2%</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                          <img
                            loading="lazy"
                            srcSet="..."
                            className="grow w-full aspect-[2] max-md:mt-10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="grow justify-center px-6 py-6 w-full bg-white rounded-lg shadow-md max-md:px-5 max-md:mt-8 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                            <div className="text-base leading-6 whitespace-nowrap text-zinc-500">
                              Total Share
                            </div>
                            <div className="flex gap-2 justify-between mt-4 text-lg font-bold leading-7 text-slate-500">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/333c13a5a50b6cfaa9bddda749302c8b62b7117fed0d4bb21fdec6fd9f5bb2db?"
                                className="w-4 aspect-square"
                              />
                              <div className="grow"> 9.110</div>
                            </div>
                            <div className="flex gap-0 justify-between mt-3.5 text-sm leading-5 text-pink-500">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5968d780d388efd44c7b039ced9b6e9ff4ae0a35448289f59d593e3f6870a57f?"
                                className="w-4 aspect-square"
                              />
                              <div className="grow my-auto"> 6.2%</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                          <img
                            loading="lazy"
                            srcSet="..."
                            className="grow w-full aspect-[2] max-md:mt-10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                loading="lazy"
                srcSet="..."
                className="mt-6 w-full rounded-lg shadow-md aspect-[1.75] max-md:max-w-full"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-6 pt-6 pb-10 w-full bg-white rounded-lg shadow-md max-md:px-5 max-md:mt-8 max-md:max-w-full">
              <div className="flex gap-5 justify-between w-full text-base text-center text-violet-50 max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-2 justify-between px-4 py-3.5 whitespace-nowrap bg-indigo-500 rounded border border-indigo-500 border-solid">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/27cd9de607a13c381b244217220fcc1881e35c26a48debaf276b371f48fbd20d?"
                    className="self-start w-3 aspect-square"
                  />
                  <div className="grow">Add Post</div>
                </div>
                <div className="flex gap-3.5 justify-between px-4 py-3 bg-pink-500 rounded border border-pink-500 border-solid">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddc8af7aea480ca7b462cdb95d97122077cc863d9b0302d92b965c51cad4b441?"
                    className="self-start w-3 aspect-square"
                  />
                  <div> Pages</div>
                </div>
              </div>
              <div className="flex gap-5 justify-between px-4 py-5 mt-6 w-full bg-violet-50 border-b border-solid border-b-indigo-50 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="text-sm font-bold leading-5 text-zinc-500">
                  Title
                </div>
                <div className="flex gap-5 justify-between self-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9842445d768b5aa049371c304bafef805160d15cf53bb76eb3496d338dadd206?"
                    className="w-4 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/683aca553055d28010b98ae7ca9f6caf38fc6e925d9882068de646e428cb2cbc?"
                    className="w-4 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3b7986a506b567b20b9fa7662ebd10a2f6cdbe3e3ac49287b044cdf3d909780?"
                    className="w-4 aspect-square"
                  />
                </div>
              </div>
              <div className="flex gap-5 justify-between px-3.5 py-0.5 w-full text-sm border-b border-solid border-b-indigo-50 text-zinc-500 max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto my-auto leading-[143%]">
                  How to get started with Tailwind Css ?
                </div>
                <div className="flex gap-5 justify-between leading-5 whitespace-nowrap">
                  <div>934</div>
                  <div>136</div>
                  <div className="my-auto leading-[143%]">121</div>
                </div>
              </div>
              <div className="flex gap-5 justify-between px-4 py-0.5 w-full text-sm border-b border-solid border-b-indigo-50 text-zinc-500 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex-auto my-auto leading-[143%]">
                  Best Html admin template for Tailwind
                </div>
                <div className="flex gap-5 justify-between leading-5 whitespace-nowrap">
                  <div>789</div>
                  <div>132</div>
                  <div className="my-auto leading-[143%]">98</div>
                </div>
              </div>
              <div className="flex gap-5 justify-between px-4 py-0.5 w-full text-sm border-b border-solid border-b-indigo-50 text-zinc-500 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex-auto my-auto leading-[143%]">
                  Introducing Tailwind UI/UX Ecommerce
                </div>
                <div className="flex gap-5 justify-between items-center leading-5 whitespace-nowrap">
                  <div className="self-stretch">629</div>
                  <div className="self-stretch my-auto">92</div>
                  <div className="self-stretch my-auto leading-[143%]">87</div>
                </div>
              </div>
              <div className="flex gap-5 justify-between px-4 py-0.5 w-full text-sm border-b border-solid border-b-indigo-50 text-zinc-500 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex-auto my-auto leading-[143%]">
                  The Next Generation of Tailwind CSS
                </div>
                <div className="flex gap-5 justify-between items-center leading-5 whitespace-nowrap">
                  <div className="self-stretch">609</div>
                  <div className="self-stretch my-auto">82</div>
                  <div className="self-stretch my-auto leading-[143%]">83</div>
                </div>
              </div>
              <div className="flex gap-5 justify-between p-3 text-sm leading-5 border-b border-solid border-b-indigo-50 text-zinc-500 max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto self-start mt-3.5">
                  W3C TPAC 2021 Exhibition Space opens for
                  <br />
                  registration
                </div>
                <div>600</div>
                <div className="my-auto">90</div>
                <div className="my-auto leading-[143%]">72</div>
              </div>
              <div className="flex gap-5 justify-between items-center p-3 text-sm leading-5 border-b border-solid border-b-indigo-50 text-zinc-500 max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto self-stretch my-auto">
                  Minecraft Wild Update's Deep Cities Turn It
                  <br />
                  Into A Horror Game
                </div>{" "}
                <div className="self-stretch">529</div>{" "}
                <div className="self-stretch my-auto">72</div>{" "}
                <div className="self-stretch my-auto leading-[143%]">81</div>
              </div>{" "}
              <div className="flex gap-5 justify-between px-4 py-0.5 w-full text-sm border-b border-solid border-b-indigo-50 text-zinc-500 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex-auto my-auto leading-[143%]">
                  How Long Is A Day On Mars
                </div>{" "}
                <div className="flex gap-5 justify-between items-center leading-5 whitespace-nowrap">
                  <div className="self-stretch">509</div>{" "}
                  <div className="self-stretch my-auto">62</div>{" "}
                  <div className="self-stretch my-auto leading-[143%]">77</div>
                </div>
              </div>{" "}
              <div className="flex gap-5 justify-between px-4 py-0.5 w-full text-sm border-b border-solid border-b-indigo-50 text-zinc-500 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex-auto my-auto leading-[143%]">
                  Why The Moon Sequel Isn't Happening
                </div>
                <div className="flex gap-5 justify-between items-center leading-5 whitespace-nowrap">
                  <div className="self-stretch">500</div>
                  <div className="self-stretch my-auto">52</div>
                  <div className="self-stretch my-auto leading-[143%]">57</div>
                </div>
              </div>
              <div className="flex gap-5 justify-between px-4 py-0.5 w-full text-sm border-b border-solid border-b-indigo-50 text-zinc-500 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex-auto my-auto leading-[143%]">
                  How Far Away Is It From The Sun?
                </div>
                <div className="flex gap-5 justify-between items-center leading-5 whitespace-nowrap">
                  <div className="self-stretch">489</div>
                  <div className="self-stretch my-auto">62</div>
                  <div className="self-stretch my-auto leading-[143%]">66</div>
                </div>
              </div>
              <div className="flex gap-5 justify-between self-center mt-5 text-sm leading-5 whitespace-nowrap text-zinc-500 max-md:flex-wrap max-md:max-w-full">
                <div className="grow">
                  Mars is a cold planet filled with rocks & sand
                </div>
                <div>489</div>
                <div>62</div>
                <div>57</div>
              </div>
              <div className="flex gap-5 justify-between pr-5 mt-9 w-full text-base leading-6 text-slate-500 max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto self-start">
                  Showing 1 to 10 of 12 entries
                </div>
                <div className="flex gap-5 justify-between items-center whitespace-nowrap">
                  <div className="justify-center items-center self-stretch px-4 bg-gray-200 rounded aspect-[1.05] h-[43px]">
                    1
                  </div>
                  <div className="self-stretch my-auto">2</div>
                  <div className="self-stretch my-auto font-bold">›</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 max-w-full w-[1067px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 pt-8 pb-12 w-full text-sm leading-5 bg-white rounded-lg shadow-md text-slate-500 max-md:px-5 max-md:mt-8 max-md:max-w-full">
              <div className="text-base font-bold leading-6 max-md:max-w-full">
                Most search
              </div>
              <div className="flex gap-3 justify-between mt-8 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <div className="grow justify-center px-3.5 py-3 bg-violet-50 border border-indigo-50 border-solid">
                  Tailwind Css
                </div>
                <div className="grow justify-center px-3.5 py-3 bg-violet-50 border border-indigo-50 border-solid">
                  Taildash
                </div>
                <div className="justify-center px-3.5 py-3 bg-violet-50 border border-indigo-50 border-solid aspect-[1.09]">
                  Js
                </div>
                <div className="justify-center px-3.5 py-3 bg-violet-50 border border-indigo-50 border-solid aspect-[1.56]">
                  CSS
                </div>
                <div className="justify-center px-3.5 py-3 bg-violet-50 border border-indigo-50 border-solid aspect-[1.91]">
                  HTML
                </div>
                <div className="justify-center px-3.5 py-3 bg-violet-50 border border-indigo-50 border-solid aspect-[1.85]">
                  UI UX
                </div>
              </div>
              <div className="flex gap-3 self-start mt-3 whitespace-nowrap">
                <div className="grow justify-center px-3.5 py-3 bg-violet-50 border border-indigo-50 border-solid">
                  Web Design
                </div>
                <div className="grow justify-center px-3.5 py-3 bg-violet-50 border border-indigo-50 border-solid">
                  Alpine js
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center px-6 py-7 w-full text-base bg-white rounded-lg shadow-md max-md:px-5 max-md:mt-8 max-md:max-w-full">
              <div className="font-bold leading-[150%] text-slate-500 max-md:max-w-full">
                Visitor by Country
              </div>
              <div className="flex overflow-hidden relative flex-col justify-center items-start pt-2.5 pr-20 pb-12 pl-2.5 mt-7 text-white whitespace-nowrap leading-[62.5%] min-h-[160px] max-md:pr-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2e70ebc4cdf428a9db39f8d245107810f2d73b181adf06c2d274ecea32bde1b?"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative justify-center items-center px-1 rounded aspect-square bg-zinc-800 h-[15px]">
                  +
                </div>
                <div className="relative justify-center items-center px-1 mt-1.5 mb-11 rounded aspect-square bg-zinc-800 h-[15px] max-md:mb-10">
                  −
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 max-w-full w-[1067px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start py-7 pr-20 pl-6 w-full bg-white rounded-lg shadow-md max-md:px-5 max-md:mt-8 max-md:max-w-full">
              <div className="text-base font-bold leading-6 text-slate-500">
                New Followers
              </div>
              <div className="flex gap-2 mt-8 text-sm font-semibold leading-5 whitespace-nowrap text-zinc-500">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="max-w-full rounded-full border-2 border-indigo-50 border-solid shadow-lg aspect-[4] w-[193px]"
                />
                <div className="grow my-auto">+232 more</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-3 items-end px-6 py-9 w-full whitespace-nowrap bg-white rounded-lg shadow-md max-md:flex-wrap max-md:px-5 max-md:mt-8 max-md:max-w-full">
              <div className="flex flex-col flex-1 self-stretch">
                <div className="text-base font-bold leading-6 text-slate-500">
                  Statistics
                </div>
                <div className="flex gap-3 justify-between mt-8 text-sm leading-5">
                  <div className="justify-center px-2 py-2.5 text-indigo-500 bg-indigo-100 rounded-full aspect-[1.89]">
                    3.122
                  </div>
                  <div className="my-auto text-slate-500">Articles</div>
                </div>
              </div>
              <div className="justify-center px-2.5 py-2.5 mt-11 text-sm leading-5 text-indigo-500 bg-indigo-100 rounded-full aspect-[1.5] max-md:mt-10">
                654
              </div>
              <div className="mt-14 text-sm leading-5 text-slate-500 max-md:mt-10">
                Tags
              </div>
              <div className="justify-center px-2.5 py-2.5 mt-11 text-sm leading-5 text-indigo-500 bg-indigo-100 rounded-full aspect-[1.46] max-md:mt-10">
                142
              </div>
              <div className="mt-14 text-sm leading-5 text-slate-500 max-md:mt-10">
                Categories
              </div>
              <div className="justify-center px-2.5 py-2.5 mt-11 text-sm leading-5 text-indigo-500 bg-indigo-100 rounded-full aspect-[1.18] max-md:mt-10">
                32
              </div>
              <div className="mt-14 text-sm leading-5 text-slate-500 max-md:mt-10">
                Pages
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 max-w-full w-[1067px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 pb-3 w-full text-base leading-6 bg-white rounded-lg shadow-md text-slate-500 max-md:px-5 max-md:mt-8 max-md:max-w-full">
              <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 min-h-[457px] max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col mt-52 mb-1.5 max-w-full w-[231px] max-md:mt-10">
                  <div className="self-center">80%</div>
                  <div className="flex gap-2.5 justify-between mt-32 text-center max-md:mt-10">
                    <div className="grow">Articles:</div>
                    <div className="w-3 h-3 bg-indigo-500 rounded-full" />
                    <div> Published</div>
                    <div className="w-3 h-3 bg-pink-500 rounded-full" />
                    <div> Draft</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 pb-3 w-full text-base leading-6 bg-white rounded-lg shadow-md text-slate-500 max-md:px-5 max-md:mt-8 max-md:max-w-full">
              <div className="flex overflow-hidden relative flex-col items-center px-14 pt-12 pb-7 w-full min-h-[457px] max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="relative mt-52 max-md:mt-10">85/100</div>
                <div className="flex relative gap-2.5 justify-between self-stretch mt-32 text-center max-md:mt-10">
                  <div className="self-start w-3 h-3 bg-pink-500 rounded-full" />
                  <div> Bad (0 - 60)</div>
                  <div className="self-start w-3 h-3 bg-yellow-500 rounded-full" />
                  <div> Medium (60+)</div>
                  <div className="self-start w-3 h-3 bg-green-500 rounded-full" />
                  <div className="grow whitespace-nowrap"> Good (80+)</div>
                </div>
                <div className="flex relative gap-2.5 mt-2.5 text-center whitespace-nowrap">
                  <div className="self-start w-3 h-3 bg-indigo-500 rounded-full" />
                  <div className="grow"> Excelent (90+)</div>
                </div>
              </div>
            </div>
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
