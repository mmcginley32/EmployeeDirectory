import React, { useContext } from "react";
import "../styles/DataTable.css";
import DataBody from "./DataBody";
import DataContext from "../utils/DataContext";


//Table for displaying API results
const DataTable = () => {
  const context = useContext(DataContext);
  return (
    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table condensed"
      >
        <thead>
          <tr>
            {context.developerState.headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    context.handleSort(name.toLowerCase());
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>
        <DataBody />
      </table>
    </div>
  );
}


//export
export default DataTable;