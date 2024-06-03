import { listData } from "../../lib/dummydata";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";

function ListPage() {
   const data = listData;

   return (
      <div className="flex h-full">
         <div className="flex-[3] h-full">
            <div className="h-full pr-[50px] flex flex-col gap-[50px]  pb-[50px]">
               <Filter />
               {data.map((item) => (
                  <Card key={item.id} item={item} />
               ))}
            </div>
         </div>
         <div className="flex-[2] h-[calc(100vh-100px)] bg-red-300 hidden md:block rounded-[20px] sticky top-[50px]">
            <Map items={data} />
         </div>
      </div>
   );
}

export default ListPage;
