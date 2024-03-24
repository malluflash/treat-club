import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [buttonText, setButtonText] = useState("Login");
  console.log("Header rendered");

  // If no dependancy array => useEffect is called on every component render
  // If dependancy array is empty, [] => useEffect is called only on initial render
  // If dependancy array is [buttonText] => useEffect is called everytime buttonText is updated

  useEffect(() => {
    console.log("useEffect rendered");
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About Us</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              buttonText === "Login"
                ? setButtonText("Logout")
                : setButtonText("Login");
            }}
          >
            {buttonText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
