import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  let itemslinks = [];
  for (let i = 1; i <= 5; i++) {
    itemslinks.push(<Link to={"/P" + i} >P{i}</Link>);
  }
  return (
    // <div className="navbar">
    //   <Link to="/">Home</Link>
    //   <div className="subnav">
    //     <div className="subnav-content">
    //       {itemslinks}
    //     </div>
    //   </div>
    // </div>
    <>
    </>
  );
};

export default Navbar;