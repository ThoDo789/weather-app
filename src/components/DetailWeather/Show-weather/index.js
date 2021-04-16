import React from "react";
import PropTypes from "prop-types";
import "./showWeather.css"
ShowWeather.propTypes = {
  getWeather: PropTypes.object
};
ShowWeather.defaultProps = {
  getWeather: {}
};
function ShowWeather(props) {
  const { getWeather } = props;
  console.log(getWeather);
  console.log(getWeather);

  return (
    <div className="weather-show">
      <h1 className="weather-show__title"> Weather Details </h1>
     { getWeather && <div className="weather-show__content">
        <div className="weather-show__details">
          <p className="weather-show__details-name">Cloudy</p>
          <p className="weather-show__details-value">{getWeather.clouds.all}%</p>
        </div>
        <div className="weather-show__details">
          <p className="weather-show__details-name">Humidity</p>
          <p className="weather-show__details-value">{getWeather.main.humidity}%</p>
        </div>
        <div className="weather-show__details">
          <p className="weather-show__details-name">Wind</p>
          <p className="weather-show__details-value">{getWeather.wind.speed}km/h</p>
        </div>
        <div className="weather-show__details">
          <p className="weather-show__details-name">Country</p>
          <p className="weather-show__details-value">{getWeather.sys.country}</p>
        </div>
      </div>}
    </div>
  );
}

export default ShowWeather;
