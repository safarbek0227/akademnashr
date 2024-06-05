import { NavLink } from "react-router-dom";
export default function CardBook(props) {
  return (
    <div className="grid grid-cols-4 mt-2  p-3 items-center bg-white border-b-2 border-gray-200 md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-contain col-span-1 rounded-t-lg h-[200px] md:h-auto w-[150px] md:rounded-none md:rounded-s-lg"
        src={props.book?.imageLinks?.thumbnail}
      />
      <div className="flex col-span-3 flex-col justify-between p-4 leading-normal">
        <a href="#" className="w-full">
        <NavLink
                to={`/shop/${props.book.id}`}
                >
          <h5 className="mb-2 hover:text-[#F65D4E] text-sm md:text-xl turrance font-bold tracking-tight text-gray-900 dark:text-white">
            «{props.book.title}» 
          </h5>
        </NavLink>
        </a>
        <p className="mb-3 font-semibold text-sm md:text-xl text-[#F65D4E]">
          UZS: 223,500
        </p>
        <div className="flex items-center gap-5" >
          <button
            type="button my-6"
            className="hover:text-[#F65D4E] hover:bg-white bg-[#F65D4E] text-white font-bold rounded-3xl text-sm px-5 py-3 me-2 mb-2"
          >
            Xarid qilish<i className="fa-solid fa-chevron-right ml-5"></i>
          </button>
          <button
            type="button"
            className="text-gray border hover:bg-[#F65D4E] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xl p-2.5 text-center inline-flex items-center"
          >
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
