import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

function Pin({ item }) {
   return (
      <Marker position={[item.latitude, item.longitude]}>
         <Popup>
            <div className="flex gap-[20px]">
               <img
                  src={item.img}
                  alt=""
                  className="h-[48px] w-[64px] object-cover rounded-[5px]"
               />
               <div className="flex flex-col justify-between">
                  <Link to={`/${item.id}`}>{item.title}</Link>
                  <span>{item.bedroom} bedroom</span>
                  <b>$ {item.price}</b>
               </div>
            </div>
         </Popup>
      </Marker>
   );
}

export default Pin;
