import { Link } from "react-router-dom";

function Card({ item }) {
   return (
      <div className="flex gap-[20px]">
         <Link
            to={`/${item.id}`}
            className="flex-[2] h-[200px] hidden md:block"
         >
            <img
               src={item.img}
               alt=""
               className="w-full h-full object-cover rounded-[10px]"
            />
         </Link>
         <div className="flex-[3] flex flex-col justify-between gap-[10px]">
            <h2 className="text-[20px] font-[600] text-[#444] transition hover:text-black hover:scale-105">
               <Link to={`/${item.id}`}>{item.title}</Link>
            </h2>
            <p className="text-[14px] flex items-center gap-[5px] text-[#888]">
               <img src="/pin.png" alt="" className="h-[16px] w-[16px]" />
               <span>{item.address}</span>
            </p>
            <p className="text-[20px] font-[300] p-[5px] rounded-[5px] bg-yellow-400 bg-opacity-50 w-max">
               $ {item.price}
            </p>
            <div className="flex justify-between gap-[10px]">
               <div className="flex gap-[20px] text-[14px] ">
                  <div className="flex justify-center gap-[5px] bg-slate-100 p-[5px] rounded-[5px]">
                     <img src="/bed.png" alt="" className="h-[16px] w-[16px]" />
                     <span>{item.bedroom} bedroom</span>
                  </div>
                  <div className="flex justify-center gap-[5px] bg-slate-100 p-[5px] rounded-[5px]">
                     <img
                        src="/bath.png"
                        alt=""
                        className="h-[16px] w-[16px]"
                     />
                     <span>{item.bathroom} bathroom</span>
                  </div>
               </div>
               <div className="flex gap-[20px]">
                  <div className="border border-gray-400 hover:bg-gray-200 rounded-[5px] cursor-pointer flex items-center justify-center py-[2px] px-[5px]">
                     <img
                        src="/save.png"
                        alt=""
                        className="h-[16px] w-[16px]"
                     />
                  </div>
                  <div className="border border-gray-400 hover:bg-gray-200 rounded-[5px] cursor-pointer flex items-center justify-center py-[2px] px-[5px]">
                     <img
                        src="/chat.png"
                        alt=""
                        className="h-[16px] w-[16px]"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Card;
