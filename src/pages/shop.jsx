import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";

import Box from "../componet/box2";
import CardBook from "../componet/cardBook2";
import wrapper from "../images/wrapper.png";

export default function Shop(params) {
  const [books, setBooks] = useState(null);
  const [typeview, setTypeview] = useState(false);
  const [pagination, setPagination] = useState(10);
  const [orderType, SetOrderType] = useState("relevance");
  const [pagesL, setPagesL] = useState([1, 2, 3]);
  const [subject, setSubject] = useState("");
  const [pages, setPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    console.log()
    axios
      .get(`https://www.googleapis.com/books/v1/volumes`, {
        params: {
          q: searchParams.get("query") ? searchParams.get("query") : "+terms" + "+subject:" + subject,
          maxResults: pagination,
          startIndex: pages * pagination,
          orderBy: orderType,
          API_KEY: "AIzaSyC4yceaVm_HLVyo9aSRzUmj6BlmvKdU8ks",
        },
      })
      .then((res) => {
        setPagesL(
          Array.from(
            { length: parseInt(res.data.totalItems) / pagination },
            (value, index) => index
          )
        );
        setBooks(res.data.items?.map((items) => items.volumeInfo));
      });
  }, [useLocation, pagination, pages, orderType, subject, searchParams]);

  return (
    <>
      <section className="px-5 md:mx-[5%] lg:mx-[8%] mt-6  xl:mx-[10%]">
        <div className="grid">
          <div className="grid grid-cols-6 gap-2">
            <div className="col-span-6 lg:col-span-2 ">
              <div className="bg-gray border rounded-xl p-8 mx-8">
                <h3 className="text-xl">Kategoriyalar</h3>
                <hr />
                <ul class="max-w-md space-y-1 mt-8  cursor-pointer text-gray-500 list-disc list-inside dark:text-gray-400">
                    <li 
                        onClick={() => setSubject("Fantasy")}
                        className={`${subject == "Fantasy" && "text-[#F65D4E]"}`}
                        >Fantastika
                    </li>
                    <li 
                        onClick={() => setSubject("Literary fiction")}
                        className={`${subject == "Literary fiction" && "text-[#F65D4E]"}`}
                        >
                        Adabiy fantastika
                    </li>
                    <li 
                        onClick={() => setSubject("Mystery")}
                        className={`${subject == "Mystery" && "text-[#F65D4E]"}`}
                        >
                        Jumboqli
                    </li>
                    <li 
                        onClick={() => setSubject("Science fiction")}
                        className={`${subject == "Science fiction" && "text-[#F65D4E]"}`}
                        >
                        Ilmiy ommabop
                    </li>
                    <li 
                        onClick={() => setSubject("Romance")}
                        className={`${subject == "Romance" && "text-[#F65D4E]"}`}
                        >
                        Romantika
                    </li>
                    <li 
                        onClick={() => setSubject("Adventure")}
                        className={`${subject == "Adventure" && "text-[#F65D4E]"}`}
                        >
                        Sarguzasht
                    </li>
                    <li 
                        onClick={() => setSubject("Horror")}
                        className={`${subject == "Horror" && "text-[#F65D4E]"}`}
                        >
                        Qo'rqinchili
                    </li>
                    <li 
                        onClick={() => setSubject("Thriller")}
                        className={`${subject == "Thriller" && "text-[#F65D4E]"}`}
                        >
                        detektiv janr
                    </li>
                    <li 
                        onClick={() => setSubject("Young adult")}
                        className={`${subject == "Young" && "text-[#F65D4E]"}`}
                        >
                        Yoshlar uchun
                    </li>
                    
                </ul>
              </div>
            </div>
            <div className="col-span-6 lg:col-span-4">
              <div className="flex md:items-center border-b-2 border-gray pb-4 wrap flex-col md:flex-row gap-2">
                <div className="flex text-2xl gap-4">
                  <i
                    className={`fa-sharp  fa-grid-2 ${
                      !typeview && "text-gray-300"
                    }`}
                    onClick={() => setTypeview(true)}
                  ></i>
                  <i
                    className={`fa-sharp  fa-list ${
                      typeview && "text-gray-300"
                    }`}
                    onClick={() => setTypeview(false)}
                  ></i>
                </div>
                <div className="flex-1 border-b-1 border-gray"></div>
                <div className="flex gap-4">
                  <select
                    name=""
                    id=""
                    onChange={(e) => SetOrderType(e.target.value)}
                    className="text-md border-none outline-none"
                  >
                    <option value={"relevance"}>Mashxurligi boyicha</option>
                    <option value={"newest"}>Yangiligi bo'yicha</option>
                  </select>
                  <select
                    onChange={(e) => setPagination(e.target.value)}
                    className="text-md border-none outline-none"
                  >
                    <option value={10}>Ko'rish: 10</option>
                    <option value={20}>Ko'rish: 20</option>
                    <option value={16}>Ko'rish: 16</option>
                  </select>
                </div>
              </div>

              {typeview ? (
                <div className="grid grid-cols-4">
                  {books?.map((item, index) => (
                    <Box book={item} key={`p${index}`} />
                  ))}
                </div>
              ) : (
                <>
                  {books?.map((item, index) => (
                    <CardBook book={item} key={`p${index}`} />
                  ))}
                </>
              )}

              <br />
              <hr />
              <div className="flex flex-col items-center mt-8 pt-8">
                <nav aria-label="Page navigation example">
                  <ul class="flex items-center -space-x-px h-8 text-sm">
                    {pagesL?.slice(0, 7).map((item) => (
                      <li>
                        <button
                          onClick={() => setPages(item)}
                          class={`${
                            pages == item && "bg-[#6852ED] text-white"
                          } flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                        >
                          {item + 1}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
