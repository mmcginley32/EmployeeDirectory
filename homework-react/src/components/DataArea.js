import React, { Component } from "react";
import API from "../utils/API";
import DataTable from "./DataTable";

class DataArea extends Component {
  state = { users: [{}] };
  
  componentDidMount() {
    API.getUsers().then((results) => {
      console.log(results);
      this.setState({
        users: results.data.results,
      });
    });
  }
  headings = [
      {name: "Image", width: "10%"},
      {name: "Name", width: "10%"},
      {name: "Phone", width: "10%"}, 
      {name: "Email", width: "10%"}, 
  ]

  render() {
    return (
      <div>
        <DataTable 
            users={this.state.users}
            headings={this.headings}
        
        ></DataTable>
      </div>
    );
  }
}

export default DataArea;
