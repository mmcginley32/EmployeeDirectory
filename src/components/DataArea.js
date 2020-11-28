import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";
import API from "../utils/API";
import DataContext from "../utils/DataContext";
import "../styles/DataArea.css";


//headings and array for users/filtered users
const DataArea = () => {
  const [developerState, setDeveloperState] = useState({
    users: [],
    order: "ascend",
    filteredUsers: [],
    headings: [
      { name: "Image", width: "10%" },
      { name: "Name", width: "10%" },
      { name: "Phone", width: "20%" },
      { name: "Email", width: "20%" },
      { name: "DOB", width: "10%" },
    ]
  });
const mappedNames = developerState.headings.map((heading) => {
  return heading.name
})
  console.log(mappedNames);
  // Sort by clicking on column header
  const handleSort = (heading) => {
    let currentOrder = developerState.headings
      .filter((element) => element.name.toLowerCase() === heading.toLowerCase())[0]
      currentOrder.order = currentOrder.order || "ascend"
    if (currentOrder.order === "descend") {
      currentOrder.order = "ascend";
    } else if (currentOrder.order === "ascend") {
      currentOrder.order = "descend";
    }

  
    const compare = (a, b) => {
      if (currentOrder.order === "ascend") {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return a[heading].first.toString().localeCompare(b[heading].first);
        } else if (heading === "dob") {
          return a[heading].age - b[heading].age;
        } else {
          return a[heading].toString().localeCompare(b[heading]);
        }
      } else {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else if (heading === "dob") {
          return b[heading].age - a[heading].age;
        } else {
          return (b[heading].toString().localeCompare(a[heading]));
        }
      }
    };
    const sortedUsers = developerState.filteredUsers.sort(compare);
    const updateHeadings = developerState.headings.map((element) => {
      element.order = element.name === heading ? currentOrder.order : element.order;
      return element;
    });
    setDeveloperState({
      ...developerState,
      filteredUsers: sortedUsers,
      headings: updateHeadings,
    });
  };

  //Narrow results through typing into search field.
  const handleSearchChange = (event) => {
    const filter = event.target.value;
    const filteredList = developerState.users.filter((item) => {
      let values =
        item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
      if (values.indexOf(filter.toLowerCase()) !== -1) {
        return item;
      };return "";
    });
    
    setDeveloperState({ ...developerState, filteredUsers: filteredList });
  };

  //Populate an employee list from API
  useEffect(() => {
    API.populateEmployees().then((results) => {
      console.log(results.data.results);
      setDeveloperState((prevState) => ({
        ...prevState,
        users: results.data.results,
        filteredUsers: results.data.results,
      }));
    });
  }, []);

  return (
    <DataContext.Provider
      value={{ developerState, handleSearchChange, handleSort }}
    >
      <Nav />
      <div className="data-area">
        {developerState.filteredUsers.length > 0 ? <DataTable /> : <div></div>}
      </div>
    </DataContext.Provider>
  );
};

//export
export default DataArea;