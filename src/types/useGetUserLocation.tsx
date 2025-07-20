import { UserContext } from "../providers";
import { useContext, useState, useEffect } from "react";

export default function useGetUserLocation() {
  const { store } = useContext(UserContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      store.setCurrentCoords(latitude, longitude );
    });
  }, []);
}
