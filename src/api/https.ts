import axios from "axios";
import { BASE_URL } from "../types/baseUrl";

const accessKey = process.env.API_KEY;

const headers: any = {
  "X-Yandex-Weather-Key": accessKey,
};

export const getWeather = async (currentLatitude : any, currentLongitude : any) => {
  const getWeatherData = await axios.post(BASE_URL, {
    headers,
  });
  return getWeatherData.data;

};
