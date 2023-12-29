import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="header">
        <span>
          <a href="">Menu</a>
        </span>
        <span>
          <a href="">Search</a>
        </span>
      </div>
      <div className="title">
        <button>FOR HER</button>
        <span className="inner_header">
          <h3>LOVE&WEMA</h3>
        </span>
        <button>FOR HER</button>
      </div>
      <div className="account">
        <span>Account</span>
        <span>Shopping Bag (0)</span>
      </div>
    </div>
  );
};

export default Navbar;
