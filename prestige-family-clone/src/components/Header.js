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
        <nav>
          <a href="#link1" className="nav-link">
            Home
          </a>
          <a href="#link2" className="nav-link">
            Contact
          </a>
          {/* other links */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
