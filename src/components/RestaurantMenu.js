import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  });


  fetchMenu

  
  return (
    <div className="menu">
      <h1>Res Name</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biriyani</li>
        <li>Ghee Rice</li>
        <li>Kabab</li>
        <li>Chilly Paneer</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
