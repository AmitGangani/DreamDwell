import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from "../ui/select";

function Filter() {
   return (
      <div className="flex flex-col gap-[10px]">
         <h1 className="font-[300] text-[24px]">
            Search results for <b>London</b>
         </h1>
         <div className="top">
            <div className="">
               <Label htmlFor="city">Location</Label>
               <Input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City Location"
                  className="w-[95%] mx-auto"
               />
            </div>
         </div>
         <div className="flex justify-between flex-wrap  w-[95%] mx-auto items-center">
            <div className="item">
               <Select>
                  <Label htmlFor="type">Type</Label>
                  <SelectTrigger className="">
                     <SelectValue placeholder="Type" name="type" id="type" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        <SelectLabel>Any</SelectLabel>
                        <SelectItem value="buy">Buy</SelectItem>
                        <SelectItem value="rent">Rent</SelectItem>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
            <div className="item">
               <Select>
                  <Label htmlFor="property">Property</Label>
                  <SelectTrigger className="">
                     <SelectValue
                        placeholder="Property"
                        name="property"
                        id="property"
                     />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        <SelectLabel>Any</SelectLabel>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="land">Land</SelectItem>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
            <div className="item">
               <Label htmlFor="minPrice">Min Price</Label>
               <Input
                  type="number"
                  id="minPrice"
                  name="minPrice"
                  placeholder="Min Price"
               />
            </div>
            <div className="item">
               <Label htmlFor="maxPrice">Max Price</Label>
               <Input
                  type="number"
                  id="maxPrice"
                  name="maxPrice"
                  placeholder="Max Price"
               />
            </div>
            <div className="item">
               <Label htmlFor="bedroom">Bedroom</Label>
               <Input
                  type="text"
                  id="bedroom"
                  name="bedroom"
                  placeholder="any"
               />
            </div>
            <Button>
               <img src="/search.png" alt="" />
            </Button>
         </div>
      </div>
   );
}

export default Filter;
