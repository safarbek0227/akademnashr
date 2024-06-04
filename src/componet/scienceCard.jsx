export default function ScienceCard(props) {
    return (
     

    <div className={`grid grid-cols-4 px-4 py-0 items-center rounded-3xl`}
                    style={{backgroundColor: props.index % 2 == 0 ? "#F4FBF2" : props.index % 3 == 0 ? '#F5F7FE' : "#FEF5F5"}}    
            
        >
        <img 
            className="object-contain col-span-2 m-2 w-full rounded-t-lg h-96 md:w-48 md:rounded-none md:rounded-s-lg" 
            src={props.book.imageLinks.thumbnail} alt="" />
        <div className="flex flex-col col-span-2 justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.book.title.slice(0,50)}</h5>
            <p className="mb-3 font-semibold text-sm md:text-xl text-[#F65D4E]">UZS: 223,500</p>
        </div>
    </div>


    );
  }
  