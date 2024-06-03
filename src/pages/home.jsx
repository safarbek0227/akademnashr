import { useState, useEffect, useRef } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

function Home(){

    return (
        <>
            <section className="w-screen mt-4" id="hero-area">
                <div className="flex h-full items-center justify-end mx-[15%]">
                    <div className="relative">
                        <p class="text-center">akademnashr</p>
                        <h1 className="relative z-10 font-bold leading-normal text-4xl md:leading-normal md:text-5xl">Siz Izlayotgan <br /> Kitoblar Shu Yerda </h1>
                        <img src={require("../images/revslider_vector.png")}
                            alt=""
                            className="absolute postion-style"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;