import { NavLink, useLocation } from "react-router-dom";
export default function Team(params) {
  return (
    <>
      <div className="py-8 px-4 mx-auto max-w-screen-xl bg-[#F6F6F8] rounded-2xl text-left lg:py-[8%] lg:px-6">
        <h1 className="text-6xl font-bold text-[#F65D4E]">Biz bilan bog'lanish</h1>
        <div className="flex gap-3">
            <a href="#" 
                type="button"
                className="text-gray bg-[#F65D4E] text-[#fff] hover:text-[#F65D4E] hover:bg-[#fff] border rounded-full text-4xl p-4 text-center inline-flex items-center"
                >
                <i className="fa-solid fa-phone"></i>
            </a>
            <a href="#" 
                type="button"
                className="text-gray bg-[#F65D4E] text-[#fff] hover:text-[#F65D4E] hover:bg-[#fff] border rounded-full text-4xl p-4 text-center inline-flex items-center"
                >
                <i className="fa-brands fa-telegram"></i>
            </a>
            <a href="#" 
                type="button"
                className="text-gray bg-[#F65D4E] text-[#fff] hover:text-[#F65D4E] hover:bg-[#fff] border rounded-full text-4xl p-4 text-center inline-flex items-center"
                >
                <i className="fa-brands fa-instagram"></i>
            </a>            
        </div>
        <NavLink to={"team"} className="text-lg group text-gray-500 hover:text-[#F65D4E]">
          Bizning Jamoa
          <i className="fa-solid fa-chevron-right group-hover:translate-x-3 ml-8"></i>
        </NavLink>
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-left lg:py-16 lg:px-6">
        <h1 className="text-4xl font-bold text-[#F65D4E]">Markaziy Ofis</h1>
        <br />
        <h3 className="text-lg my-2"><i className="fa-solid fa-location-dot mr-4 text-[#6852ED]"></i> Toshkent shahri, Chilonzor tumani So‘galli ota ko‘chasi 5- uy</h3>
        <h3 className="text-lg my-2"><i className="fa-solid fa-phone mr-4 text-[#6852ED]"></i> +998 99 4331677</h3>
        <h3 className="text-lg my-2"><i className="fa-solid fa-envelope mr-4 text-[#6852ED]"></i> info@akademnashr.uz</h3>
      </div>
      <section className="px-8">
      <iframe className="w-full min-h-[600px]" loading="lazy" data-src="https://maps.google.com/maps?q=41.260094%2C%2069.190435&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near" title="41.260094, 69.190435" aria-label="41.260094, 69.190435" src="https://maps.google.com/maps?q=41.260094%2C%2069.190435&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near" className=" lazyloaded" data-load-mode="1"></iframe>
      </section>

    </>
  );
}
