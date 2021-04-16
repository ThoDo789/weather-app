import React from "react";
import PropTypes from "prop-types";
import PlacesAutocomplete from "./weather";
import ShowWeather from "./Show-weather";
import "./details.css"
DetailsWeather.propTypes = {
  propsWeather: PropTypes.object,
  handleLatLng: PropTypes.func
};

function DetailsWeather(props) {
  const { propsWeather, handleLatLng } = props;

  const LatLng = params => {
    handleLatLng(params);
  };

  return (
    <div className="wrraper">
        <PlacesAutocomplete handleLatLng={LatLng} />
        <ShowWeather getWeather={propsWeather} />
      </div>
    
  );
}

export default DetailsWeather;
