import React from "react";
import "../styles/Header.css";

//Function for header
function Header() {
  return (
    <div className="header">
      <h1>Employee Directory</h1>
      <p>
        Click on a heading to sort or use the search field to narrow results.
      </p>
    </div>
  );
}

//export
export default Header;
