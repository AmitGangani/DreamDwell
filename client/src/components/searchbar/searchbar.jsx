import { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

function SearchBar() {
   const [query, setQuery] = useState({
      type: "buy",
      city: "",
      minPrice: 0,
      maxPrice: 0,
   });

   const switchType = (val) => {
      setQuery((prev) => ({ ...prev, type: val }));
   };

   const handleChange = (e) => {
      setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };
   return (
      <div className="searchBar">
         <div className="type">
            {types.map((type) => (
               <Button
                  key={type}
                  onClick={() => switchType(type)}
                  className="px-6 first:rounded-r-none last:rounded-l-none"
                  variant={query.type === type ? "" : "secondary"}
               >
                  {type}
               </Button>
            ))}
         </div>
         <form className="h-full sm:border sm:border-gray-600 sm:flex-row flex flex-col justify-between gap-1">
            <input
               type="text"
               name="location"
               placeholder="City Location"
               className=" border border-gray-500 p-[20px] w-auto sm:w-[200px] md:py-0 md:px-[5px] md:w-[140px]"
               onChange={handleChange}
            />
            <input
               type="number"
               name="minPrice"
               min={0}
               max={10000000}
               placeholder="Min Price"
               className=" border border-gray-500 p-[20px] w-auto sm:w-[200px] md:py-0 md:px-[5px] md:w-[140px]"
               onChange={handleChange}
            />
            <input
               type="number"
               name="maxPrice"
               min={0}
               max={10000000}
               placeholder="Max Price"
               className=" border border-gray-500 p-[20px] w-auto sm:w-[200px] md:py-0 md:px-[5px] md:w-[140px]"
               onChange={handleChange}
            />
            <Link
               to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
            >
               <Button className="h-full rounded-none border-none cursor-pointer bg-[#fece51] flex-1">
                  <img src="/search.png" alt="" className=" h-5 w-5" />
               </Button>
            </Link>
         </form>
      </div>
   );
}

export default SearchBar;
