import axios from "axios";

export default () => {
  axios.defaults.baseURL = "http://localhost:3001/api";
};
