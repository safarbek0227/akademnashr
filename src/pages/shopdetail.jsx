import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation,useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

import Box from "../componet/box2";
import CardBook from "../componet/cardBook2";
import wrapper from "../images/wrapper.png";

export default function Shop(params) {
  const [book, setBook] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const routerParams = useParams();
  useEffect(() => {
    console.log(routerParams.id)
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${routerParams.id}`, { })
      .then((res) => {
        console.log(res.data)
      });
  }, [useLocation]);

  return (
    <>
      <section className="px-5 md:mx-[5%] lg:mx-[8%] mt-6  xl:mx-[10%]">
        <div className="grid">
          <div className="grid grid-cols-6 gap-2">
            <div className="col-span-6 lg:col-span-4 lg:order-last">
              <div className="flex md:items-center border-b-2 border-gray pb-4 wrap flex-col md:flex-row gap-2">
                
                <div className="flex-1 border-b-1 border-gray"></div>
              </div>



              <br />
              <hr />
              
            </div>
            <div className="col-span-6 lg:col-span-2">
              <div className="bg-gray border rounded-xl p-8 mx-8">
                <h3 className="text-xl">Kategoriyalar</h3>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
