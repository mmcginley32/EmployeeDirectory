import axios from "axios";

//API call for 50 results in United States (for uniform formatting purposes)
const API = {
  populateEmployees: function () {
    return axios.get('https://randomuser.me/api/?results=50&nat=us');
  },
};

//export
export default API;