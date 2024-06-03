import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
   return (
      <div className="h-full max-w-[640px] sm:max-w-[768px] md:max-w-[1280px] lg:max-w-[1366px] mx-auto px-[20px] flex flex-col">
         <div className="navbar">
            <Navbar />
         </div>
         <div className="">
            <Outlet />
         </div>
      </div>
   );
}

export default Layout;
