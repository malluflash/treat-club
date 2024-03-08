import React from "react";
import { SWIGGY_IMG_CDN } from "../Utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,costForTwo,
    sla
  } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="res-img"
        src={SWIGGY_IMG_CDN + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h5>Cuisine: {cuisines.join(",")}</h5>
      <h4>Rating: {avgRating}</h4>
      <h4>Cost: {costForTwo}</h4>
      <h5>Delivering in {sla.slaString}</h5>
    </div>
  );
};

export default RestaurantCard;
