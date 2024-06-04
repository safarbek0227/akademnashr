export default function CardBook(props) {
    return (
     
    <div className="grid grid-cols-4 mt-2  p-3 items-center bg-white border-b-2 border-gray-200 md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
         <img
          className="object-contain col-span-1 rounded-t-lg h-[200px] md:h-auto w-[150px] md:rounded-none md:rounded-s-lg"
          src={props.book.imageLinks.thumbnail}
        />
        <div className="flex col-span-3 flex-col justify-between p-4 leading-normal">
        <a href="#" className="w-full">
          <h5 className="mb-2 text-sm md:text-xl turrance font-bold tracking-tight text-gray-900 dark:text-white">
            {props.book.title}
          </h5>
        </a>
        <p className="mb-3 font-semibold text-sm md:text-xl text-[#F65D4E]">UZS: 223,500</p>
        </div>
    </div>

    );
  }
  