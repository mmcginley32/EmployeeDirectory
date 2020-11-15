import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=200&nat=us";
// const APIKEY = "&apikey=trilogy";

const API = {
  getUsers: function () {
    return axios.get(BASEURL);
  },
};

export default API;
