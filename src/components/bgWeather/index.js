import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./bgweather.css";
BgWeather.propTypes = {
  propsWeather: PropTypes.object,
  bgImg:PropTypes.func,
};
BgWeather.defaultProps={
    propsWeather:{},
    bgImg:null
}
function BgWeather(props) {
  const { propsWeather } = props;
  console.log(propsWeather);
// let d = new Date()
// let localTime = d.getTime()
// let localOffset = d.getTimezoneOffset() * 60000
// let utc = localTime + localOffset
if(propsWeather){

let dt =propsWeather.dt*1000;
let timezone =propsWeather.timezone*1000;
let atlanta = dt - timezone 
console.log(atlanta)
let date = new Date(atlanta)
 
    var hours = date.getHours()+7;
    var minutes = date.getMinutes();
    if(minutes < 9){ minutes = '0'+ minutes }
   var dates = date.getDate();
   var days = date.getDay();
   var months = date.getMonth() - 1;
   var years = date.getFullYear();
}
  function getDays() {
    const dayList = ["Mon", "Tues", "Wen", "Thur", "Fri", "Sat", "Sun"];
    return dayList[days - 1];
  }
  function getMonths() {
    const monthList = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return monthList[months];
  }
  console.log(getDays());
  console.log(getMonths());

if (propsWeather) {

    const icon = propsWeather.weather[0].icon;
    console.log(icon);
    var imgUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    

  
  }
 
  return (
    <Fragment>
      {propsWeather !== null && (
        <div className="bg-weather">
          <div className="bg__temp">
            <h1>{(propsWeather.main.temp - 273.15).toFixed(0)}°</h1>
          </div>
          <div className="bg__name-time">
            <p className="bg__name-time--name">{propsWeather.name}</p>
            <div className="bg__name-time--time">
              <span className="time">
                {hours}:{minutes}-{getDays()}, {dates} {getMonths()} '{years}
               
              </span>
            </div>
          </div>
          <div className="status">
            <p className="icon">
              <img src={imgUrl} alt="icon" />
            </p>
            <p className="weather-name">
              {propsWeather.weather[0].description}
            </p>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default BgWeather;
