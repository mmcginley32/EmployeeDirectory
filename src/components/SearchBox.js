import React, { useContext } from "react";
import "../styles/SearchBox.css";
import dataContext from "../utils/DataContext";


//Search field for filtering results by typing
const SearchBox = () => {
  const context = useContext(dataContext);
  return (
    <div className="searchbox">
      <form className="form-inline">
      <label htmlFor="employee-filter">Filter Results:</label>
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(event) => context.handleSearchChange(event)}
        />
      </form>
    </div>
  );
}

//export
export default SearchBox;
