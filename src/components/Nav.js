import React from "react";
import SearchBox from "./SearchBox";
import "../styles/Nav.css";


//Navbar for search field
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="search-area col-4">
        <SearchBox />
      </div>
    </nav>
  );
}


//export
export default Nav;
