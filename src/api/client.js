/* eslint-disable no-restricted-globals */
import axios from "axios";

let baseURL = "http://localhost:5000/api";

export const Client = axios.create({
  baseURL,
  crossDomain: true,
  headers: { "Content-Type": "application/json" }
});
