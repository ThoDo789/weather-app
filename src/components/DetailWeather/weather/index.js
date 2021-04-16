import usePlacesAutocomplete, { getGeocode,getLatLng} from "use-places-autocomplete";
import "./weather.css"
  
  const PlacesAutocomplete = (props) => {
    const{handleLatLng} = props;
    const { ready,value,suggestions: { status, data }, setValue, clearSuggestions,} = usePlacesAutocomplete({
      requestOptions: {
        /* Define search scope here */
      },
      debounce: 300,
    });
  
    const handleInput = (e) => {
      // Update the keyword of the input element
      setValue(e.target.value);
    };
  const handleReset=()=>{
    setValue('')
  }
    const handleSelect = ({ description }) => () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();
  
      // Get latitude and longitude via utility functions
      getGeocode({ address: description })
        .then((results) => getLatLng(results[0]))
        .then((latLng) => {
          console.log("Coordinates: ",latLng);
          handleLatLng(latLng)
        })
        .catch((error) => {
          console.log("😱 Error: ", error);
        });
    };
   
    const renderSuggestions = () =>
      data.map((suggestion) => {
        const { place_id, structured_formatting: { main_text, secondary_text } } = suggestion;
  
        return (
          <li className="location__item" key={place_id} onClick={handleSelect(suggestion)}>
            <strong>{main_text}</strong> <small>{secondary_text}</small>
          </li>
        );
      });
  
    return (
      <div className="container autocomplete" >
        
        <input className="form-group"
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Where are you going?"
        />
        {status === "OK" && <ul className="location__list">{renderSuggestions()}</ul>}
        <button className="btn-reset" onClick={handleReset}>Reset</button>
      </div>
    );
  };
  export default PlacesAutocomplete;