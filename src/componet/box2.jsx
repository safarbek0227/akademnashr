import { NavLink } from "react-router-dom";
export default function box(props) {
  return (
    <div className="max-w-sm my-2 relative bg-white border-r-2 border-gray-200  dark:bg-gray-800 dark:border-gray-700">
      <NavLink
          to={`/shop/${props.book.id}`}
          >
        <img
          className="rounded-t-lg object-contain h-[250px] w-11/12 m-3 drop-shadow"
          src={props.book?.imageLinks?.smallThumbnail}
        />
      </NavLink>
      <div className="p-5">
        <NavLink
          to={`/shop/${props.book.id}`}
          >
          <h5 className="mb-2 text-sm md:text-lg font-bold truncate tracking-tight text-gray-900 dark:text-white">
            {props.book.title}
          </h5>              
        </NavLink>
        <p className="mb-3 font-semibold text-sm md:text-lg text-[#F65D4E]">{props.book.currencyCode}: {props.book.price}</p>
      </div>
      <div className="flex items-center gap-5 pl-3 flex-wrap" >
          <button
            type="button my-6"
            className="hover:text-[#F65D4E] border-2 border-[#F65D4E] text-nowrap hover:bg-white bg-[#F65D4E] text-white font-bold rounded-3xl text-sm px-5 py-3 me-2 mb-2"
          >
            Xarid qilish<i className="fa-solid fa-chevron-right ml-5"></i>
          </button>
          <button
            type="button"
            className="text-gray border hover:bg-[#F65D4E] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xl p-2.5 text-center inline-flex items-center "
          >
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
    </div>
  );
}
