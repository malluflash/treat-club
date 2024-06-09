import React from "react";
import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  const shimmerCards = Array.from({ length: 16 }, (_, index) => (
    <ShimmerCard key={index} />
  ));

  return <div className="shimmer-container">{shimmerCards}</div>;
};

export default Shimmer;
