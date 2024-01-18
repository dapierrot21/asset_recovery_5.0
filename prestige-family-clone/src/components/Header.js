import React from "react";
import backgroundImage from "./images/home_1.png"; // Adjust the path as needed

function Header() {
  return (
    <header
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="header-content">
        <h1>Assets Recovery 5.0</h1>
        <h4>We are here to assist you!</h4>
        <h4>
          It's your Assets. <strong>Claim it</strong>
        </h4>
      </div>
    </header>
  );
}

export default Header;
