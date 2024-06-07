import Slider from "../../components/slider/Slider";
import { Button } from "@/components/ui/button";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummydata";

function SinglePage() {
   return (
      <div className="flex h-full md:flex-row flex-col ">
         <div className="md:flex-[3] flex-none h-max mb-[50px] md:mb-0 md:h-full ">
            <div className="pr-0 md:pr-[20px] lg:pr-[50px]">
               <Slider images={singlePostData.images} />
               <div className="mt-[50px]">
                  <div className="flex justify-between sm:flex-row sm:gap-0 flex-col gap-[20px]">
                     <div className="flex flex-col gap-[20px]">
                        <h1 className="font-[400]">{singlePostData.title}</h1>
                        <div className="flex gap-[5px] items-center text-[#888] font-[14px]">
                           <img src="/pin.png" alt="" className="h-4 w-4" />
                           <span>{singlePostData.address}</span>
                        </div>
                        <div className="p-[5px] bg-yellow-400 opacity-40 rounded-[5px] w-max text-[20px] font-[300]">
                           $ {singlePostData.price}
                        </div>
                     </div>
                     <div className="flex flex-col justify-between items-center gap-[20px] py-[20px] px-[50px] sm:py-[0px] sm:px-[50px]">
                        <img
                           src={userData.img}
                           alt=""
                           className="h-[50px] w-[50px] rounded-full object-cover"
                        />
                        <span>{userData.name}</span>
                     </div>
                  </div>
                  <div className="mt-[50px] text-[#555] leading-[20px]">
                     {singlePostData.description}
                  </div>
               </div>
            </div>
         </div>
         <div className="md:flex-[2] flex-none bg-[#fcf5f3] md:h-full h-max mb-[50px] md:mb-0 ">
            <div className="p-[20px] md:py-0 md:px-[20px] flex flex-col gap-[20px]">
               <p className="font-bold text-[18px] mb-[10px]">General</p>
               <div className="flex flex-col gap-[20px] py-[20px] px-[10px] bg-white rounded-[10px]">
                  <div className="flex items-center gap-[10px]">
                     <img
                        src="/utility.png"
                        alt=""
                        className="h-6 w-6 bg-yellow-300 opacity-20"
                     />
                     <div className="featureText">
                        <span className="font-bold">Utilities</span>
                        <p className="text-[14px]">Renter is responsible</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-[10px]">
                     <img
                        src="/pet.png"
                        alt=""
                        className="h-6 w-6 bg-yellow-300 opacity-20"
                     />
                     <div className="featureText">
                        <span className="font-bold">Pet Policy</span>
                        <p className="text-[14px]">Pets Allowed</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-[10px]">
                     <img
                        src="/fee.png"
                        alt=""
                        className="h-6 w-6 bg-yellow-300 opacity-20"
                     />
                     <div className="featureText">
                        <span className="font-bold">Property Fees</span>
                        <p className="text-[14px]">
                           Must have 3x the rent in total household income
                        </p>
                     </div>
                  </div>
               </div>
               <p className="font-bold text-[18px] mb-[10px]">Sizes</p>
               <div className="flex justify-between text-[12px]">
                  <div className="flex items-center gap-[10px] bg-white p-[10px] rounded-[5px]">
                     <img src="/size.png" alt="" className="h-6 w-6" />
                     <span>80 sqft</span>
                  </div>
                  <div className="flex items-center gap-[10px] bg-white p-[10px] rounded-[5px]">
                     <img src="/bed.png" alt="" className="h-6 w-6" />
                     <span>2 beds</span>
                  </div>
                  <div className="flex items-center gap-[10px] bg-white p-[10px] rounded-[5px]">
                     <img src="/bath.png" alt="" className="h-6 w-6" />
                     <span>1 bathroom</span>
                  </div>
               </div>
               <p className="font-bold text-[18px] mb-[10px]">Nearby Places</p>
               <div className="flex justify-between py-[20px] px-[10px] bg-white rounded-[10px]">
                  <div className="flex items-center gap-[10px]">
                     <img
                        src="/school.png"
                        alt=""
                        className="h-6 w-6 bg-yellow-300 opacity-20"
                     />
                     <div className="featureText">
                        <span className="font-bold">School</span>
                        <p className="text-[14px]">250m away</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-[10px]">
                     <img
                        src="/pet.png"
                        alt=""
                        className="h-6 w-6 bg-yellow-300 opacity-20"
                     />
                     <div className="featureText">
                        <span className="font-bold">Bus Stop</span>
                        <p className="text-[14px]">100m away</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-[10px]">
                     <img
                        src="/fee.png"
                        alt=""
                        className="h-6 w-6 bg-yellow-300 opacity-20"
                     />
                     <div className="featureText">
                        <span className="font-bold">Restaurant</span>
                        <p className="text-[14px]">200m away</p>
                     </div>
                  </div>
               </div>
               <p className="font-bold text-[18px] mb-[10px]">Location</p>
               <div className="w-full h-[200px]">
                  <Map items={[singlePostData]} />
               </div>
               <div className="flex justify-between mb-[50px]">
                  <Button variant="secondary" className="gap-[5px]">
                     <img src="/chat.png" alt="" className="h-6 w-6" />
                     Send a Message
                  </Button>
                  <Button variant="secondary" className="gap-[5px] ">
                     <img src="/save.png" alt="" className="h-6 w-6" />
                     Save the Place
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default SinglePage;
