import { makeAutoObservable } from "mobx";
import { getWeather } from "../api/https";

export default class Store {
  weather = {} as string;
  currentLatitude = {} as any;
  currentLongitude = {} as any;

  constructor() {
    makeAutoObservable(this);
  }
  setCurrentCoords(latitude: any, longitude: any) {
    this.currentLatitude = latitude;
    this.currentLongitude = longitude;
  }
  setWeather(data: any) {
    this.weather = data;
  }
  async getWeather() {
    const res = await getWeather(this.currentLatitude, this.currentLongitude);
    this.setWeather(res.data.json);
  }
}
