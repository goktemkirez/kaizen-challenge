import axios from "axios";

const dahaAxios = axios.create({
  baseURL: "https://api.extrazone.com",
  headers: {
    "X-Country-Id": `TR`,
    "X-Language-Id": `TR`,
  },
});

export default dahaAxios;
