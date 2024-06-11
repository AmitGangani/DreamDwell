import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

function ListPage() {
   const data = useLoaderData();

   return (
      <div className="flex h-full">
         <div className="flex-[1] h-[calc(100vh-100px)] bg-red-300 hidden md:block rounded-[20px] sticky top-[50px]">
            <Suspense fallback={<p>Loading...</p>}>
               <Await
                  resolve={data.postResponse}
                  errorElement={<p>Error loading posts!</p>}
               >
                  {(postResponse) => <Map items={postResponse.data} />}
               </Await>
            </Suspense>
         </div>
         <div className="flex-[3] h-full">
            <div className="h-full sm:pl-[50px] flex flex-col gap-[50px]  pb-[50px]">
               <Filter />
               <Suspense fallback={<p>Loading...</p>}>
                  <Await
                     resolve={data.postResponse}
                     errorElement={<p>Error loading posts!</p>}
                  >
                     {(postResponse) =>
                        postResponse.data.map((post) => (
                           <Card key={post.id} item={post} />
                        ))
                     }
                  </Await>
               </Suspense>
            </div>
         </div>
      </div>
   );
}

export default ListPage;
