import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

function Root() {
  const [isNavbar, setNavbar] = useState(true);
  return (
    <>
      <div className="flex bg-[#282828] py-3 text-white justify-between px-[15%]">
        <div>
          <a href="tel: +998 99 433 16 77" className="hidden md:block">
            <span className="">
              <i className="fa-regular fa-phone-volume text-sm text-[#F65D4E] mx-2"></i>
            </span>
            <span className="text-sm hover:text-[#F65D4E]">
              +998 99 433 16 77
            </span>
          </a>
        </div>
        <div className="flex gap-3">
          <span className="elementor-grid-item">
            <a href="https://t.me/Akademnashr" target="_blank">
              <i className="fab fa-telegram hover:text-[#F65D4E] hover:text-sm"></i>{" "}
            </a>
          </span>
          <span className="elementor-grid-item">
            <a href="https://www.facebook.com/akademnashr" target="_blank">
              <i className="fab fa-facebook hover:text-[#F65D4E] hover:text-sm"></i>{" "}
            </a>
          </span>
          <span className="elementor-grid-item">
            <a href="https://twitter.com/akademnashr_uz" target="_blank">
              <i className="fab fa-twitter hover:text-[#F65D4E] hover:text-sm"></i>{" "}
            </a>
          </span>
          <span className="elementor-grid-item">
            <a href="https://www.instagram.com/akademnashr" target="_blank">
              <i className="fab fa-instagram hover:text-[#F65D4E] hover:text-sm"></i>{" "}
            </a>
          </span>
        </div>
      </div>
      <div className="flex items-center justify-evenly">
        <i
          onClick={() => setNavbar((prev) => !prev)}
          className="fa-solid fa-bars-sort text-3xl block xl:hidden absolute inset-x-5"
        ></i>
        <NavLink to="/">
          <img
            src={require("../images/logo.png")}
            alt="logo"
            className="w-[150px]"
          />
        </NavLink>
        <div className="gap-5 items-center relative hidden xl:flex">
          <button
            className="hover-parent text-white bg-[#F65D4E] font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-6"
            type="button"
          >
            <i className={`fa-light fa-ellipsis-stroke-vertical text-xl`}></i>
            <i className={`fa-light fa-ellipsis-stroke-vertical text-xl`}></i>
            <i
              className={`fa-light fa-ellipsis-stroke-vertical text-xl mr-5`}
            ></i>
            Kategoriyalar
            <i className={` fa-solid fa-chevron-up mx-2 ml-[50px]`}></i>
            <div
              style={{ top: "50px" }}
              className={`hover-child z-10 absolute shadow-2xl bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Ilmiy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Badiy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Ilmiy Ommabop
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Bolalar adabiyoti
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    IT Kitoblar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Lug'atlar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    O'quv qo'llanmalar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Tarixiy
                  </a>
                </li>
              </ul>
            </div>
          </button>

          <form className="max-w-md min-w-[500px] flex w-full mx-auto bg-[#F6F6F6] py-3 px-5 rounded-3xl">
            <input
              type="text"
              className="bg-transparent outline-none w-full"
              placeholder="Izlash"
            />
            <i className="fa-solid fa-magnifying-glass text-xl"></i>
          </form>
        </div>
        <div className="hidden xl:block">
          <div className="relative">
            <i className="fa-regular fa-heart text-4xl"></i>
            <span className="top-0 left-7 absolute text-[12px] text-white flex justify-center items-center w-3.5 h-3.5 bg-[#F65D4E] border-2 border-white dark:border-gray-800 rounded-full p-2">
              2
            </span>
          </div>
        </div>
      </div>
      <hr />

      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center gap-6 mx-auto p-4">
          <div
            className={` ${
              isNavbar ? "hidden"  : "block"
            } w-full xl:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="mx-5">
                <NavLink
                  to="/"
                  className="block py-2 px-3 text-dark rounded  md:p-0 "
                  activeClassName="active"
                  aria-current="page"
                >
                  Asosiy
                </NavLink>
              </li>
              <li className="mx-5">
                <NavLink
                  to="/about"
                  className="block py-2 px-3 text-dark hover:text-[#F65D4E] rounded  md:p-0 "
                  activeClassName="active"
                  aria-current="page"
                >
                  Biz haqimizda
                </NavLink>
              </li>
              <li className="mx-5">
                <NavLink
                  to="/shop"
                  className="block py-2 px-3 text-dark hover:text-[#F65D4E] rounded  md:p-0 "
                  activeClassName="active"
                  aria-current="page"
                >
                  Kitoblar
                </NavLink>
              </li>
              <li className="mx-5">
                <NavLink
                  to="/team"
                  className="block py-2 px-3 text-dark hover:text-[#F65D4E] rounded  md:p-0 "
                  activeClassName="active"
                  aria-current="page"
                >
                  Jamoa
                </NavLink>
              </li>
              <li className="mx-5">
                <NavLink
                  to="/contact"
                  className="block py-2 px-3 text-dark hover:text-[#F65D4E] rounded  md:p-0 "
                  activeClassName="active"
                  aria-current="page"
                >
                  Bog'lanish
                </NavLink>
              </li>
              <li className="mx-5">
                <NavLink
                  to="/news"
                  className="block py-2 px-3 text-dark hover:text-[#F65D4E] rounded  md:p-0 "
                  activeClassName="active"
                  aria-current="page"
                >
                  Yangiliklar
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />

      <br />
      <br />
      <br />
      <footer className="bg-[#282828] w-screen text-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full ml-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div className="mb-6 md:mb-0">
              <a href="/" className="">
                <img
                  src={require("../images/logo.png")}
                  className="h-44 me-3"
                  alt="FlowBite Logo"
                />
                <span className="text-[#F65D4E]">Akademnashr</span>
              </a>
              <br />
              <br />
              <p className="text-gray-300 w-[60%]">
                {" "}
                Toshkent shahri, Chilonzor tumani So‘galli ota ko‘chasi 5- uy
              </p>
              <br />
              <br />
              <div className="flex gap-3">
                <span className="elementor-grid-item">
                  <a href="https://t.me/Akademnashr" target="_blank">
                    <i className="fab fa-telegram hover:text-[#F65D4E] hover:text-sm"></i>{" "}
                  </a>
                </span>
                <span className="elementor-grid-item">
                  <a
                    href="https://www.facebook.com/akademnashr"
                    target="_blank"
                  >
                    <i className="fab fa-facebook hover:text-[#F65D4E] hover:text-sm"></i>{" "}
                  </a>
                </span>
                <span className="elementor-grid-item">
                  <a href="https://twitter.com/akademnashr_uz" target="_blank">
                    <i className="fab fa-twitter hover:text-[#F65D4E] hover:text-sm"></i>{" "}
                  </a>
                </span>
                <span className="elementor-grid-item">
                  <a
                    href="https://www.instagram.com/akademnashr"
                    target="_blank"
                  >
                    <i className="fab fa-instagram hover:text-[#F65D4E] hover:text-sm"></i>{" "}
                  </a>
                </span>
              </div>
            </div>
            <div className="pt-6">
              <h2 className="font-bold text-xl">Biz Bilan Bog'lanish</h2>
              <h1 className="font-bold text-2xl mt-6 text-[#F65D4E]">
                +998 99 4331677
              </h1>
              <p className="text-gray-300 mt-5 text-[15px]">
                Dushanba – Juma: 9:00-20:00
              </p>
              <p className="text-lg mt-5">info@akademnashr.uz</p>
            </div>
            <div>
              <h3 className="text-lg">Menu</h3>
              <ul className="py-2 text-sm text-gray-500">
                <li>
                  <a
                    href="#"
                    className="block  py-2  "
                  >
                    Ilmiy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2  "
                  >
                    Badiy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2  "
                  >
                    Ilmiy Ommabop
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2  "
                  >
                    Bolalar adabiyoti
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2  "
                  >
                    IT Kitoblar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2  "
                  >
                    Lug'atlar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2  "
                  >
                    O'quv qo'llanmalar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2  "
                  >
                    Tarixiy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="md:w-full flex justify-center">
            <p className="text-center">
              Akademnashr 2022. Barcha huquqlar himoyalangan.
            </p>            
          </div>
        </div>
      </footer>
    </>
  );
}

export default Root;
