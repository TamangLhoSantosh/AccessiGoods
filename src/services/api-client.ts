import axios from "axios";

export default axios.create({
  params: {},
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});
