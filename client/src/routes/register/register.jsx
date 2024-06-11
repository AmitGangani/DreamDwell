import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";

function Register() {
   const [error, setError] = useState("");
   const [isLoading, setIsLoading] = useState(false);

   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      setIsLoading(true);
      const formData = new FormData(e.target);

      const username = formData.get("username");
      const email = formData.get("email");
      const password = formData.get("password");

      try {
         const res = await apiRequest.post("/auth/register", {
            username,
            email,
            password,
         });

         navigate("/login");
      } catch (err) {
         setError(err.response.data.message);
      } finally {
         setIsLoading(false);
      }
   };
   return (
      <div className="h-full flex">
         <div className="flex-[3] h-full flex items-center justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
               <h1>Create an Account</h1>
               <input
                  name="username"
                  type="text"
                  placeholder="Username"
                  className=" p-5 border-gray-100 rounded-md "
               />
               <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  className=" p-5 border-gray-100 rounded-md "
               />
               <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className=" p-5 border-gray-100 rounded-md "
               />
               <button
                  disabled={isLoading}
                  className="p-5 rounded-md bg-teal-600 text-white font-bold cursor-pointer disabled:bg-teal-100 disabled:cursor-not-allowed"
               >
                  Register
               </button>
               {error && <span>{error}</span>}
               <Link to="/login">Do you have an account?</Link>
            </form>
         </div>
         <div className=" flex-[2] flex items-center justify-center ">
            <img src="/bg.png" alt="" />
         </div>
      </div>
   );
}

export default Register;
