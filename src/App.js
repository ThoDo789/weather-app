import React, { useEffect, useState } from "react";
import "./App.css";
import BgWeather from "./components/bgWeather";
import DetailsWeather from "./components/DetailWeather";
import CurrentLocation from "./components/DetailWeather/current-location";
import Clear from "./images/Atmosphere.jpg";
import Atmosphere from "./images/Clear.jpg";
import Clouds from "./images/Clouds.jpg";
import Drizzle from "./images/Drizzle.jpg";
import Rain from "./images/Rain.jpg";
import Snow from "./images/Snow.jpg";
import Thunderstorm from "./images/Thunderstorm.jpg";
const App = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [latLng, setLatLog] = useState(null);
  const [weather, setWeather] = useState(null);
 const [bg,setBg] = useState('')
  const handleLocation = data => {
    // setCurrentLocation(data)
  };

  const callHandleLatLng = latLng => {
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

  
  if(weather!==null){
    const code = weather.weather[0].id;
    console.log(code);
    function desc() {
      let description;
  
      if (code < 300) {
        description = Thunderstorm;
        return description;
      } else if (code >= 300 && code < 321) {
        description = Drizzle;
        return description;
  
      } else if (code >= 500 && code < 600) {
        description = Rain;
        return description;
  
      } else if (code >= 600 && code < 700) {
        description = Snow;
        return description;
  
      } else if (code > 700 &&
         code < 800) {
        description = Atmosphere;
        return description;
  
      } else if (code === 800) {
        description = Clear;
        return description;
  
      }
      else if (code > 800) {
        description = Clouds;
        return description;
  
      }
      else{
        return;
      }
      
    }
   var bgImg = desc()
   console.log(bgImg)
  }


  return (
    <div className="app" style={{backgroundImage:`url(${bgImg})`}}>
      <div className="app-weather">
       
        <div className="container wrapper-col">
        <CurrentLocation getCurrent={handleLocation} />
          <div className="row wrapper-col">
            
            <div className="col-8 wrapper-col bg" style={{backgroundImage:`url(${bgImg})`}}>
              <BgWeather propsWeather={weather} />
              </div>
              <div className="col-4 details">
              <DetailsWeather
                handleLatLng={callHandleLatLng}
                propsWeather={weather}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
