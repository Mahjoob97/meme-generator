import React from "react";
import trollFace from "../images/troll-face.png";

function Header() {
  return (
    <nav className="nav-header">
      <div className="header-title">
        <img src={trollFace} alt="troll-face" className="nav-logo" />
        <h2>Meme Generator</h2>
      </div>
      <h2>React course - project 3</h2>
    </nav>
  );
}

export default Header;
