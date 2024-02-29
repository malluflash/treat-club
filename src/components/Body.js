import React from "react";
import RestaurantCard from "./RestaurantCard";
import restaurants from "../Utils/mockData.js";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Clicked");
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} /> // Using keys is very important. Using index as a key is a bad practice. Unique ID is recommended.
        ))}
      </div>
    </div>
  );
};

export default Body;
