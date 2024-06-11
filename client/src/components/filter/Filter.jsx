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
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

function Filter() {
   const [searchParams, setSearchParams] = useSearchParams();
   const [query, setQuery] = useState({
      type: searchParams.get("type") || "",
      city: searchParams.get("city") || "",
      property: searchParams.get("property") || "",
      minPrice: searchParams.get("minPrice") || "",
      maxPrice: searchParams.get("maxPrice") || "",
      bedroom: searchParams.get("bedroom") || "",
   });

   const handleChange = (e) => {
      setQuery({
         ...query,
         [e.target.name]: e.target.value,
      });
   };

   const handleFilter = () => {
      setSearchParams(query);
   };

   return (
      <div className="flex flex-col gap-[10px]">
         <h1 className="font-[300] text-[24px]">
            Search results for <b>{searchParams.get("city")}</b>
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
                  defaultValue={query.city}
               />
            </div>
         </div>
         <div className="flex justify-between flex-wrap  w-[95%] mx-auto items-center">
            <div className="item">
               <Select>
                  <Label htmlFor="type">Type</Label>
                  <SelectTrigger className="">
                     <SelectValue
                        placeholder="Type"
                        name="type"
                        id="type"
                        onChange={handleChange}
                        defaultValue={query.type}
                     />
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
                        onChange={handleChange}
                        defaultValue={query.property}
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
                  onChange={handleChange}
                  defaultValue={query.minPrice}
               />
            </div>
            <div className="item">
               <Label htmlFor="maxPrice">Max Price</Label>
               <Input
                  type="number"
                  id="maxPrice"
                  name="maxPrice"
                  placeholder="Max Price"
                  onChange={handleChange}
                  defaultValue={query.maxPrice}
               />
            </div>
            <div className="item">
               <Label htmlFor="bedroom">Bedroom</Label>
               <Input
                  type="text"
                  id="bedroom"
                  name="bedroom"
                  placeholder="any"
                  onChange={handleChange}
                  defaultValue={query.bedroom}
               />
            </div>
            <Button onClick={handleFilter}>
               <img src="/search.png" alt="" />
            </Button>
         </div>
      </div>
   );
}

export default Filter;
