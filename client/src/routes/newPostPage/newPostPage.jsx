import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

function NewPostPage() {
   const [value, setValue] = useState("");
   const [images, setImages] = useState([]);
   const [error, setError] = useState("");

   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const inputs = Object.fromEntries(formData);

      try {
         const res = await apiRequest.post("/posts", {
            postData: {
               title: inputs.title,
               price: parseInt(inputs.price),
               address: inputs.address,
               city: inputs.city,
               bedroom: parseInt(inputs.bedroom),
               bathroom: parseInt(inputs.bathroom),
               type: inputs.type,
               property: inputs.property,
               latitude: inputs.latitude,
               longitude: inputs.longitude,
               images: images,
            },
            postDetail: {
               desc: value,
               utilities: inputs.utilities,
               pet: inputs.pet,
               income: inputs.income,
               size: parseInt(inputs.size),
               school: parseInt(inputs.school),
               bus: parseInt(inputs.bus),
               restaurant: parseInt(inputs.restaurant),
            },
         });
         navigate("/" + res.data.id);
      } catch (err) {
         console.log(err);
         setError(error);
      }
   };

   return (
      <div className="h-full flex">
         <div className=" flex-[3] overflow-scroll ">
            <h1>Add New Post</h1>
            <div className=" mt-7 mr-12 mb-24 ml-0 ">
               <form
                  onSubmit={handleSubmit}
                  className="flex justify-between flex-wrap gap-5"
               >
                  <div className=" w-1/3 flex flex-col gap-1 ">
                     <label htmlFor="title">Title</label>
                     <input
                        id="title"
                        name="title"
                        type="text"
                        className="p-5 rounded-md border-gray-400"
                     />
                  </div>
                  <div className="w-1/3 flex flex-col gap-1">
                     <label htmlFor="price">Price</label>
                     <input
                        id="price"
                        name="price"
                        type="number"
                        className=" p-5 rounded-md border-gray-400"
                     />
                  </div>
                  <div className="w-1/3 flex flex-col gap-1">
                     <label htmlFor="address">Address</label>
                     <input
                        id="address"
                        name="address"
                        type="text"
                        className=" p-5 rounded-md border-gray-400"
                     />
                  </div>
                  <div className=" flex flex-col gap-1 w-full h-[320px]">
                     <label htmlFor="desc">Description</label>
                     <ReactQuill
                        theme="snow"
                        onChange={setValue}
                        value={value}
                     />
                  </div>
                  <div className="w-1/3 flex flex-col gap-1">
                     <label htmlFor="city">City</label>
                     <input
                        id="city"
                        name="city"
                        type="text"
                        className=" p-5 rounded-md border-gray-400"
                     />
                  </div>
                  <div className="w-1/3 flex flex-col gap-1">
                     <label htmlFor="bedroom">Bedroom Number</label>
                     <input
                        min={1}
                        id="bedroom"
                        name="bedroom"
                        type="number"
                        className=" p-5 rounded-md border-gray-400"
                     />
                  </div>
                  <div className="w-1/3 flex flex-col gap-1">
                     <label htmlFor="bathroom">Bathroom Number</label>
                     <input
                        min={1}
                        id="bathroom"
                        name="bathroom"
                        type="number"
                        className=" p-5 rounded-md border-gray-400"
                     />
                  </div>
                  <div className="w-1/3 flex flex-col gap-1">
                     <label htmlFor="latitude">Latitude</label>
                     <input
                        id="latitude"
                        name="latitude"
                        type="text"
                        className=" p-5 rounded-md border-gray-400"
                     />
                  </div>
                  <div className="w-1/3 flex flex-col gap-1">
                     <label htmlFor="longitude">Longitude</label>
                     <input
                        id="longitude"
                        name="longitude"
                        type="text"
                        className=" p-5 rounded-md border-gray-400"
                     />
                  </div>
                  <div className="w-1/3 flex flex-col gap-1">
                     <label htmlFor="type">Type</label>
                     <select name="type" className="p-5">
                        <option value="rent" defaultChecked>
                           Rent
                        </option>
                        <option value="buy">Buy</option>
                     </select>
                  </div>
                  <div className="w-1/3 flex flex-col gap-1">
                     <label htmlFor="type">Property</label>
                     <select name="property" className="p-5">
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                     </select>
                  </div>

                  <div className="w-1/3 flex flex-col gap-1">
                     <label htmlFor="utilities">Utilities Policy</label>
                     <select name="utilities" className="p-5">
                        <option value="owner">Owner is responsible</option>
                        <option value="tenant">Tenant is responsible</option>
                        <option value="shared">Shared</option>
                     </select>
                  </div>
                  <div className="w-1/3 flex flex-col gap-1">
                     <label htmlFor="pet">Pet Policy</label>
                     <select name="pet" className="p-5">
                        <option value="allowed">Allowed</option>
                        <option value="not-allowed">Not Allowed</option>
                     </select>
                  </div>
                  <div className="w-1/3 flex flex-col gap-1">
                     <label htmlFor="income">Income Policy</label>
                     <input
                        id="income"
                        name="income"
                        type="text"
                        placeholder="Income Policy"
                        className=" p-5 rounded-md border-gray-400"
                     />
                  </div>
                  <div className="w-1/3 flex flex-col gap-1">
                     <label htmlFor="size">Total Size (sqft)</label>
                     <input
                        min={0}
                        id="size"
                        name="size"
                        type="number"
                        className=" p-5 rounded-md border-gray-400"
                     />
                  </div>
                  <div className="w-1/3 flex flex-col gap-1">
                     <label htmlFor="school">School</label>
                     <input
                        min={0}
                        id="school"
                        name="school"
                        type="number"
                        className=" p-5 rounded-md border-gray-400"
                     />
                  </div>
                  <div className="w-1/3 flex flex-col gap-1">
                     <label htmlFor="bus">bus</label>
                     <input
                        min={0}
                        id="bus"
                        name="bus"
                        type="number"
                        className=" p-5 rounded-md border-gray-400"
                     />
                  </div>
                  <div className="w-1/3 flex flex-col gap-1">
                     <label htmlFor="restaurant">Restaurant</label>
                     <input
                        min={0}
                        id="restaurant"
                        name="restaurant"
                        type="number"
                        className=" p-5 rounded-md border-gray-400"
                     />
                  </div>
                  <Button className="sendButton">Add</Button>
                  {error && <span>error</span>}
               </form>
            </div>
         </div>
         <div className=" flex-[2] bg-red-100 flex flex-col gap-5 items-center justify-center ">
            {images.map((image, index) => (
               <img
                  src={image}
                  key={index}
                  alt=""
                  className=" w-1/2 h-[180px] object-cover rounded-md "
               />
            ))}
            <UploadWidget
               uwConfig={{
                  multiple: true,
                  cloudName: "amit28",
                  uploadPreset: "estate",
                  folder: "posts",
               }}
               setState={setImages}
            />
         </div>
      </div>
   );
}

export default NewPostPage;
