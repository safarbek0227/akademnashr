import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Box from "../componet/box";
import CardBook from "../componet/cardBook";
import ScienceCard from "../componet/scienceCard";
import wrapper from "../images/wrapper.png";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

function Home() {
  const [books, setBooks] = useState(null);
  const [popularScience, setPopularScience] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes`, {
        params: {
          q: "subject:fiction",
          max_results: 11,
          API_KEY: "AIzaSyC4yceaVm_HLVyo9aSRzUmj6BlmvKdU8ks",
        },
      })
      .then((res) => {
        setBooks(res.data.items.map((items) => items.volumeInfo));
      });
    axios
      .get(`https://www.googleapis.com/books/v1/volumes`, {
        params: {
          q: "subject:Popular science",
          API_KEY: "AIzaSyC4yceaVm_HLVyo9aSRzUmj6BlmvKdU8ks",
        },
      })
      .then((res) => {
        setPopularScience(res.data.items.map((items) => items.volumeInfo));
      });
  }, [useLocation]);
  return (
    <>
      <section className=" mt-4" id="hero-area">
        <div className="flex h-full items-center justify-end mx-[15%]">
          <div className="relative">
            <p class="text-center">akademnashr</p>
            <h1 className="relative z-10 font-bold leading-normal text-4xl md:leading-normal md:text-5xl">
              Siz Izlayotgan <br /> Kitoblar Shu Yerda{" "}
            </h1>
            <img
              src={require("../images/revslider_vector.png")}
              alt=""
              className="absolute postion-style"
            />
          </div>
        </div>
      </section>
      <br />
      <br />
      <section className="w-screen my-6">
        <div className="mx-6 md:mx-[15%] mt-6">
          <div className="flex md:items-center wrap flex-col md:flex-row gap-2">
            <h1 className="text-4xl font-bold">Ommabop kitoblar</h1>
            <div className="flex-1 border-b-2 border-gray mx-6 none md:block"></div>
            <NavLink
              to="shop"
              className="text-white w-max text-nowrap flex items-center bg-[#F65D4E] text-[15px] font-medium rounded-full text-sm px-6 py-4 text-center me-2 mb-2"
            >
              Ko'proq Ko'rish
              <i class="fa-solid fa-chevron-right ml-5 text-[15px]"></i>
            </NavLink>
          </div>
        </div>
      </section>

      <section className="px-5">
        <Swiper
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            1444: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          freeMode={true}
          loop={true}
          modules={[FreeMode, Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {books?.map((item, index) => (
            <SwiperSlide key={index}>
              <Box book={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="w-screen my-6">
        <div className="mx-6 md:mx-[15%] mt-6">
          {books?.slice(0, 3).map((item, index) => (
            <CardBook book={item} key={`p${index}`} />
          ))}
        </div>
      </section>
      <br />
      <br />
      <section className="w-screen my-6">
        <div className="mx-6 md:mx-[15%] mt-6">
          <div className="flex md:items-center wrap flex-col md:flex-row gap-2">
            <h1 className="text-4xl font-bold">Ilmiy ommabop</h1>
            <div className="flex-1 border-b-2 border-gray mx-6 none md:block"></div>
            <NavLink
              to="shop"
              className="text-white w-max text-nowrap flex items-center bg-[#F65D4E] text-[15px] font-medium rounded-full text-sm px-6 py-4 text-center me-2 mb-2"
            >
              Ko'proq Ko'rish
              <i class="fa-solid fa-chevron-right ml-5 text-[15px]"></i>
            </NavLink>
          </div>
        </div>
      </section>
      <section className="px-5 md:ml-[15%]">
        <Swiper
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1444: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
          }}
          freeMode={true}
          loop={true}
          modules={[FreeMode, Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {popularScience?.map((item, index) => (
            <SwiperSlide key={`a ${index}`}>
              <ScienceCard book={item} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="w-screen my-6">
        <div className="mx-6 md:mx-[15%] mt-6">
          <div className="flex md:items-center wrap flex-col md:flex-row gap-2">
            <h1 className="text-4xl font-bold">Mashxur kitoblar</h1>
            <div className="flex-1 border-b-2 border-gray mx-6 none md:block"></div>
            <NavLink
              to="shop"
              className="text-white w-max text-nowrap flex items-center bg-[#F65D4E] text-[15px] font-medium rounded-full text-sm px-6 py-4 text-center me-2 mb-2"
            >
              Ko'proq Ko'rish
              <i class="fa-solid fa-chevron-right ml-5 text-[15px]"></i>
            </NavLink>
          </div>
        </div>
      </section>

      <br />

      <section className="px-5 md:mx-[5%] lg:mx-[10%]  xl:mx-[15%]">
        <div className="grid">
          <div className="grid grid-cols-6 gap-2">
            <div className="col-span-6 lg:col-span-4">
              <div className="grid grid-cols-1 item-center sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-2 gap-2">
                {books?.slice(0, 8).map((item, index) => (
                  <Box book={item} />
                ))}
              </div>
            </div>
            <div className="col-span-6 lg:col-span-2">
              <div
                className="h-[400px] w-full flex items-end pb-[100px] pl-6 lg:max-h-[750px] lg:h-full lg:w-[95%] a_bgsize"
                style={{ backgroundImage: `url(${wrapper})` }}
              >
                <NavLink to="shop/">
                  <h3 className="font-bold text-white text-3xl">Kitoblarni</h3>
                  <button
                    type="button"
                    class="text-gray bg-white hover:bg-[#F65D4E] hover:text-white font-bold rounded-3xl text-sm px-5 py-3 me-2 mb-2"
                  >
                    Xarid qilish <i class="fa-solid fa-chevron-right ml-5"></i>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />

      <section className="w-screen my-6">
        <div className="mx-6 md:mx-[15%] mt-6">
          <div className="flex md:items-center wrap flex-col md:flex-row gap-2">
            <h1 className="text-4xl font-bold">Kategoriyalar</h1>
            <div className="flex-1 border-b-2 border-gray mx-6 none md:block"></div>
          </div>
        </div>
      </section>

      <section className="px-5 lg:mx-[15%] md:mx-[10%]">
        <Swiper
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1444: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          freeMode={true}
          loop={true}
          modules={[FreeMode, Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="w-full rounded-3xl"
              src={require("../images/category/guide 2.png")}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full rounded-3xl"
              src={require("../images/category/literary.png")}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full rounded-3xl"
              src={require("../images/category/guide.png")}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full rounded-3xl"
              src={require("../images/category/literary2.png")}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full rounded-3xl"
              src={require("../images/category/history2.png")}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </section>

      <br />
      <br />
      <section className="px-5 md:mx-[5%] lg:mx-[10%] mt-6  xl:mx-[15%]">
        <div className="grid">
          <div className="grid grid-cols-6 gap-2">
            <div className="col-span-6 lg:col-span-2">
              <div
                className="h-[400px] w-full flex items-end pb-[100px] pl-6 lg:max-h-[750px] lg:h-full lg:w-[95%] a_bgsize"
                style={{ backgroundImage: `url(${wrapper})` }}
              >
                <NavLink to="shop/">
                  <h3 className="font-bold text-white text-3xl">Kitoblarni</h3>
                  <button
                    type="button"
                    class="text-gray bg-white hover:bg-[#F65D4E] hover:text-white font-bold rounded-3xl text-sm px-5 py-3 me-2 mb-2"
                  >
                    Xarid qilish <i class="fa-solid fa-chevron-right ml-5"></i>
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-4">
              <div className="flex md:items-center wrap flex-col md:flex-row gap-2">
                <h1 className="text-4xl font-bold">O'qishni davom ettiring</h1>
                <div className="flex-1"></div>
                <NavLink
                  to="shop"
                  className="text-white w-max text-nowrap flex items-center bg-[#F65D4E] text-[15px] font-medium rounded-full text-sm px-6 py-4 text-center me-2 mb-2"
                >
                  Ko'proq Ko'rish
                  <i class="fa-solid fa-chevron-right ml-5 text-[15px]"></i>
                </NavLink>
              </div>
              <div className="flex-1 border-b-1 border-gray mx-6 none md:block"></div>

              {books?.slice(0, 1).map((item, index) => (
                <CardBook book={item} key={`p${index}`} />
              ))}
              <div className="grid grid-cols-1 md:grid-cols-2">
                {books?.slice(1, 5).map((item, index) => (
                  <CardBook book={item} key={`p${index}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-8 text-left items-center gap-5 border border-gray rounded-xl flex">
              <button
                type="button"
                class="text-gray bg-[#EDEBFC] text-[#7261D4] border rounded-full text-4xl p-4 text-center inline-flex items-center"
              >
                <i class="fa-regular fa-book"></i>
              </button>
              <div>
                <h3 className="text-xl font-semibold">15,254</h3>
                <h4 className="text-lg text-gray-500">Jami Kitoblar</h4>
              </div>
            </div>
            <div className="p-8 text-left items-center gap-5 border border-gray rounded-xl flex">
              <button
                type="button"
                class="text-gray bg-[#E9F9FD] text-[#4DC1DB] border rounded-full text-4xl p-4 text-center inline-flex items-center"
              >
                <i class="fa-regular fa-people-simple"></i>
              </button>
              <div>
                <h3 className="text-xl font-semibold">1,287</h3>
                <h4 className="text-lg text-gray-500">MUALLIFLAR</h4>
              </div>
            </div>
            <div className="p-8 text-left items-center gap-5 border border-gray rounded-xl flex">
              <button
                type="button"
                class="text-gray bg-[#E8F6E1] text-[#72C949] border rounded-full text-4xl p-4 text-center inline-flex items-center"
              >
                <i class="fa-regular fa-book"></i>
              </button>
              <div>
                <h3 className="text-xl font-semibold">7,589</h3>
                <h4 className="text-lg text-gray-500">KITOBLAR SOTILGAN</h4>
              </div>
            </div>
            <div className="p-8 text-left items-center gap-5 border border-gray rounded-xl flex">
              <button
                type="button"
                class="text-gray bg-[#FBF1E6] text-[#FA8C17] border rounded-full text-4xl p-4 text-center inline-flex items-center"
              >
                <i class="fa-regular fa-face-smile"></i>
              </button>
              <div>
                <h3 className="text-xl font-semibold">97%</h3>
                <h4 className="text-lg text-gray-500">BAXTLI MIJOZLAR</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
