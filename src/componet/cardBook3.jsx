import { NavLink } from "react-router-dom";
export default function CardBook(props) {
    return (
     
    <div className="grid grid-cols-4 mt-2  p-3 items-center bg-[#F0F1F5]  border-b-2 border-gray-200 md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
         <img
          className="object-contain bg-white col-span-1 rounded-t-lg h-[150px] md:h-[100px] w-[80px] md:rounded-none md:rounded-s-lg"
          src={props.book?.imageLinks?.thumbnail}
        />
        <div className="flex col-span-3 flex-col justify-between p-4 leading-normal">
          <NavLink
              to={`/shop/${props.book?.id}`}
              >
              <h5 className="mb-2 hover:text-[#F65D4E] text-sm md:text-lg lg:text-md xl:text-lg turrance font-bold tracking-tight text-gray-900 dark:text-white">
                {props.book.title}
              </h5>
          </NavLink>
        <p className="mb-3 font-semibold text-sm md:text-lg text-[#F65D4E]">{props.book.currencyCode} { props.book.currencyCode && ":"} {props.book.price}</p>
        </div>
    </div>

    );
  }
  