import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function Login() {
   const [error, setError] = useState("");
   const [isLoading, setIsLoading] = useState(false);

   const { updateUser } = useContext(AuthContext);

   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      setError("");
      const formData = new FormData(e.target);

      const username = formData.get("username");
      const password = formData.get("password");

      try {
         const res = await apiRequest.post("/auth/login", {
            username,
            password,
         });

         updateUser(res.data);

         navigate("/");
      } catch (err) {
         setError(err.response.data.message);
      } finally {
         setIsLoading(false);
      }
   };
   return (
      <div className="flex h-full">
         <div className=" flex-[3] h-full flex justify-center items-center ">
            <form
               onSubmit={handleSubmit}
               className=" flex flex-col gap-[20px] "
            >
               <h1>Welcome back</h1>
               <input
                  name="username"
                  required
                  minLength={3}
                  maxLength={20}
                  type="text"
                  placeholder="Username"
                  className=" p-5 border-gray-100 rounded-md "
               />
               <input
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  className=" p-5 border-gray-100 rounded-md "
               />
               <button
                  disabled={isLoading}
                  className="p-5 rounded-md bg-teal-600 text-white font-bold cursor-pointer disabled:bg-teal-100 disabled:cursor-not-allowed"
               >
                  Login
               </button>
               {error && <span>{error}</span>}
               <Link to="/register">{"Don't"} you have an account?</Link>
            </form>
         </div>
         <div className=" flex-[2] flex items-center justify-center ">
            <img src="/bg.png" alt="" className="w-full" />
         </div>
      </div>
   );
}

export default Login;
