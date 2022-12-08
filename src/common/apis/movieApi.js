import axios from "axios";

export default axios.create({
  //to use API 
  baseURL: "https://www.omdbapi.com",
  //   baseURL: ": http://www.omdbapi.com/?i=tt3896198&apikey=5250f4c3,

});
