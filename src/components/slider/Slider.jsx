import { useState } from "react";

function Slider({ images }) {
   const [imageIndex, setImageIndex] = useState(null);

   const changeSlide = (direction) => {
      if (direction === "left") {
         if (imageIndex === 0) {
            setImageIndex(images.length - 1);
         } else {
            setImageIndex(imageIndex - 1);
         }
      } else {
         if (imageIndex === images.length - 1) {
            setImageIndex(0);
         } else {
            setImageIndex(imageIndex + 1);
         }
      }
   };

   return (
      <div className="w-full h-[280px] sm:h-[350px] flex gap-[20px]">
         {imageIndex !== null && (
            <div className="absolute w-screen h-screen top-0 left-0 bg-black flex justify-between items-center  z-[9999]">
               <div
                  className="flex-1 flex justify-center items-center"
                  onClick={() => changeSlide("left")}
               >
                  <img
                     src="/arrow.png"
                     alt=""
                     className="w-[20px] sm:w-[30px] md:w-[50px]"
                  />
               </div>
               <div className="flex-[10] ">
                  <img
                     src={images[imageIndex]}
                     alt=""
                     className="h-full w-full object-cover"
                  />
               </div>
               <div
                  className="flex-1 flex justify-center items-center"
                  onClick={() => changeSlide("right")}
               >
                  <img
                     src="/arrow.png"
                     className="w-[20px] sm:w-[30px] md:w-[50px] rotate-180"
                     alt=""
                  />
               </div>
               <div
                  className="absolute top-0 right-0 text-white text-[36px] font-bold  p-[50px] cursor-pointer "
                  onClick={() => setImageIndex(null)}
               >
                  X
               </div>
            </div>
         )}
         <div className="flex-[2] sm:flex-[3] ">
            <img
               src={images[0]}
               alt=""
               className="h-full w-full object-cover rounded-[10px] cursor-pointer"
               onClick={() => setImageIndex(0)}
            />
         </div>
         <div className="flex-1 flex flex-col justify-between gap-[20px]">
            {images.slice(1).map((image, index) => (
               <img
                  src={image}
                  alt=""
                  key={index}
                  className="h-[80px] sm:h-[100px] w-full object-cover rounded-[10px] cursor-pointer"
                  onClick={() => setImageIndex(index + 1)}
               />
            ))}
         </div>
      </div>
   );
}

export default Slider;
