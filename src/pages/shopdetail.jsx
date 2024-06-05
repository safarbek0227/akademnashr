import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation,useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

import CardBox from "../componet/cardBook3"

export default function Shop(params) {
  const [books, setBooks] = useState(null);
  const [book, setBook] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const routerParams = useParams();
  useEffect(() => {
    axios
    .get(`https://www.googleapis.com/books/v1/volumes`, {
      params: {
        q: "+terms",
        maxResults:5,
        orderBy: "relevance",
        // filter: "paid-ebooks",
        API_KEY: "AIzaSyC4yceaVm_HLVyo9aSRzUmj6BlmvKdU8ks",
      },
    })
    .then((res) => {

      setBooks(res.data.items?.map((items) => {
        let newobj = {...items.volumeInfo, id: items.id}
        console.log(newobj)
        return newobj
      } ));
    });

    console.log(routerParams.id)
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${routerParams.id}`, { })
      .then((res) => {
        console.log(res.data)
        setBook(res.data.volumeInfo)
      });
  }, [useLocation]);

  return (
    <>
      <section className="px-5 md:mx-[5%] lg:mx-[8%] mt-6  xl:mx-[5%]">
        <div className="grid">
          <div className="grid grid-cols-7 gap-2">
            <div className="col-span-6 xl:col-span-5 xl:order-last">
              <div className="flex md:items-center p-8 border-2 rounded-3xl border-gray pb-4 wrap flex-col md:flex-row gap-2">
                  <div className="flex flex-wrap justify-center ">
                    <div className="md:w-full md:flex-1 xl:min-w-[400px] h-auto p-8">
                      <img src={book?.imageLinks?.thumbnail} className="w-full rounded-lg h-auto" alt="" />
                    </div>
                    <div className="w-auto">
                      <span class="bg-green-100 text-green-800 text-md   font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Sotuvda mavjud</span>
                      <br /><br />
                      <h1 className="font-semibold text-2xl xl:text-3xl">«{ book?.title}»</h1>
                      <hr />
                      <br /><br />
                      <hr />
                      <br />
                      <h1 className="text-gray-400   text-xl">Soni</h1>
                      <br />
                      <div className="flex  flex-wrap gap-5">
                        <div className="flex w-min text-lg border rounded-3xl">
                          <span className="p-3 cursor-pointer rounded-l-3xl hover:text-white hover:bg-[#F65D4E]">-</span>
                          <span className="p-3">2</span>
                          <span className="p-3 cursor-pointer rounded-r-3xl hover:text-white hover:bg-[#F65D4E]">+</span>
                        </div>
                        <button type="button" class="text-white bg-[#F65D4E] font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 hover:bg-[#FF5D4E] dark:focus:ring-red-900"><i class="fa-sharp fa-solid fa-basket-shopping-simple mx-3"></i> Savatga qo'shish</button>

                      </div>
                      <br />
                      <h3><i class="fa-regular fa-heart mx-3"></i> istaklar ro'yxatiga qo'shing</h3>
                    </div>
                  </div>
                <div className="flex-1 border-b-1 border-gray"></div>
              </div>
              <br />
              <div className="flex md:items-center pt-0 px-8 border-2 rounded-3xl border-gray wrap flex-col md:flex-row gap-2">
                  <div className="flex flex-wrap md:flex-nowrap justify-center ">
                    <div className="items-center flex border-b-2 w-full text-center  md:border-r-2  md:min-w-[100px] h-auto px-0 py-8">
                      <h1 className="text-xl">Tasnif</h1>
                    </div>
                    <div className="w-auto p-6">
                      <ul>
                        <li className="my-4"><b>Muallif:</b> {book?.authors[0]}</li>
                        <li className="my-4"><b>hajmi:</b> {book?.printedPageCount} bet</li>
                        <li className="my-4"><b>Yili:</b> {book?.publishedDate}</li>
                      </ul>
                      <p dangerouslySetInnerHTML={{ __html: book?.description }} />
                      
                    </div>
                  </div>
                <div className="flex-1 border-b-1 border-gray"></div>
              </div>
            </div>
            <div className="col-span-6 xl:col-span-2">
              <div className="bg-[#F0F1F5] border rounded-xl p-8 mx-8">
                <h3 className="text-3xl font-bold">Haftalik Top 10</h3>
                <br />
                <div className="flex flex-col">
                  {books?.map((item, index) => (
                      <CardBox  book={item}/>
                  ))}
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
