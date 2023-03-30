import React, { useState } from "react";
import "./styles.css";

import { useFetchCities } from "../../hooks";
import * as com from "../../components";

export const SearchingForm = ({ data, error }) => {
  const [text, setText] = useState("");
  const [stateCities, setStateCities] = useState('');
  const { cities, loadingCities, errorCities } = useFetchCities(stateCities);
  const [suggestions, setSuggestions] = useState([]);
  // const [error, setError] = useState({});
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStateCities(text)
    if (text.length === 0) {
      // setError({
      //   error: true,
      //   message: 'Please enter a State!'
      // });
    } else if (suggestions.length === 0) {
      // setError({
      //   error: true,
      //   message: 'No Matching States!'
      // });
    }
    setSuggestions([]);
    setTimeout(() => {
      // setError({
      //   error: false,
      //   message: ''
      // });
    }, 3000);
  };

  const handleOnSuggest = (text) => {
    setText(text);
  };

  const handleOnChange = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = data.states.filter((city) => {
        const regex = new RegExp(`${text}`, "gi");
        return city.State.match(regex) || city.Code.match(regex);
      });
    } else {
      // setError({
      //   error: true,
      //   message: 'No maching states!'
      // });
    }
    setSuggestions(matches);
    setText(text);
  };

  return (
    <div>
      <div>
        {error ? <alert severity="error">{error.message}</alert> : ""}
        <form className="form-style" onSubmit={(e) => handleOnSubmit(e)}>
          <input
            className="autocomplete-input-style"
            type="text"
            value={text}
            onChange={(e) => handleOnChange(e.target.value)}
          />
          <button
            className="search-button-style"
            variant="contained"
            type="submit"
          >
            <span>Search City</span>
          </button>
        </form>
        <div className="cities-diaplay">
          {suggestions &&
            suggestions.map((suggestion, key) => {
              return (
                <div
                  className="suggestions"
                  key={key}
                  onClick={() => {
                    handleOnSuggest(suggestion.State);
                  }}
                >
                  {suggestion.State}, {suggestion.Code}
                </div>
              );
            })}
        </div>
      </div>
      <com.Displayer cities={cities} loadingCities={loadingCities} errorCities={errorCities} stateCities={stateCities}/>
    </div>
  );
};
