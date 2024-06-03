import { Link } from "react-router-dom";
import { Button } from "./../ui/button";

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "./../ui/dropdown-menu";

function Navbar() {
   const user = true;

   return (
      <nav className="h-[100px] flex justify-between items-center">
         <div className="flex-[3] flex items-center gap-[50px]">
            <a
               href="/"
               className="transition hover:scale-105 font-bold text-[20px] flex items-center gap-2.5"
            >
               <img src="/logo.png" alt="" className="w-7 min-w-7 " />
               <span className="sm:hidden md:block">DreamDwell</span>
            </a>
            <a href="/" className="transition hidden sm:inline hover:scale-105">
               Home
            </a>
            <a href="/" className="transition hidden sm:inline hover:scale-105">
               About
            </a>
            <a href="/" className="transition hidden sm:inline hover:scale-105">
               Contact
            </a>
            <a href="/" className="transition hidden sm:inline hover:scale-105">
               Agents
            </a>
         </div>
         <div className="flex-[2] flex items-center justify-end h-full">
            {user ? (
               <div className="flex items-center font-bold">
                  <img
                     src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                     alt=""
                     className="w-10 h-10 rounded-full object-cover mr-5"
                  />
                  <span className="hidden sm:inline">John Doe</span>
                  <Link
                     to="/profile"
                     className="py-3 px-6 bg-yellow-400 cursor-pointer border-none relative"
                  >
                     <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                        3
                     </div>
                     <span>Profile</span>
                  </Link>
               </div>
            ) : (
               <>
                  <Button
                     variant="secondary"
                     className="transition hidden sm:inline-block hover:scale-105 m-1"
                  >
                     Sign in
                  </Button>

                  <Button className="transition hidden sm:inline-block hover:scale-105 m-1">
                     Sign up
                  </Button>
               </>
            )}
            {/* <div className="sm:hidden z-[999]">
               <img
                  src="/menu.png"
                  alt=""
                  className="w-9 h-9 cursor-pointer shrink-0"
                  onClick={() => setOpen((prev) => !prev)}
               />
            </div> */}
            <DropdownMenu>
               <DropdownMenuTrigger className="sm:hidden">
                  <Button>O</Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent>
                  <DropdownMenuItem>
                     <a href="/">Home</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                     <a href="/">About</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                     <a href="/">Contact</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                     <a href="/">Agents</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                     <a href="/">Sign in</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                     <a href="/">Sign up</a>
                  </DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
         </div>
      </nav>
   );
}

export default Navbar;
