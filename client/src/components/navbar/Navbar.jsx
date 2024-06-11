import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button } from "./../ui/button";

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "./../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Menu } from "lucide-react";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useNotificationStore } from "@/lib/notificationStore";

function Navbar() {
   const [open, setOpen] = useState(false);

   const { currentUser } = useContext(AuthContext);

   const fetch = useNotificationStore((state) => state.fetch);
   const number = useNotificationStore((state) => state.number);

   if (currentUser) fetch();
   const navigate = useNavigate();
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
            {currentUser ? (
               <div className="flex items-center font-bold gap-4">
                  <Avatar>
                     <AvatarImage src={currentUser.avatar || "/noavatar.jpg"} />
                     <AvatarFallback>{currentUser.username}</AvatarFallback>
                  </Avatar>
                  <Link to="/profile" className="relative hidden sm:block">
                     {number > 0 && (
                        <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                           {number}
                        </div>
                     )}
                     <Button className="bg-yellow-400 ">Profile</Button>
                  </Link>
               </div>
            ) : (
               <>
                  <Button
                     variant="secondary"
                     className="transition hidden sm:inline-block hover:scale-105 m-1"
                     onClick={() => {
                        navigate("/login");
                     }}
                  >
                     Sign in
                  </Button>

                  <Button
                     className="transition hidden sm:inline-block hover:scale-105 m-1"
                     onClick={() => {
                        navigate("/register");
                     }}
                  >
                     Sign up
                  </Button>
               </>
            )}
            <DropdownMenu>
               <DropdownMenuTrigger className="sm:hidden">
                  <Button className="rounded-full p-2">
                     <Menu />
                  </Button>
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
