export default function box(props) {
  return (
    <div className="max-w-sm my-2 relative bg-white border-r-2 border-gray-200  dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg object-contain h-[250px] w-11/12 m-3 drop-shadow"
          src={props.book.imageLinks.thumbnail}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-sm md:text-lg font-bold truncate tracking-tight text-gray-900 dark:text-white">
            {props.book.title}
          </h5>
        </a>
        <p className="mb-3 font-semibold text-sm md:text-lg text-[#F65D4E]">UZS: 223,500</p>
      </div>
      <div className="action-button ">
        <div className="flex flex-col w-max gap-3">
            <button
            type="button"
            className="text-gray border hover:bg-[#F65D4E] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
            >
            <i className="fa-regular fa-heart"></i>
            </button>
            <button
            type="button"
            className="text-gray border hover:bg-[#F65D4E] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
            >
            <i className="fa-regular fa-cart-shopping"></i>
            </button>
        </div>
      </div>
    </div>
  );
}
