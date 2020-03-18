import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  let itemslinks = [];
  for (let i = 1; i <= 24; i++) {
    itemslinks.push(<Link to={"/ex" + i} >P{i}</Link>);
  }
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/home">Home Page</Link>
      <Link to="/about">About</Link>
      {/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_subnav */}
      <div className="subnav">
        <button className="subnavbtn">Example <i className="fa fa-caret-down"></i></button>
        <div className="subnav-content">
          {/* <Link to="/ex1">P1</Link>*/}
          {itemslinks}
        </div>
      </div>

      <Link to="/form">Form Validation</Link>
      <Link to="/hoc">HOC</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Navbar;