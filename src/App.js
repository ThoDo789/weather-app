import React, { useEffect, useState } from "react";
import CurrentLocation from "./components/current-location";
import ShowWeather from "./components/Show-weather";
import PlacesAutocomplete from "./components/weather";
import "./App.css";
const App = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [latLng, setLatLog] = useState(null);
  const [weather, setWeather] = useState(null);

  const handleLocation = data => {
    // setCurrentLocation(data)
  };

  const handleLatLng = latLng => {
    setLatLog(latLng);
  };
  console.log(currentLocation, latLng);
  useEffect(() => {
    async function fetchWeather() {
      try {
        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latLng.lat}&lon=${latLng.lng}&appid=e1a5f0e6dbe87d1067ada6dd9a2ee751`;
        const res = await fetch(url);
        const response = await res.json();
        setWeather(response);
      } catch (error) {}
    }
    fetchWeather();
  }, [latLng]);

  return (
    <div className="app">
      <div className="app-weather">
        <CurrentLocation getCurrent={handleLocation} />
        <PlacesAutocomplete getLatLngLocation={handleLatLng} />
        <ShowWeather weather={weather} />
      </div>
    </div>
  );
};

export default App;
