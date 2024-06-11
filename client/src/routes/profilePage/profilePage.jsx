import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import { Suspense, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import apiRequest from "@/lib/apiRequest";
import { Button } from "@/components/ui/button";

function ProfilePage() {
   const data = useLoaderData();

   const { updateUser, currentUser } = useContext(AuthContext);

   const navigate = useNavigate();

   const handleLogout = async () => {
      try {
         await apiRequest.post("/auth/logout");
         updateUser(null);
         navigate("/");
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <div className="flex h-[calc(100vh-100px)] flex-col md:flex-row overflow-y-scroll">
         <div className=" flex-none md:flex-[2] bg-[#fcf5f3] h-max md:h-[calc(100vh-100px)] ">
            <div className=" py-0 px-[20px] md:h-[calc(100vh-100px)] ">
               <Suspense fallback={<p>Loading...</p>}>
                  <Await
                     resolve={data.chatResponse}
                     errorElement={<p>Error loading chats!</p>}
                  >
                     {(chatResponse) => <Chat chats={chatResponse.data} />}
                  </Await>
               </Suspense>
            </div>
         </div>
         <div className="flex-none md:flex-[3] h-[calc(100vh-100px)] overflow-y-scroll  pb-[50px]">
            <div className="pl-[50px] flex flex-col gap-[50px] md:h-[calc(100vh-100px)]">
               <div className="flex justify-between items-center">
                  <h1 className="font-[300]">User Information</h1>
                  <Link to="/profile/update">
                     <Button>Update Profile</Button>
                  </Link>
               </div>
               <div className="flex flex-col gap-[20px]">
                  <span className="flex items-center gap-[20px]">
                     Avatar:
                     <img
                        src={currentUser.avatar || "noavatar.jpg"}
                        alt=""
                        className="h-10 w-10 rounded-full object-cover"
                     />
                  </span>
                  <span className="flex items-center gap-[20px]">
                     Username: <b>{currentUser.username}</b>
                  </span>
                  <span className="flex items-center gap-[20px]">
                     E-mail: <b>{currentUser.email}</b>
                  </span>
                  <Button onClick={handleLogout}>Logout</Button>
               </div>
               <div className="flex justify-between items-center">
                  <h1 className="font-[300]">My List</h1>
                  <Link to="/add">
                     <Button>Create New Post</Button>
                  </Link>
               </div>
               <Suspense fallback={<p>Loading...</p>}>
                  <Await
                     resolve={data.postResponse}
                     errorElement={<p>Error loading posts!</p>}
                  >
                     {(postResponse) => (
                        <List posts={postResponse.data.userPosts} />
                     )}
                  </Await>
               </Suspense>
               <div className="flex justify-between items-center">
                  <h1 className="font-[300]">Saved List</h1>
               </div>
               <Suspense fallback={<p>Loading...</p>}>
                  <Await
                     resolve={data.postResponse}
                     errorElement={<p>Error loading posts!</p>}
                  >
                     {(postResponse) => (
                        <List posts={postResponse.data.savedPosts} />
                     )}
                  </Await>
               </Suspense>
            </div>
         </div>
      </div>
   );
}

export default ProfilePage;
