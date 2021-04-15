import React from 'react';
import PropTypes from 'prop-types';
 ShowWeather.propTypes = {
    weather:PropTypes.object,
};
ShowWeather.defaultProps={
    weather:{}

}
function ShowWeather(props) {
    const {weather} =props
    console.log(weather)
    return (
        <div>
            
        </div>
    );
}

export default ShowWeather;