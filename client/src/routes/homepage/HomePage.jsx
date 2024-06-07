import SearchBar from "../../components/searchbar/searchbar";

function HomePage() {
   return (
      <div className="flex h-full">
         <div className="flex-[3] h-full">
            <div className="flex flex-col justify-start sm:p-0 sm:justify-center md:pr-[50px] lg:pr-[100px] gap-[50px] h-full">
               <h1 className="text-[40px] lg:text-[50px]">
                  Find Real Estate & Get Your Dream Place
               </h1>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  explicabo suscipit cum eius, iure est nulla animi consequatur
                  facilis id pariatur fugit quos laudantium temporibus dolor ea
                  repellat provident impedit!
               </p>
               <SearchBar />
               <div className="hidden sm:flex justify-between h-full">
                  <div className="box">
                     <h1 className="text-[32px] lg:text-[36px]">16+</h1>
                     <h2 className="text-[20px] font-[300]">
                        Years of Experience
                     </h2>
                  </div>
                  <div className="box">
                     <h1 className="text-[32px] lg:text-[36px]">200</h1>
                     <h2 className="text-[20px] font-[300]">Award Gained</h2>
                  </div>
                  <div className="box">
                     <h1 className="text-[32px] lg:text-[36px]">2000+</h1>
                     <h2 className="text-[20px] font-[300]">Property Ready</h2>
                  </div>
               </div>
            </div>
         </div>
         <div className="flex-[2] bg-[#fcf5f3] relative hidden md:flex items-center">
            <img
               src="/bg.png"
               alt=""
               className="w-[105%] lg:w-[110%] absolute right-0"
            />
         </div>
      </div>
   );
}

export default HomePage;
