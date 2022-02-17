/* eslint-disable */
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const instance = axios.create({
  baseURL: `/B552584/ArpltnStatsSvc`,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    accept: "application/json",
  },
});

export const apis = {
  getCapitalDust: () =>
    instance.get(
      `/getCtprvnMesureLIst?itemCode=PM10&dataGubun=HOUR&pageNo=1&numOfRows=100&returnType=json&serviceKey=${API_KEY}`
    ),
};
