import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { Button } from "@/components/ui/button";

function ProfileUpdatePage() {
   const { currentUser, updateUser } = useContext(AuthContext);
   const [error, setError] = useState("");
   const [avatar, setAvatar] = useState([]);

   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);

      const { username, email, password } = Object.fromEntries(formData);

      try {
         const res = await apiRequest.put(`/users/${currentUser.id}`, {
            username,
            email,
            password,
            avatar: avatar[0],
         });
         updateUser(res.data);
         navigate("/profile");
      } catch (err) {
         console.log(err);
         setError(err.response.data.message);
      }
   };

   return (
      <div className="h-full flex">
         <div className=" flex-[3] flex items-center justify-center ">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
               <h1>Update Profile</h1>
               <div className=" flex flex-col gap-1 ">
                  <label htmlFor="username">Username</label>
                  <input
                     id="username"
                     name="username"
                     type="text"
                     defaultValue={currentUser.username}
                     className="p-5 rounded-md border-gray-400"
                  />
               </div>
               <div className="flex flex-col gap-1">
                  <label htmlFor="email">Email</label>
                  <input
                     id="email"
                     name="email"
                     type="email"
                     defaultValue={currentUser.email}
                     className="p-5 rounded-md border-gray-400"
                  />
               </div>
               <div className="flex flex-col gap-1">
                  <label htmlFor="password">Password</label>
                  <input id="password" name="password" type="password" />
               </div>
               <Button>Update</Button>
               {error && <span>error</span>}
            </form>
         </div>
         <div className=" flex-[2] bg-red-100 flex flex-col gap-5 items-center justify-center ">
            <img
               src={avatar[0] || currentUser.avatar || "/noavatar.jpg"}
               alt=""
               className=" w-1/2 object-cover "
            />
            <UploadWidget
               uwConfig={{
                  cloudName: "amit28",
                  uploadPreset: "estate",
                  multiple: false,
                  maxImageFileSize: 2000000,
                  folder: "avatars",
               }}
               setState={setAvatar}
            />
         </div>
      </div>
   );
}

export default ProfileUpdatePage;
