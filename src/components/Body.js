import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
// import restaurants from "../Utils/mockData.js";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../Utils/constants";

const Body = () => {
  // State Variable
  const [resList, setResList] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    console.log(data);
    const swiggyJson = await data.json();

    console.log(swiggyJson);

    setResList(
      swiggyJson?.data?.success?.cards[1]?.gridWidget?.gridElements
        ?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      swiggyJson?.data?.success?.cards[1]?.gridWidget?.gridElements
        ?.infoWithStyle?.restaurants
    );
  };

  const filteredList = resList.filter((res) => res.info.avgRating > 4.2);

  const handleClick = () => {
    setResList(filteredList);
  };

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          className="search-box"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const resSearch = resList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRes(resSearch);
          }}
        >
          Search
        </button>
        <button className="filter-btn" onClick={handleClick}>
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} /> // Using keys is very important. Using index as a key is a bad practice. Unique ID is recommended.
        ))}
      </div>
    </div>
  );
};

export default Body;
