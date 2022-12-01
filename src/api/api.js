import axios from "axios";

export const api = axios.create({
  baseURL: "https://forumidontknow.herokuapp.com/api",
});
