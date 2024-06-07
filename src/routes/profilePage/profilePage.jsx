import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";

function ProfilePage() {
   return (
      <div className="flex h-full flex-col md:flex-row overflow-scroll">
         <div className=" flex-none md:flex-[2] bg-[#fcf5f3] h-max md:h-full ">
            <div className=" py-0 px-[20px] h-full ">
               <Chat />
            </div>
         </div>
         <div className="flex-none md:flex-[3] h-max overflow-y-scroll  pb-[50px]">
            <div className="pl-[50px] flex flex-col gap-[50px]">
               <div className="flex justify-between items-center">
                  <h1 className="font-[300]">User Information</h1>
                  <button className="py-3 px-6 bg-[#fece51] cursor-pointer border-none">
                     Update Profile
                  </button>
               </div>
               <div className="flex flex-col gap-[20px]">
                  <span className="flex items-center gap-[20px]">
                     Avatar:
                     <img
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        className="h-10 w-10 rounded-full object-cover"
                     />
                  </span>
                  <span className="flex items-center gap-[20px]">
                     Username: <b>John Doe</b>
                  </span>
                  <span className="flex items-center gap-[20px]">
                     E-mail: <b>john@gmail.com</b>
                  </span>
               </div>
               <div className="flex justify-between items-center">
                  <h1 className="font-[300]">My List</h1>
                  <button className="py-3 px-6 bg-[#fece51] cursor-pointer border-none">
                     Create New Post
                  </button>
               </div>
               <List />
               <div className="flex justify-between items-center">
                  <h1 className="font-[300]">Saved List</h1>
               </div>
               <List />
            </div>
         </div>
      </div>
   );
}

export default ProfilePage;
