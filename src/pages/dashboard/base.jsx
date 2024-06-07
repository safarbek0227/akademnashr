import { useState, useEffect } from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import "../../css/dashboard.css";

export default function Base(params) {
  return (
    <>
      <div className="antialiased bg-gray-100  ">
        <nav className="bg-white border-b border-gray-200 px-4 py-2.5   fixed left-0 right-0 top-0 z-50">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex justify-start items-center">
              <button
                data-drawer-target="drawer-navigation"
                data-drawer-toggle="drawer-navigation"
                aria-controls="drawer-navigation"
                className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400    "
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Toggle sidebar</span>
              </button>
              <a href="/" className="flex items-center justify-between mr-4">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Library management sytem
                </span>
              </a>
            </div>
            <div className="flex items-center lg:order-2 mr-2">
              <button
                type="button"
                data-drawer-toggle="drawer-navigation"
                aria-controls="drawer-navigation"
                className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400     focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Toggle search</span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                data-dropdown-toggle="notification-dropdown"
                className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400     focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <span className="sr-only">View notifications</span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                </svg>
              </button>
              <button
                type="button"
                data-dropdown-toggle="notification-dropdown"
                className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400     focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <i class="fa-solid fa-envelope text-lg"></i>
              </button>

              <button
                type="button"
                className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="dropdown"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                  alt="user photo"
                />
              </button>
            </div>
          </div>
        </nav>

        <aside
          className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0  "
          aria-label="Sidenav"
          id="drawer-navigation"
        >
          <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
            <ul className="space-y-2 mt-6">
              <li>
                <NavLink
                  to="/dashboard/"
                  end
                  // className={`${({isActive}) => (isActive ? "active" : 'none')} block py-2 px-3 text-dark rounded  md:p-0 `}
                  className={({ isActive }) =>
                    (isActive ? "active-sidebar bg-gray-100 " : "none ") +
                    `flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100  group`
                  }
                >
                  <i class="fa-solid fa-list text-2xl"></i>
                  <span className="ml-3 text-xl">Overview</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/requests/"
                  end
                  // className={`${({isActive}) => (isActive ? "active" : 'none')} block py-2 px-3 text-dark rounded  md:p-0 `}
                  className={({ isActive }) =>
                    (isActive ? "active-sidebar bg-gray-100 " : "none ") +
                    `flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100  group`
                  }
                >
                  <i className="fa-sharp fa-regular fa-grid-2 text-2xl"></i>
                  <span className="ml-3 text-xl">So'rovlar</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/rentbooks/"
                  end
                  // className={`${({isActive}) => (isActive ? "active" : 'none')} block py-2 px-3 text-dark rounded  md:p-0 `}
                  className={({ isActive }) =>
                    (isActive ? "active-sidebar bg-gray-100 " : "none ") +
                    `flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100  group`
                  }
                >
                  <i class="fa-regular fa-solid fa-file-pen text-2xl"></i>
                  <span className="ml-3 text-md">Ijaraga olingan kitoblar</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/books/"
                  end
                  // className={`${({isActive}) => (isActive ? "active" : 'none')} block py-2 px-3 text-dark rounded  md:p-0 `}
                  className={({ isActive }) =>
                    (isActive ? "active-sidebar bg-gray-100 " : "none ") +
                    `flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100  group`
                  }
                >
                  <i class="fa-regular fa-books text-2xl"></i>
                  <span className="ml-3 text-md">Kitoblar ro'yhati</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/books/add"
                  end
                  // className={`${({isActive}) => (isActive ? "active" : 'none')} block py-2 px-3 text-dark rounded  md:p-0 `}
                  className={({ isActive }) =>
                    (isActive ? "active-sidebar bg-gray-100 " : "none ") +
                    `flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100  group`
                  }
                >
                  <i class="fa-regular fa-file-circle-plus text-2xl"></i>
                  <span className="ml-3 text-md">Kitob qo'shish</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/books/users"
                  end
                  // className={`${({isActive}) => (isActive ? "active" : 'none')} block py-2 px-3 text-dark rounded  md:p-0 `}
                  className={({ isActive }) =>
                    (isActive ? "active-sidebar bg-gray-100 " : "none ") +
                    `flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100  group`
                  }
                >
                  <i class="fa-regular fa-users text-2xl"></i>
                  <span className="ml-3 text-md">Foydalanuvchilar</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/books/settings"
                  end
                  // className={`${({isActive}) => (isActive ? "active" : 'none')} block py-2 px-3 text-dark rounded  md:p-0 `}
                  className={({ isActive }) =>
                    (isActive ? "active-sidebar bg-gray-100 " : "none ") +
                    `flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100  group`
                  }
                >
                  <i class="fa-regular fa-gear text-2xl"></i>
                  <span className="ml-3 text-md">Foydalanuvchilar</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20"></div>
        </aside>

        <main className="pt-20  pl-8 p-4 lg:p-8 lg:pt-20 md:ml-64 h-auto ">
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-4 mb-6">
            <div class="rounded-2xl border-2 shadow-custom flex-col  bg-[#fff] flex">
              <div class="flex-1 p-6">
                <div class="justify-between items-center flex">
                  <div class="flex items-center justify-center">
                    <div>
                      <h3 class="text-lg leading-tight text-gray-500 dark:text-slate-400">
                        Olingan kitoblar
                      </h3>
                      <h1 class="text-3xl leading-tight font-semibold">
                        <div>512</div>
                      </h1>
                    </div>
                  </div>
                  <div class="flex items-center justify-center">
                    <span class="inline-flex justify-center items-center h-16 text-emerald-500">
                    <i class="fa-solid fa-books text-4xl"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="rounded-2xl border-2 shadow-custom flex-col  bg-[#fff] flex">
              <div class="flex-1 p-6">
                <div class="justify-between items-center flex">
                  <div class="flex items-center justify-center">
                    <div>
                      <h3 class="text-lg leading-tight text-gray-500 dark:text-slate-400">
                        Umumiy Foydalanuvchilar
                      </h3>
                      <h1 class="text-3xl leading-tight font-semibold">
                        <div>859</div>
                      </h1>
                    </div>
                  </div>
                  <div class="flex items-center justify-center">
                    <span class="inline-flex justify-center items-center h-16 text-teal-600">
                      <svg
                        viewBox="0 0 24 24"
                        width="48"
                        height="48"
                        class="inline-block"
                      >
                        <path
                          fill="currentColor"
                          d="M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="rounded-2xl border-2 shadow-custom flex-col  bg-[#fff] flex">
              <div class="flex-1 p-6">
                <div class="justify-between items-center flex">
                  <div class="flex items-center justify-center">
                    <div>
                      <h3 class="text-lg leading-tight text-gray-500 dark:text-slate-400">
                        Qaytarilgan kitoblar
                      </h3>
                      <h1 class="text-3xl leading-tight font-semibold">
                        <div>215</div>
                      </h1>
                    </div>
                  </div>
                  <div class="flex items-center justify-center">
                    <span class="inline-flex justify-center items-center h-16 text-blue-500">
                      <i class="fa-solid fa-turn-down-left text-4xl"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="rounded-2xl border-2 shadow-custom flex-col  bg-[#fff] flex">
              <div class="flex-1 p-6">
                <div class="justify-between items-center flex">
                  <div class="flex items-center justify-center">
                    <div>
                      <h3 class="text-lg leading-tight text-gray-500 dark:text-slate-400">
                       Yuklab olingan kitoblar
                      </h3>
                      <h1 class="text-3xl leading-tight font-semibold">
                        <div>300</div>
                      </h1>
                    </div>
                  </div>
                  <div class="flex items-center justify-center">
                    <span class="inline-flex justify-center items-center h-16 text-violet-600">
                      <i class="fa-solid fa-folder-arrow-down text-4xl"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
          </div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
            <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
          </div>
        </main>
      </div>
    </>
  );
}
