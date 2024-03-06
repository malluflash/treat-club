import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
// import restaurants from "../Utils/mockData.js";
import Shimmer from "./Shimmer";

const Body = () => {
  // State Variable
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.961865229894311&lng=77.71057728677988"
    );

    const swiggyJson = await data.json();

    console.log(swiggyJson);
    setResList(swiggyJson.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants
      )
  };

  const filteredList = resList.filter((res) => res.info.avgRating > 4.2);

  const handleClick = () => {
    setResList(filteredList);
  };

  return resList.length === 0 ? ( <Shimmer/> ) : (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleClick}>
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} /> // Using keys is very important. Using index as a key is a bad practice. Unique ID is recommended.
        ))}
      </div>
    </div>
  );
};

export default Body;
