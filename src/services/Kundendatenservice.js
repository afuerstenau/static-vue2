import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://meintest.greenpeace-energy.de/",
  crossDomain: true,
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export default {
  getKundendaten(token) {
    return apiClient.get("p1?method=bestaetigeVertrag&token=" + token);
  },
};
