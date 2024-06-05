import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation, useSearchParams } from "react-router-dom";

function Root() {
  const [isNavbar, setNavbar] = useState(true);
  const [isSearchBar, setSearchBar] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setNavbar(true);
  },[useLocation()])
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
          className="fa-solid fa-bars-staggered text-3xl block xl:hidden absolute inset-x-5"
        ></i>
        <NavLink to="/">
          <img
            src={require("../images/logo.png")}
            alt="logo"
            className="w-[150px]"
          />
        </NavLink>
        <div className={` ${!isSearchBar ? "hidden" : ""}  gap-5 items-center w-11/12 xl:w-auto shadow-xl xl:shadow-none fixed p-6 rounded-3xl bg-[#FAF5F3] xl:bg-white  xl:relative xl:flex`}>
          <button
            className="hover-parent text-white bg-[#F65D4E] font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-6 hidden xl:block"
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

          <form 
            method="get"
            action="/shop/"
            onChange={(e) => e.submit}
            className="max-w-md xl:min-w-[500px] flex w-full mx-auto bg-[#fff] xl:bg-[#F6F6F6] py-3 px-5 rounded-3xl">
            <input
              type="text"
              className="bg-transparent outline-none w-full"
              placeholder="Izlash"
              name="query"
              defaultValue={searchParams.get("query") }
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
              isNavbar ? "hidden" : "block"
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
                  <a href="#" className="block  py-2  ">
                    Ilmiy
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2  ">
                    Badiy
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2  ">
                    Ilmiy Ommabop
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2  ">
                    Bolalar adabiyoti
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2  ">
                    IT Kitoblar
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2  ">
                    Lug'atlar
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2  ">
                    O'quv qo'llanmalar
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2  ">
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

      <div className="fixed lg:hidden bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="flex h-full w-full  mx-auto font-medium">
          <NavLink
            to="/"
            className="inline-flex flex-col w-1/4  items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600"
          >
            <svg
              className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Asosiy
            </span>
          </NavLink>
          <NavLink
            to={"/shop"}
            type="button"
            className="inline-flex flex-col w-1/4  items-center justify-center px-5 border-e border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600"
          >
            <i className="fa-solid fa-book-bookmark text-2xl text-gray-500 group-hover:text-blue-600"></i>
            <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Kitoblar
            </span>
          </NavLink>
          <button
            type="button"
            onClick={() => setSearchBar((prev) => !prev)}
            className="inline-flex flex-col w-1/4  items-center justify-center px-5 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 group border-x dark:border-gray-600"
          >
            <i className="fa-solid fa-magnifying-glass text-2xl text-gray-500 group-hover:text-blue-600"></i>
            <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Qidiruv
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col  w-1/4 items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <i className="fa-regular fa-heart text-2xl text-gray-500 group-hover:text-blue-600"></i>
            <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Istaklar ro'yhati
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Root;
