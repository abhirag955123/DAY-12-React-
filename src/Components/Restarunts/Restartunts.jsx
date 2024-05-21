import React, { useState } from "react";
import Data from "./Data.json";
import Card from "./Card";

function Restartunts() {
  const [data, setData] = useState(Data);
  // const[text , setText] = useState("");

  const filterData = (name) => {
    let filter = Data.filter((e) => {
      if (e.name.toLowerCase().includes(name.trim())) {
        return true;
      } else {
        return false;
      }
    });
    setData(filter);
  };

  const updateRating = (e) => {
    let obj = [...data];

    obj[0].rating = e.target.value;
    console.log(obj);
    setData(obj);
  };
  return (
    <div className=" mt-8 mx-8">
      <div className="flex justify-between items-center ">
        <div className="mb-4 mt-24 mx-8">
          <input
            type="text"
            // value={text}
            placeholder="Search restaurants..."
            className="border rounded p-2 "
            onChange={(e) => filterData(e.target.value)}
          />
        </div>
        <div className="mb-4 mt-24 mx-8">
          <label htmlFor="rating" className="mr-2">
            Minimum Rating:
          </label>
          <input
            type="number"
            name=""
            id="rating"
            min={1}
            max={5}
            step={1}
            className="border rounded p-2"
            onChange={updateRating}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 px-6 pb-9">
        {data.map((e, i) => {
          return (
            <Card
              key={i}
              name={e.name}
              code={e.code}
              address={e.address}
              cuisine={e.cuisine}
              ratings={e.rating}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Restartunts;
